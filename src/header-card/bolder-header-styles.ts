export function GetCss (): string {
  return `
    :host {
      /*** Card Variables */
      --bolder-header-card-background_internal: var(--bolder-header-card-background, var(--ha-card-background, var(--card-background-color)));
      --bolder-header-card-border-color_internal: var(--bolder-header-card-border-color, var(--ha-card-border-color, var(--divider-color, #e0e0e0)));
      --bolder-header-card-border-style_internal: var(--bolder-header-card-border-style, var(--ha-card-border-style, solid));
      --bolder-header-card-border-width_internal: var(--bolder-header-card-border-width, var(--ha-card-border-width, 0px));
      --bolder-header-card-border-radius_internal: var(--bolder-header-card-border-radius, var(--ha-card-border-radius, 0px));
      --bolder-header-card-box-shadow_internal: var(--bolder-header-card-box-shadow, var(--ha-card-box-shadow));
      --bolder-header-card-backdrop-filter_internal: var(--bolder-header-card-backdrop-filter, var(--ha-card-backdrop-filter, none));
      --bolder-header-card-gap_internal: var(--bolder-header-card-gap, 0px);
      --bolder-header-card-padding_internal: var(--bolder-header-card-padding, 12px 16px 16px);

      /*** Header */
      --bolder-header-card-header-padding_internal: var(--bolder-header-card-header-padding, 0 0 0 0);
      --bolder-header-card-header-margin_internal: var(--bolder-header-card-header-margin, 0 0 0 0);
      --bolder-header-card-header-gap_internal: var(--bolder-header-card-header-gap, 0);

      /*** Title Text */
      --bolder-header-card-title-color_internal: var(--bolder-header-card-title-color, var(--bolder-header-card-text-color, var(--ha-heading-card-title-color, var(--primary-text-color))));
      --bolder-header-card-title-outline-color_internal: var(--bolder-header-card-title-outline-color, var(--bolder-header-card-text-outline-color, transparent));
      --bolder-header-card-title-size_internal: var(--bolder-container-card-title-size, var(--ha-heading-card-title-font-size, var(--headline-font-size, 16px)));
      --bolder-header-card-title-weight_internal: var(--bolder-header-card-title-weight, var(--ha-heading-card-title-font-weight, 400));
      --bolder-header-card-title-line-height_internal: var(--bolder-header-card-title-line-height, normal);
      --bolder-header-card-title-padding_internal: var(--bolder-header-card-title-padding, 0 0 0 0);
      --bolder-header-card-title-margin_internal: var(--bolder-header-card-title-margin, 0 0 0 0);

      /*** Subtitle Text */
      --bolder-header-card-subtitle-color_internal: var(--bolder-header-card-subtitle-color, var(--bolder-header-card-text-color, var(--ha-heading-card-subtitle-color,var(--secondary-text-color))));
      --bolder-header-card-subtitle-outline-color_internal: var(--bolder-header-card-subtitle-outline-color, var(--bolder-header-card-text-outline-color, transparent));
      --bolder-header-card-subtitle-size_internal: var(--bolder-container-card-title-size, var(--ha-heading-card-subtitle-font-size, var(--mdc-typography-subtitle1-font-size, 1rem)));
      --bolder-header-card-subtitle-weight_internal: var(--bolder-header-card-subtitle-weight, var(--ha-heading-card-subtitle-font-weight, inherit));
      --bolder-header-card-subtitle-line-height_internal: var(--bolder-header-card-subtitle-line-height, normal);
      --bolder-header-card-subtitle-padding_internal: var(--bolder-header-card-subtitle-padding, 0 0 0 0);
      --bolder-header-card-subtitle-margin_internal: var(--bolder-header-card-subtitle-margin, 0 0 0 0);

      /*** Icon */
      --bolder-header-card-icon-size_internal: var(--bolder-header-card-icon-size, calc(var(--bolder-header-card-title-size_internal) * 1.0));
      --bolder-header-card-icon-gap_internal: var(--bolder-header-card-icon-gap, 10px);
      --bolder-header-card-icon-vertical-alignment_internal: var(--bolder-header-card-icon-vertical-alignment, center);
      --bolder-header-card-icon-color_internal: var(--bolder-header-card-icon-color, var(--primary-text-color));
      --bolder-header-card-icon-background_internal: var(--bolder-header-card-icon-background, none);
      --bolder-header-card-icon-padding_internal: var(--bolder-header-card-icon-padding, 0 0 0 0);
      --bolder-header-card-icon-margin_internal: var(--bolder-header-card-icon-margin, 0 0 0 0);
      --bolder-header-card-icon-opacity_internal: var(--bolder-header-card-icon-opacity, 1.0);
      --bolder-header-card-icon-border-radius_internal: var(--bolder-header-card-icon-border-radius, 10px);

      --bolder-header-card-icon-hover-color_internal: var(--bolder-header-card-icon-hover-color, var(--bolder-header-card-icon-color, var(--primary-text-color)));
      --bolder-header-card-icon-hover-background_internal: var(--bolder-header-card-icon-hover-background, var(--bolder-header-card-icon-background, none));
      --bolder-header-card-icon-hover-padding_internal: var(--bolder-header-card-icon-hover-padding, var(--bolder-header-card-icon-padding, 0 0 0 0));
      --bolder-header-card-icon-hover-margin_internal: var(--bolder-header-card-icon-hover-margin, var(--bolder-header-card-icon-margin, 0 0 0 0));
      --bolder-header-card-icon-hover-opacity_internal: var(--bolder-header-card-icon-hover-opacity, var(--bolder-header-card-icon-opacity, 1.0));
      --bolder-header-card-icon-hover-border-radius_internal: var(--bolder-header-card-icon-hover-border-radius, 10px);

      --bolder-header-card-button-label-gap_internal: var(--bolder-header-card-button-label-gap, 8px);
      --bolder-header-card-button-focus-color_internal: var(--bolder-header-card-button-focus-color, var(--secondary-text-color));
      --bolder-header-card-button-icon-color_internal: var(--bolder-header-card-button-icon-color, var(--primary-text-color));
      --bolder-header-card-button-background-color_internal: var(--bolder-header-card-button-background-color, var(--disabled-color));
      --bolder-header-card-button-background-opacity_internal: var(--bolder-header-card-button-background-opacity, 0.2);
      --bolder-header-card-button-border-radius_internal: var(--bolder-header-card-button-border-radius, 10px);
      --bolder-header-card-button-padding_internal: var(--bolder-header-card-button-padding, 8px);
      --bolder-header-card-button-icon-size_internal: var(--bolder-header-card-button-icon-size, 20px);
      --bolder-header-card-button-hover-background-color_internal: var(--bolder-header-card-button-hover-background-color, var(--secondary-text-color));
      --bolder-header-card-button-spacing_internal: var(--bolder-header-card-button-spacing, 8px);
      --bolder-header-card-button-height_internal: var(--bolder-header-card-button-height, 40px);
      --bolder-header-card-button-width_internal: var(--bolder-header-card-button-width, 40px);
      --bolder-header-card-button-group-background_internal: var(--bolder-header-card-button-group-background, transparent);
      --bolder-header-card-button-group-border-radius_internal: var(--bolder-header-card-button-group-border-radius, var(--bolder-header-card-button-border-radius_internal));
    }

    ha-card {
      height: 100%;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      box-shadow: var(--bolder-header-card-box-shadow_internal);
      border-radius: var(--bolder-header-card-border-radius_internal);
      background: var(--bolder-header-card-background_internal);
      border-color: var(--bolder-header-card-border-color_internal);
      border-style: var(--bolder-header-card-border-style_internal);
      border-width: var(--bolder-header-card-border-width_internal);
      backdrop-filter: var(--bolder-header-card-backdrop-filter_internal);
      padding: var(--bolder-header-card-padding_internal);
      margin-bottom: var(--bolder-header-card-gap_internal);
    }

    ha-icon {
      fill: var(--bolder-header-card-icon-color_internal);
      background: var(--bolder-header-card-icon-background_internal);
      padding: var(--bolder-header-card-icon-padding_internal);
      margin: var(--bolder-header-card-icon-margin_internal);
      opacity: var(--bolder-header-card-icon-opacity_internal);
      border-radius: var(--bolder-header-card-icon-border-radius_internal);
    }

    ha-icon:hover {
      fill: var(--bolder-header-card-icon-hover-color_internal);
      background: var(--bolder-header-card-icon-hover-background_internal);
      padding: var(--bolder-header-card-icon-hover-padding_internal);
      margin: var(--bolder-header-card-icon-hover-margin_internal);
      opacity: var(--bolder-header-card-icon-hover-opacity_internal);
      border-radius: var(--bolder-header-card-icon-hover-border-radius_internal);
    }

    ha-control-button-group {
      --control-button-group-spacing: var(--bolder-header-card-button-spacing_internal);
      --control-button-group-thickness: var(--bolder-header-card-button-height_internal);
      background: var(--bolder-header-card-button-group-background_internal);
      border-radius: var(--bolder-header-card-button-group-border-radius_internal);
    }
    ha-control-button {
      --control-button-focus-color: var(--bolder-header-card-button-focus-color_internal);
      --control-button-icon-color: var(--bolder-header-card-button-icon-color_internal);
      --control-button-background-color: var(--bolder-header-card-button-background-color_internal);
      --control-button-background-opacity: var(--bolder-header-card-button-background-opacity_internal);
      --control-button-border-radius: var(--bolder-header-card-button-border-radius_internal);
      --control-button-padding: var(--bolder-header-card-button-padding_internal);
      --mdc-icon-size: var(--bolder-header-card-button-icon-size_internal);
      --ha-ripple-color: var(--bolder-header-card-button-hover-background-color_internal);
      height: var(--bolder-header-card-button-height_internal);
      width: var(--bolder-header-card-button-width_internal);
    }

    .header-icon-container {
      --mdc-icon-size: var(--bolder-header-card-icon-size_internal);
      display: flex;
      align-items: var(--bolder-header-card-icon-vertical-alignment_internal);
      gap: var(--bolder-header-card-icon-gap_internal);
      padding: var(--bolder-header-card-header-padding_internal);
    }

    .header-container {
      display: flex;
      flex-direction: column;
      gap: var(--bolder-header-card-header-gap_internal);
      padding: var(--bolder-header-card-header-padding_internal);
      margin: var(--bolder-header-card-header-margin_internal);
    }

    .card-title {
      color: var(--bolder-header-card-title-color_internal);
      text-shadow: -1px -1px 0 var(--bolder-header-card-title-outline-color_internal), 1px -1px 0 var(--bolder-header-card-title-outline-color_internal), 1px 1px 0 var(--bolder-header-card-title-outline-color_internal), -1px 1px 0 var(--bolder-header-card-title-outline-color_internal);
      font-size: var(--bolder-header-card-title-size_internal);
      font-weight: var(--bolder-header-card-title-weight_internal);
      line-height: var(--bolder-header-card-title-line-height_internal);
      padding: var(--bolder-header-card-title-padding_internal);
      margin: var(--bolder-header-card-title-margin_internal);
    }

    .card-subtitle {
      color: var(--bolder-header-card-subtitle-color_internal);
      text-shadow: -1px -1px 0 var(--bolder-header-card-subtitle-outline-color_internal), 1px -1px 0 var(--bolder-header-card-subtitle-outline-color_internal), 1px 1px 0 var(--bolder-header-card-subtitle-outline-color_internal), -1px 1px 0 var(--bolder-header-card-subtitle-outline-color_internal);
      font-size: var(--bolder-header-card-subtitle-size_internal);
      font-weight: var(--bolder-header-card-subtitle-weight_internal);
      line-height: var(--bolder-header-card-subtitle-line-height_internal);
      padding: var(--bolder-header-card-subtitle-padding_internal);
      margin: var(--bolder-header-card-subtitle-margin_internal);
    }
    .button-label-container {
      display: flex;
      align-items: center;
      gap: var(--bolder-header-card-button-label-gap_internal);
    }
  `
}
