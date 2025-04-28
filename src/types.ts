import { type LovelaceCard } from 'custom-card-helpers'
import type { TemplateResult, nothing } from 'lit'
import type { BolderContainerCardEditor } from './container-card/bolder-container-editor'
import type { BolderHeaderCardEditor } from './header-card/bolder-header-editor'

export type TemplateNothing = typeof nothing
export type Template = TemplateResult | TemplateNothing

declare global {
  interface HTMLElementTagNameMap {
    'bolder-container-card-editor': BolderContainerCardEditor
    'bolder-header-card-editor': BolderHeaderCardEditor
    'hui-error-card': LovelaceCard
  }
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
