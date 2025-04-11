import { html, type TemplateResult } from 'lit'

export function safeRender<T> (renderFn: () => T): T | TemplateResult {
  try {
    return renderFn()
  } catch (e) {
    console.error('bolder-container-card - Error while rendering bolder-container-card component:', e)
    return html``
  }
}
