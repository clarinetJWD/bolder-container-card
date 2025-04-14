import { type LovelaceCard, type LovelaceCardConfig/*, type LovelaceCardEditor */ } from 'custom-card-helpers'
import type { TemplateResult, nothing } from 'lit'
import type { BolderContainerCardEditor } from './editor-2'

export type TemplateNothing = typeof nothing
export type Template = TemplateResult | TemplateNothing

declare global {
  interface HTMLElementTagNameMap {
    'bolder-container-card-editor': BolderContainerCardEditor
    'hui-error-card': LovelaceCard
  }
}

export interface BolderContainerCardConfig extends LovelaceCardConfig {
  mode?: 'horizontal' | 'vertical'
  cards: LovelaceCardConfig[]
  title?: string
  keep_margin?: boolean
  keep_background?: boolean
  keep_box_shadow?: boolean
  keep_border_radius?: boolean
  keep_outer_padding?: boolean
  card_background_override?: string
  is_inner_container?: boolean
  styles?: StyleItem[]
}

export interface MergedBolderContainerCardConfig extends LovelaceCardConfig {
  mode: 'horizontal' | 'vertical'
  cards: LovelaceCardConfig[]
  title?: string
  keep_margin: boolean
  keep_background: boolean
  keep_box_shadow: boolean
  keep_border_radius: boolean
  keep_outer_padding: boolean
  card_background_override?: string
  is_inner_container: boolean
  styles?: StyleItem[]
}

export interface StyleItem {
  variable: string
  value: string
}

export interface ConfigChangedEvent<T extends object = object> {
  config: T
  error?: string
  guiModeAvailable?: boolean
}

export interface GUIModeChangedEvent {
  guiMode: boolean
  guiModeAvailable: boolean
}
