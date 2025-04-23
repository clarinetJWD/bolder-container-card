import { type LovelaceCard } from 'custom-card-helpers'
import type { TemplateResult, nothing } from 'lit'
import type { BolderContainerCardEditor } from './container-card/bolder-container-editor'

export type TemplateNothing = typeof nothing
export type Template = TemplateResult | TemplateNothing

declare global {
  interface HTMLElementTagNameMap {
    'bolder-container-card-editor': BolderContainerCardEditor
    'hui-error-card': LovelaceCard
  }
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
