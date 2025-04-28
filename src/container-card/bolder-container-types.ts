import { type LovelaceCardConfig/*, type LovelaceCardEditor */ } from 'custom-card-helpers'
import type { StyleItem } from '../types'
import type { BolderHeaderCardConfig } from '../header-card/bolder-header-types'

export interface BolderContainerCardConfig extends LovelaceCardConfig {
  mode?: 'horizontal' | 'vertical'
  cards?: LovelaceCardConfig[]
  keep_margin?: boolean
  keep_background?: boolean
  keep_box_shadow?: boolean
  keep_border_radius?: boolean
  keep_outer_padding?: boolean
  card_background_override?: string
  is_inner_container?: boolean
  styles?: StyleItem[]
  header?: Partial<BolderHeaderCardConfig>
}

export interface MergedBolderContainerCardConfig extends LovelaceCardConfig {
  mode: 'horizontal' | 'vertical'
  cards: LovelaceCardConfig[]
  keep_margin: boolean
  keep_background: boolean
  keep_box_shadow: boolean
  keep_border_radius: boolean
  keep_outer_padding: boolean
  card_background_override?: string
  is_inner_container: boolean
  styles?: StyleItem[]
  header?: Partial<BolderHeaderCardConfig>
}
