import TabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group.component.js'
import TabGroupStyles from '@shoelace-style/shoelace/dist/components/tab-group/tab-group.styles.js'
import '@shoelace-style/shoelace/dist/components/tab/tab.js'
import type { PropertyValues } from 'lit'
import { css } from 'lit'
import { customElement, query } from 'lit/decorators.js'

// @customElement('sl-tab-group')
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
export class HaSlTabGroup extends TabGroup {
  private _mouseIsDown = false

  private _scrolled = false

  private _mouseReleasedAt?: number

  private _scrollStartX = 0

  private _scrollLeft = 0

  // eslint-disable-next-line @typescript-eslint/prefer-readonly, @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  @query('.tab-group__nav', true)
  private readonly _scrollContainer?: HTMLElement

  public disconnectedCallback (): void {
    super.disconnectedCallback()
    window.removeEventListener('mousemove', this._mouseMove)
    window.removeEventListener('mouseup', this._mouseUp)
  }

  override setAriaLabels (): void {
    // Override the method to prevent setting aria-labels, as we don't use panels
    // and don't want to set aria-labels for the tabs
  }

  override getAllPanels (): any[] {
    // Override the method to prevent querying for panels
    // and return an empty array instead
    // as we don't use panels
    return []
  }

  protected override firstUpdated (_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties)

    const scrollContainer = this._scrollContainer

    if (scrollContainer) {
      scrollContainer.addEventListener('mousedown', this._mouseDown)
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  protected override handleClick (event: MouseEvent): void {
    if (
      this._mouseReleasedAt &&
      new Date().getTime() - this._mouseReleasedAt < 100
    ) {
      return
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore
    super.handleClick(event)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private readonly _mouseDown = (event: MouseEvent) => {
    const scrollContainer = this._scrollContainer

    if (!scrollContainer) {
      return
    }

    this._scrollStartX = event.pageX - scrollContainer.offsetLeft
    this._scrollLeft = scrollContainer.scrollLeft
    this._mouseIsDown = true
    this._scrolled = false

    window.addEventListener('mousemove', this._mouseMove)
    window.addEventListener('mouseup', this._mouseUp, { once: true })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private readonly _mouseUp = () => {
    this._mouseIsDown = false
    if (this._scrolled) {
      this._mouseReleasedAt = new Date().getTime()
    }
    window.removeEventListener('mousemove', this._mouseMove)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private readonly _mouseMove = (event: MouseEvent) => {
    if (!this._mouseIsDown) {
      return
    }

    const scrollContainer = this._scrollContainer

    if (!scrollContainer) {
      return
    }

    const x = event.pageX - scrollContainer.offsetLeft
    const scroll = x - this._scrollStartX

    if (!this._scrolled) {
      this._scrolled = Math.abs(scroll) > 1
    }

    scrollContainer.scrollLeft = this._scrollLeft - scroll
  }

  static override styles = [
    TabGroupStyles,
    css`
      :host {
        --sl-spacing-3x-small: 0.125rem;
        --sl-spacing-2x-small: 0.25rem;
        --sl-spacing-x-small: 0.5rem;
        --sl-spacing-small: 0.75rem;
        --sl-spacing-medium: 1rem;
        --sl-spacing-large: 1.25rem;
        --sl-spacing-x-large: 1.75rem;
        --sl-spacing-2x-large: 2.25rem;
        --sl-spacing-3x-large: 3rem;
        --sl-spacing-4x-large: 4.5rem;

        --sl-transition-x-slow: 1000ms;
        --sl-transition-slow: 500ms;
        --sl-transition-medium: 250ms;
        --sl-transition-fast: 150ms;
        --sl-transition-x-fast: 50ms;
        --transition-speed: var(--sl-transition-fast);
        --sl-border-radius-small: 0.1875rem;
        --sl-border-radius-medium: 0.25rem;
        --sl-border-radius-large: 0.5rem;
        --sl-border-radius-x-large: 1rem;
        --sl-border-radius-circle: 50%;
        --sl-border-radius-pill: 9999px;

        --sl-color-neutral-600: inherit;

        --sl-font-weight-semibold: 500;
        --sl-font-size-small: 14px;

        --sl-color-primary-600: var(
          --ha-tab-active-text-color,
          var(--primary-color)
        );
        --track-color: var(--ha-tab-track-color, var(--divider-color));
        --indicator-color: var(--ha-tab-indicator-color, var(--primary-color));
      }
      ::slotted(sl-tab:not([active])) {
        opacity: 0.8;
      }
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore
    'sl-tab-group': HaSlTabGroup
  }
}
