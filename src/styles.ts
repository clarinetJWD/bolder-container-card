export function GetCss (myVar: boolean): string {
  return `
${myVar ? ':host{}' : ':host{}'}
    :host {
      /*** Card Variables */
      --bolder-container-card-background_internal: var(--bolder-container-card-background, transparent);
      --bolder-container-card-border-color_internal: var(--bolder-container-card-border-color, var(--ha-card-border-color, var(--divider-color, #e0e0e0)));
      --bolder-container-card-border-style_internal: var(--bolder-container-card-border-style, var(--ha-card-border-style, solid));
      --bolder-container-card-border-width_internal: var(--bolder-container-card-border-width, var(--ha-card-border-width, 0px));
      --bolder-container-card-border-radius_internal: var(--bolder-container-card-border-radius, var(--ha-card-border-radius, 0px));
      --bolder-container-card-box-shadow_internal: var(--bolder-container-card-box-shadow, var(--ha-card-box-shadow));
      --bolder-container-card-padding_internal: var(--bolder-container-card-padding, 0px);
      --bolder-container-card-backdrop-filter_internal: var(--bolder-container-card-backdrop-filter, var(--ha-card-backdrop-filter, none));

      /*** Title Text */
      --bolder-container-card-title-color_internal: var(--bolder-container-card-title-color, var(--bolder-container-card-text-color, var(--ha-heading-card-title-color,var(--primary-text-color))));
      --bolder-container-card-title-background_internal: var(--bolder-container-card-title-background, var(--ha-card-background));
      --bolder-container-card-title-outline-color_internal: var(--bolder-container-card-title-outline-color, var(--bolder-container-card-text-outline-color, transparent));
      --bolder-container-card-title-size_internal: var(--bolder-container-card-title-size, var(--ha-heading-card-title-font-size, var(--headline-font-size, 16px)));
      --bolder-container-card-title-weight_internal: var(--bolder-container-card-title-weight, var(--ha-heading-card-title-font-weight, 400));
      --bolder-container-card-title-line-height_internal: var(--bolder-container-card-title-line-height, 48px);
      --bolder-container-card-title-padding_internal: var(--bolder-container-card-title-padding, 12px 16px 16px);
      --bolder-container-card-title-gap_internal: var(--bolder-container-card-title-gap, var(--vertical-stack-card-gap, var(--stack-card-gap, 8px)));

      /*** LLayout */
      --bolder-container-card-gap_internal: var(--bolder-container-card-gap, var(--vertical-stack-card-gap, var(--stack-card-gap, 8px)));
    }

    ha-card {
      height: 100%;
      overflow: hidden;
      box-shadow: var(--bolder-container-card-box-shadow_internal);
      border-radius: var(--bolder-container-card-border-radius_internal);
      background: var(--bolder-container-card-background_internal);
      border-color: var(--bolder-container-card-border-color_internal);
      border-style: var(--bolder-container-card-border-style_internal);
      border-width: var(--bolder-container-card-border-width_internal);
      padding: var(--bolder-container-card-padding_internal);
      backdrop-filter: var(--bolder-container-card-backdrop-filter_internal);
    }

    ha-card.inner-container {
      box-shadow: none;
      border-radius: 0px;
      background: transparent;
      border: none;
      padding: 0 0 0 0;
      backdrop-filter: none;
    }

    .card-header {
      color: var(--bolder-container-card-title-color_internal);
      background: var(--bolder-container-card-title-background_internal);
      text-shadow: -1px -1px 0 var(--bolder-container-card-title-outline-color_internal), 1px -1px 0 var(--bolder-container-card-title-outline-color_internal), 1px 1px 0 var(--bolder-container-card-title-outline-color_internal), -1px 1px 0 var(--bolder-container-card-title-outline-color_internal);
      font-size: var(--bolder-container-card-title-size_internal);
      line-height: var(--bolder-container-card-title-line-height_internal);
      padding: var(--bolder-container-card-title-padding_internal);
      font-weight: var(--bolder-container-card-title-weight_internal);
      margin-bottom: var(--bolder-container-card-title-gap_internal);
    }

  `
}
