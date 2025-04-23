import { type LovelaceCardConfig/*, type LovelaceCardEditor */ } from 'custom-card-helpers'

export interface BolderContainerCardConfig extends LovelaceCardConfig {
  mode?: 'horizontal' | 'vertical'
  cards?: LovelaceCardConfig[]
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
