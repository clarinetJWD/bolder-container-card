import { LitElement, type TemplateResult, html, type PropertyValues, css, type CSSResultGroup, unsafeCSS, type CSSResult } from 'lit'
import { customElement, property } from 'lit-element'
/* import { ifDefined } from 'lit-html/directives/if-defined' */
import { type HomeAssistant, type LovelaceCardConfig, createThing, type LovelaceCard, type LovelaceCardEditor } from 'custom-card-helpers'
import type { BolderContainerCardConfig, MergedBolderContainerCardConfig, StyleItem } from './types'
import { GetCss } from './styles'
import localize from './localize/localize'
import * as pjson from '../package.json'

console.info(
  `%c BOLDER-CONTAINER-CARD \n%c   Version ${pjson.version}   `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
);

// This puts your card into the UI card picker dialog
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'bolder-container-card',
  name: 'Bolder Container Card',
  description: 'A container card like Stack In Card that allows for more customization and theming.'
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HELPERS = (window as any).loadCardHelpers ? (window as any).loadCardHelpers() : undefined

@customElement('bolder-container-card')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class BolderContainerCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) protected _card?: LovelaceCard
  @property({ attribute: false }) private _config?: MergedBolderContainerCardConfig

  private static _hass?: HomeAssistant

  private _cardPromise: Promise<LovelaceCard> | undefined

  // eslint-disable-next-line accessor-pairs
  set hass (hass: HomeAssistant) {
    BolderContainerCard._hass = hass
    if (this._card) {
      this._card.hass = hass
    }
  }

  protected static getLocale (): string {
    return BolderContainerCard._hass?.locale.language ?? 'en-US'
  }

  protected static computeLabel (schema): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return localize('editor.' + schema.name, schema.locale)
  }

  public static async getConfigElement (): Promise<LovelaceCardEditor> {
    await import('./editor')
    return document.createElement('bolder-container-card-editor')
  }

  // https://lit.dev/docs/components/styles/
  static get styles (): CSSResultGroup {
    const root = document.documentElement
    const value = getComputedStyle(root).getPropertyValue('--bolder-container-card-gap').trim()
    return [css`${unsafeCSS(GetCss(!!value))}`]
  }

  public setConfig (config: BolderContainerCardConfig): void {
    if (!config.cards) {
      throw new Error('There is no cards parameter defined')
    }
    this._config = {
      ...config,
      mode: config.mode ?? 'vertical',
      title: config.title ?? '',
      keep_background: config.keep_background ?? true,
      keep_margin: config.keep_margin ?? false,
      keep_box_shadow: config.keep_box_shadow ?? false,
      keep_border_radius: config.keep_border_radius ?? false,
      keep_outer_padding: config.keep_outer_padding ?? false,
      card_background_override: config.card_background_override ?? undefined,
      is_inner_container: config.is_inner_container ?? false,
      cards: config.cards ?? [],
      styles: config.styles ?? []
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this._createStack()
  }

  protected updated (changedProperties: PropertyValues): void {
    super.updated(changedProperties)
    if (!this._card) return
    this._waitForChildren(this._card, false)
    window.setTimeout(() => { this.updateStyleOnTimeout() }, 1)
    window.setTimeout(() => { this.updateStyleOnTimeout() }, 500)
  }

  protected updateStyleOnTimeout (): void {
    if (!this._config?.keep_background) this._waitForChildren(this._card, true)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private async _createStack () {
    this._cardPromise = this._createCard({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      type: `${this._config!.mode}-stack`,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cards: this._config!.cards
    })

    this._card = await this._cardPromise
  }

  protected render (): TemplateResult {
    if (!BolderContainerCard._hass || !this._config) {
      return html``
    }

    return html`
      <ha-card class="
      ${this._config.is_inner_container ? 'inner-container ' : ''}
      ${this._config.keep_outer_padding ? 'outer-padding ' : ''}
      ">
      ${this._config.title ? html`<h1 class="card-header">${this._config.title}</h1>` : html``}
        <div>${this._card}</div>
        <style>${this._config.styles ? css`${this.getStyleOverrideFromConfig(this._config.styles)}` : css``}</style>
      </ha-card>
    `
  }

  private _updateStyle (e: LovelaceCard | null, withBg: boolean): void {
    if (!e) return
    if (!this._config?.keep_box_shadow) e.style.boxShadow = 'none'
    if (
      !this._config?.keep_background &&
      withBg &&
      getComputedStyle(e).getPropertyValue('--keep-background').trim() !== 'true'
    ) {
      e.style.background = this._config?.card_background_override ?? 'transparent'
      if (this._config?.card_background_override === undefined) {
        e.style.backdropFilter = 'none'
      }
    }
    if (!this._config?.keep_border_radius) e.style.borderRadius = '0'
  }

  private _loopChildren (e: LovelaceCard, withBg: boolean): void {
    const searchElements = e.childNodes
    searchElements.forEach((childE) => {
      if ((childE as Element).tagName === 'STACK-IN-CARD') return
      if (!this._config?.keep_margin && (childE as LovelaceCard).style) {
        (childE as LovelaceCard).style.margin = '0px'
      }
      this._waitForChildren(childE as LovelaceCard, withBg)
    })
  }

  private _updateChildren (element: LovelaceCard | undefined, withBg: boolean): void {
    if (!element) return
    if (element.shadowRoot) {
      // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
      const card = element.shadowRoot.querySelector('ha-card') as LovelaceCard
      if (!card) {
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        const searchEles = element.shadowRoot.getElementById('root') || element.shadowRoot.getElementById('card')
        if (!searchEles) return
        this._loopChildren(searchEles as LovelaceCard, withBg)
      } else {
        this._updateStyle(card, withBg)
      }
    } else {
      if (typeof element.querySelector === 'function' && element.querySelector('ha-card')) {
        this._updateStyle(element.querySelector('ha-card'), withBg)
      }
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      this._loopChildren(element as LovelaceCard, withBg)
    }
  }

  private _checkIfPropertyExists (element: any, propertyName: string): boolean {
    return propertyName in element
  }

  private _waitForChildren (element: LovelaceCard | undefined, withBg: boolean): void {
    if (element === undefined) return
    if (!this._checkIfPropertyExists(element, 'updateComplete')) {
      this._updateChildren(element, withBg)
      return
    }

    if (((element as unknown) as LitElement).updateComplete !== null) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      ((element as unknown) as LitElement).updateComplete.then(() => {
        this._updateChildren(element, withBg)
      })
    } else {
      // this._updateChildren(element, withBg)
      window.setTimeout(() => {
        this._waitForChildren(element, withBg)
      }, 10)
    }
  }

  private async _createCard (config: LovelaceCardConfig): Promise<LovelaceCard> {
    let element: LovelaceCard
    if (HELPERS) {
      element = (await HELPERS).createCardElement(config)
    } else {
      element = createThing(config)
    }
    if (BolderContainerCard._hass) {
      element.hass = BolderContainerCard._hass
    }
    if (element) {
      element.addEventListener(
        'll-rebuild',
        (ev) => {
          ev.stopPropagation()
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this._rebuildCard(element, config)
        },
        { once: true }
      )
    }
    return element
  }

  private async _rebuildCard (element: LovelaceCard, config: LovelaceCardConfig): Promise<LovelaceCard> {
    const newCard = await this._createCard(config)
    element.replaceWith(newCard)
    this._card = newCard
    // Update the style immediately, and then again after a delay just in case the DOM wasn't totally finished.
    window.setTimeout(() => { this.updateStyleOnTimeout() }, 1)
    window.setTimeout(() => { this.updateStyleOnTimeout() }, 500)
    return newCard
  }

  public async getCardSize (): Promise<number> {
    await this._cardPromise
    if (!this._card) {
      return 0
    }
    return await this._computeCardSize(this._card)
  }

  private _computeCardSize (card: LovelaceCard): number | Promise<number> {
    if (typeof card.getCardSize === 'function') {
      return card.getCardSize()
    }
    if (customElements.get(card.localName)) {
      return 1
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    return customElements.whenDefined(card.localName).then(() => this._computeCardSize(card))
  }

  private getStyleOverrideFromConfig (styles: StyleItem[]): CSSResult {
    const styleLines: string[] = styles.map((s) => s.variable.startsWith('bolder-container-card-') ? `--${s.variable}_internal: ${s.value} !important;` : `--bolder-container-card-${s.variable}_internal: ${s.value} !important;`)
    return css`
:host { 
  ${unsafeCSS(styleLines.join('\n'))} 
}`
  }
}
