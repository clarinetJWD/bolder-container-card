import {
  mdiCodeBraces,
  mdiContentCopy,
  mdiContentCut,
  mdiDelete,
  mdiListBoxOutline,
  mdiPlus
} from '@mdi/js'
import '@polymer/paper-tabs'
import '@polymer/paper-tabs/paper-tab'
import deepClone from 'deep-clone-simple'
import type { CSSResultGroup, TemplateResult } from 'lit'
import { LitElement, css, html, nothing } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'
import {
  any,
  array,
  assert,
  object,
  optional,
  string
} from 'superstruct'
import { keyed } from 'lit/directives/keyed.js'
import { type HASSDomEvent, fireEvent, type LovelaceCardConfig, type LovelaceConfig, type HomeAssistant, type LovelaceCardEditor } from 'custom-card-helpers'
// import '../../../../components/ha-icon-button'
// import '../../../../components/ha-icon-button-arrow-prev'
// import '../../../../components/ha-icon-button-arrow-next'
// import 'https://raw.githubusercontent.com/home-assistant/frontend/20250404.0/src/panels/lovelace/editor/card-editor/hui-card-element-editor.ts'
// import '../card-editor/hui-card-picker'
import type { ConfigChangedEvent, GUIModeChangedEvent, BolderContainerCardConfig } from './types'

const cardConfigStruct = object({
  type: string(),
  view_layout: any(),
  layout_options: any(),
  grid_options: any(),
  visibility: any(),
  cards: array(any()),
  title: optional(string())
})

const SCHEMA = [
  {
    name: 'title',
    selector: { text: {} }
  }
] as const

@customElement('bolder-container-card-editor')
export class BolderContainerCardEditor
  extends LitElement
  implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant

  @property({ attribute: false }) public lovelace?: LovelaceConfig

  protected _clipboard?: LovelaceCardConfig

  @state() protected _config?: BolderContainerCardConfig

  @state() protected _selectedCard = 0

  @state() protected _GUImode = true

  @state() protected _guiModeAvailable? = true

  protected _keys = new Map<string, string>()

  protected _schema: readonly any[] = SCHEMA

  @query('hui-card-element-editor')
  protected _cardEditorEl?: any

  public setConfig (config: Readonly<BolderContainerCardConfig>): void {
    assert(config, cardConfigStruct)
    this._config = config
  }

  public focusYamlEditor (): void {
    this._cardEditorEl?.focusYamlEditor()
  }

  protected formData (): object {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._config!
  }

  protected render (): TemplateResult | typeof nothing {
    if (!this.hass || !this._config) {
      return nothing
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unnecessary-type-assertion
    const selected = this._selectedCard!
    const numcards = this._config.cards.length

    const isGuiMode = !this._cardEditorEl || this._GUImode
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this.formData()}
        .schema=${this._schema}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${(ev: CustomEvent) => { this._valueChanged(ev) }}
      ></ha-form>
      <div class="card-config">
        <div class="toolbar">
          <paper-tabs
            .selected=${selected}
            scrollable
            @iron-activate=${(ev) => { this._handleSelectedCard(ev) }}
          >
            ${this._config.cards.map(
              (_card, i) => html` <paper-tab> ${i + 1} </paper-tab> `
            )}
          </paper-tabs>
          <paper-tabs
            id="add-card"
            .selected=${selected === numcards ? '0' : ''}
            @iron-activate=${(ev) => { this._handleSelectedCard(ev) }}
          >
            <paper-tab>
              <ha-svg-icon .path=${mdiPlus}></ha-svg-icon>
            </paper-tab>
          </paper-tabs>
        </div>

        <div id="editor">
          ${selected < numcards
            ? html`
                <div id="card-options">
                  <ha-icon-button
                    class="gui-mode-button"
                    @click=${() => { this._toggleMode() }}
                    .disabled=${!this._guiModeAvailable}
                    .label=${this.hass?.localize(
                      isGuiMode
                        ? 'ui.panel.lovelace.editor.edit_card.show_code_editor'
                        : 'ui.panel.lovelace.editor.edit_card.show_visual_editor'
                    )}
                    .path=${isGuiMode ? mdiCodeBraces : mdiListBoxOutline}
                  ></ha-icon-button>

                  <ha-icon-button-arrow-prev
                    .disabled=${selected === 0}
                    .label=${this.hass?.localize(
                      'ui.panel.lovelace.editor.edit_card.move_before'
                    )}
                    @click=${(ev: Event) => { this._handleMove(ev) }}
                    .move=${-1}
                  ></ha-icon-button-arrow-prev>

                  <ha-icon-button-arrow-next
                    .label=${this.hass?.localize(
                      'ui.panel.lovelace.editor.edit_card.move_after'
                    )}
                    .disabled=${selected === numcards - 1}
                    @click=${(ev: Event) => { this._handleMove(ev) }}
                    .move=${1}
                  ></ha-icon-button-arrow-next>

                  <ha-icon-button
                    .label=${this.hass?.localize(
                      'ui.panel.lovelace.editor.edit_card.copy'
                    )}
                    .path=${mdiContentCopy}
                    @click=${() => { this._handleCopyCard() }}
                  ></ha-icon-button>

                  <ha-icon-button
                    .label=${this.hass?.localize(
                      'ui.panel.lovelace.editor.edit_card.cut'
                    )}
                    .path=${mdiContentCut}
                    @click=${() => { this._handleCutCard() }}
                  ></ha-icon-button>

                  <ha-icon-button
                    .label=${this.hass?.localize(
                      'ui.panel.lovelace.editor.edit_card.delete'
                    )}
                    .path=${mdiDelete}
                    @click=${() => { this._handleDeleteCard() }}
                  ></ha-icon-button>
                </div>
                ${keyed(
                  this._getKey(this._config.cards, selected),
                  html`<hui-card-element-editor
                    .hass=${this.hass}
                    .value=${this._config.cards[selected]}
                    .lovelace=${this.lovelace}
                    @config-changed=${(ev: HASSDomEvent<ConfigChangedEvent>) => { this._handleConfigChanged(ev) }}
                    @GUImode-changed=${(ev: HASSDomEvent<GUIModeChangedEvent>) => { this._handleGUIModeChanged(ev) }}
                  ></hui-card-element-editor>`
                )}
              `
            : html`
                <hui-card-picker
                  .hass=${this.hass}
                  .lovelace=${this.lovelace}
                  @config-changed=${(ev) => { this._handleCardPicked(ev) }}
                ></hui-card-picker>
              `}
        </div>
      </div>
    `
  }

  private _getKey (cards: LovelaceCardConfig[], index: number): string {
    const key = `${cards[index].type}${index}${cards.length}`
    if (!this._keys.has(key)) {
      this._keys.set(key, Math.random().toString())
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._keys.get(key)!
  }

  protected _handleSelectedCard (ev): void {
    if (ev.target.id === 'add-card') {
      this._selectedCard = this._config?.cards.length ?? 0
      return
    }
    this._setMode(true)
    this._guiModeAvailable = true
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    this._selectedCard = parseInt(ev.detail.selected, 10)
  }

  protected _handleConfigChanged (ev: HASSDomEvent<ConfigChangedEvent>): void {
    ev.stopPropagation()
    if (!this._config) {
      return
    }
    const cards = [...this._config.cards]
    const newCard = ev.detail.config as LovelaceCardConfig
    cards[this._selectedCard] = newCard
    this._config = { ...this._config, cards }
    this._guiModeAvailable = ev.detail.guiModeAvailable
    fireEvent(this, 'config-changed', { config: this._config })
  }

  protected _handleCardPicked (ev): void {
    ev.stopPropagation()
    if (!this._config) {
      return
    }
    const config = ev.detail.config
    const cards = [...this._config.cards, config]
    this._config = { ...this._config, cards }
    this._keys.clear()
    fireEvent(this, 'config-changed', { config: this._config })
  }

  protected _handleCopyCard (): void {
    if (!this._config) {
      return
    }
    this._clipboard = deepClone(this._config.cards[this._selectedCard])
  }

  protected _handleCutCard (): void {
    this._handleCopyCard()
    this._handleDeleteCard()
  }

  protected _handleDeleteCard (): void {
    if (!this._config) {
      return
    }
    const cards = [...this._config.cards]
    cards.splice(this._selectedCard, 1)
    this._config = { ...this._config, cards }
    this._selectedCard = Math.max(0, this._selectedCard - 1)
    this._keys.clear()
    fireEvent(this, 'config-changed', { config: this._config })
  }

  protected _handleMove (ev: Event): void {
    if (!this._config) {
      return
    }
    const move = (ev.currentTarget as any).move
    const source = this._selectedCard
    const target = source + move
    const cards = [...this._config.cards]
    const card = cards.splice(this._selectedCard, 1)[0]
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    cards.splice(target, 0, card)
    this._config = {
      ...this._config,
      cards
    }
    this._selectedCard = target
    this._keys.clear()
    fireEvent(this, 'config-changed', { config: this._config })
  }

  protected _handleGUIModeChanged (ev: HASSDomEvent<GUIModeChangedEvent>): void {
    ev.stopPropagation()
    this._GUImode = ev.detail.guiMode
    this._guiModeAvailable = ev.detail.guiModeAvailable
  }

  protected _toggleMode (): void {
    this._cardEditorEl?.toggleMode()
  }

  protected _setMode (value: boolean): void {
    this._GUImode = value
    if (this._cardEditorEl) {
      this._cardEditorEl.GUImode = value
    }
  }

  protected _valueChanged (ev: CustomEvent): void {
    fireEvent(this, 'config-changed', { config: ev.detail.value })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  protected _computeLabelCallback = (schema: any) =>
    this.hass?.localize(
      `ui.panel.lovelace.editor.card.${this._config?.type}.${schema.name}`
    )

  static get styles (): CSSResultGroup {
    return [
      css`
        .card-config {
          /* Cancels overlapping Margins for HAForm + Card Config options */
          overflow: auto;
        }
        ha-switch {
          padding: 16px 6px;
        }
        .side-by-side {
          display: flex;
          align-items: flex-end;
        }
        .side-by-side > * {
          flex: 1;
          padding-right: 8px;
          padding-inline-end: 8px;
          padding-inline-start: initial;
        }
        .side-by-side > *:last-child {
          flex: 1;
          padding-right: 0;
          padding-inline-end: 0;
          padding-inline-start: initial;
        }
        .suffix {
          margin: 0 8px;
        }
        hui-action-editor,
        ha-select,
        ha-textfield,
        ha-icon-picker {
          margin-top: 8px;
          display: block;
        }
        ha-expansion-panel {
          display: block;
          --expansion-panel-content-padding: 0;
          border-radius: 6px;
          --ha-card-border-radius: 6px;
        }
        ha-expansion-panel .content {
          padding: 12px;
        }
        ha-expansion-panel > *[slot="header"] {
          margin: 0;
          font-size: inherit;
          font-weight: inherit;
        }
        ha-expansion-panel ha-svg-icon {
          color: var(--secondary-text-color);
        }
        .toolbar {
          display: flex;
          --paper-tabs-selection-bar-color: var(--primary-color);
          --paper-tab-ink: var(--primary-color);
        }
        paper-tabs {
          display: flex;
          font-size: 14px;
          flex-grow: 1;
        }
        #add-card {
          max-width: 32px;
          padding: 0;
        }

        #card-options {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }

        #editor {
          border: 1px solid var(--divider-color);
          padding: 12px;
        }
        @media (max-width: 450px) {
          #editor {
            margin: 0 -12px;
          }
        }

        .gui-mode-button {
          margin-right: auto;
          margin-inline-end: auto;
          margin-inline-start: initial;
        }
      `
    ]
  }
}
