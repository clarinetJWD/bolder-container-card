import { LitElement, html, nothing } from 'lit'
import {
  type HomeAssistant,
  type LovelaceCardConfig,
  type LovelaceCardEditor
} from 'custom-card-helpers'
import localize from './localize/localize'
import { customElement, property, state } from 'lit/decorators.js'
import type { Template, BolderContainerCardConfig } from './types'
// import styles from './editor.css'

@customElement('bolder-container-card-editor-1')
export class BolderContainerCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant

  @state() private config!: Partial<BolderContainerCardConfig>

  setConfig (config: LovelaceCardConfig & BolderContainerCardConfig): void {
    this.config = config
  }

  protected getLocale (): string {
    return this.config.locale ?? this.hass.locale.language ?? 'en-US'
  }

  protected computeLabel (schema): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return localize('editor.' + schema.name, schema.locale)
  }

  protected render (): Template {
    if (!this.hass) {
      return nothing
    }

    return html`
      <ha-form
      .hass=${this.hass}
      .data=${this.config}
      .schema=${[
        { name: 'title', locale: this.getLocale(), selector: { text: {} } },
        { name: 'keep_border_radius', locale: this.getLocale(), selector: { boolean: {} } },
        {
          name: 'mode',
          locale: this.getLocale(),
          selector: {
            select: {
              multiple: false,
              options: [
                { label: 'horizontal', value: 'horizontal' },
                { label: 'vertical', value: 'vertical' }
              ]
            }
          }
        }
      ]}
      .computeLabel=${(schema) => this.computeLabel(schema)}
      @value-changed=${(event) => { this.valueChanged(event) }}
      ></ha-form>
    `
  }

  private valueChanged (event): void {
    if (!this.config || !this.hass) {
      return
    }
    const _config = Object.assign({}, this.config)
    _config.mode = event.detail.value.mode
    _config.title = event.detail.value.title
    _config.keep_background = event.detail.value.keep_background
    _config.keep_border_radius = event.detail.value.keep_border_radius
    _config.keep_box_shadow = event.detail.value.keep_box_shadow
    _config.keep_margin = event.detail.value.keep_margin
    _config.keep_outer_padding = event.detail.value.keep_outer_padding
    _config.card_background_override = event.detail.value.card_background_override
    _config.is_inner_container = event.detail.value.is_inner_container
    _config.cards = event.detail.value.cards
    _config.styles = event.detail.value.styles

    this.config = _config

    const ev = new CustomEvent('config-changed', {
      detail: { config: _config },
      bubbles: true,
      composed: true
    })
    this.dispatchEvent(ev)
  }
}
