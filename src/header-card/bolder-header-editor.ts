import { LitElement, html, nothing } from 'lit'
import {
  type HomeAssistant,
  type LovelaceCardConfig,
  type LovelaceCardEditor
} from 'custom-card-helpers'
import localize from '../localize/localize'
import { customElement, property, state } from 'lit/decorators.js'
import type { BolderHeaderCardConfig } from './bolder-header-types'
import type { Template } from '../types'
// import styles from './editor.css'

@customElement('bolder-header-card-editor')
export class BolderHeaderCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant

  @state() private config!: Partial<BolderHeaderCardConfig>

  setConfig (config: LovelaceCardConfig & BolderHeaderCardConfig): void {
    this.config = config
  }

  private getEntitiesByType (type: string, deviceClass?: string): string[] {
    if (!this.hass) {
      return []
    }

    const entities = Object.keys(this.hass.states).filter((id) =>
      id.startsWith(type)
    )

    if (deviceClass) {
      return entities.filter(
        (id) => this.hass?.states[id]?.attributes?.device_class === deviceClass
      )
    }

    return entities
  }

  protected getLocale (): string {
    return this.config.locale ?? this.hass.locale.language ?? 'en-GB'
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
        {
          title: localize('editor.basic_settings', this.getLocale()),
          type: 'expandable' as const,
          flatten: true,
          expanded: true,
          locale: this.getLocale(),
          schema: [
            { name: 'title', locale: this.getLocale(), selector: { text: {} } },
            { name: 'subtitle', locale: this.getLocale(), selector: { text: {} } },
            { name: 'icon', locale: this.getLocale(), selector: { icon: {} } }
            /* {
              name: 'size',
              locale: this.getLocale(),
              selector: {
                select: {
                  options: [
                    { label: 'h1', value: 'h1' },
                    { label: 'h2', value: 'h2' },
                    { label: 'h3', value: 'h3' },
                    { label: 'h4', value: 'h4' },
                    { label: 'h5', value: 'h5' },
                    { label: 'h6', value: 'h6' }
                  ]
                }
              }
            } */
          ]
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
    _config.title = event.detail.value.title
    _config.subtitle = event.detail.value.subtitle
    _config.icon = event.detail.value.icon
    _config.styles = event.detail.value.styles

    this.config = _config

    const ev = new CustomEvent('config-changed', {
      detail: { config: _config },
      bubbles: true,
      composed: true
    })
    this.dispatchEvent(ev)
  }

  protected localize (name: string, locale: string): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return localize('editor.' + name, locale)
  }
}
