import { type LovelaceCardConfig/*, type LovelaceCardEditor */ } from 'custom-card-helpers'
import type { StyleItem } from '../types'

export interface BolderHeaderCardConfig extends LovelaceCardConfig {
  title?: string
  subtitle?: string
  icon?: string
  styles?: StyleItem[]
}

export interface MergedBolderHeaderCardConfig extends LovelaceCardConfig {
  title: string
  subtitle?: string
  icon?: string
  styles?: StyleItem[]
}
