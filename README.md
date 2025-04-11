# Bolder Container Card

A [Home Assistant Dashboard Card](https://www.home-assistant.io/dashboards/) available through the [Home Assistant Community Store](https://hacs.xyz). This is a replacement for the various "Stack-In-Card" cards that allows the inner cards and this container card to be styled differently.

![Bolder Container Card](TODO)

## Features

* Verical and Horizontal Stack configuration.
* Allow the inner cards to retain their normal appearance while the container uses different variables. For example, you can have a stack of cards without rounded corners, but the entire group has rounded corners.
* Specify the gap between inner cards to let the background show through.
* "Inner Container" mode that disables all visual styling and simply acts as a stack.

## The Bolder Collection
Check out the other "Bolder" cards:
* [Bolder Weather Card](https://www.github.com/clarinetJWD/bolder-weather-card/releases/latest/download/bolder-weather-card.js)

## Installation

### Manual Installation

1. Download the [bolder-container-card](https://www.github.com/clarinetJWD/bolder-container-card/releases/latest/download/bolder-container-card.js).
2. Place the file in your Home Assistant's `config/www` folder.
3. Add the configuration to your `ui-lovelace.yaml`.

   ```yaml
   resources:
     - url: /local/bolder-container-card.js
       type: module
   ```

4. Add [configuration](#configuration) for the card in your `ui-lovelace.yaml`.

### Installation and tracking with `hacs`

1. Make sure the [HACS](https://github.com/custom-components/hacs) component is installed and working.
2. Add this repository as a custom repository `https://www.github.com/clarinetJWD/bolder-container-card/`
3. Search for `bolder-container-card` in HACS and install it.
4. **You're Probably Done!** - In newer versions of Home Assistant, you should simply be able to refresh the dashboard to see the new card now. If not, continue:
5. Depening on whether you manage your Lovelace resources via YAML (3i) or UI (3ii), you have to add the corresponding resources.
   1. **YAML:** Add the configuration to your `ui-lovelace.yaml`.

      ```yaml
      resources:
        - url: /hacsfiles/bolder-container-card/bolder-container-card.js
          type: module
      ```

   2. **UI:** Add Lovelace resource [![My Home Assistant](https://my.home-assistant.io/badges/lovelace_resources.svg)](https://my.home-assistant.io/redirect/lovelace_resources).
      _(Alternatively go to Settings -> Dashboards -> Resources -> Add Resource)_

      ```yaml
      URL: /hacsfiles/bolder-container-card/bolder-container-card.js
      Type: JavaScript Module
      ```
6. Restart Home Assistant.
7. Add [configuration](#configuration) for the card in your `ui-lovelace.yaml` or via the UI.

## Configuration

### Minimal configuration

```yaml
type: custom:bolder-container-card
cards:
  - type: your-first-inner-card-type
    ...
```

### Full configuration

```yaml
type: custom:bolder-container-card
mode: vertical
title: My Card Title
keep_background: true
keep_margin: false
keep_box_shadow: false
keep_border_radius: false
keep_outer_padding: false
card_background_override: red
is_inner_container: false
cards:
  - type: your-first-inner-card-type
    ...
```

### Options

| Name                     | Type                  | Requirement  | Description                                                                                                                                                                                                                | Default     |
| ------------------------ | --------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ----------- |
| type                     | string                | **Required** | `custom:bolder-container-card`                                                                                                                                                                                             |             |
| cards                    | [Card-Configurations] | **Required** | A collection of child card configurations.                                                                                                                                                                                 | [none]]     |
| mode                     | string                | **Optional** | The direction the stack flows, either `vertical` or `horizontal`.                                                                                                                                                          | `vertical`  |
| title                    | string                | **Optional** | Title of the card, shown as a header.                                                                                                                                                                                      | `''`        |
| keep_background          | boolean               | **Optional** | When `true`, the inner cards keep their normal background color. When `false`, inner cards have their background and backdrop-filter set to `none`.                                                                        | `true`      |
| keep_margin              | boolean               | **Optional** | When `true`, the inner cards keep their normal margin (external space). When `false`, inner cards have a zero margin, plus any theme variable gap.                                                                         | `false`     |
| keep_box_shadow          | boolean               | **Optional** | When `true`, the inner cards keep their normal shadow. When `false`, inner cards have their shadow removed.                                                                                                                | `false`     |
| keep_border_radius       | boolean               | **Optional** | When `true`, the inner cards keep their normal rounded corners. When `false`, inner cards have their rounded corner radius set to `0`.                                                                                     | `false`     |
| keep_outer_padding       | boolean               | **Optional** | When `true`, the container card keeps padding between its edge and the inner cards. When `false`, there is no padding around the inner cards.                                                                              | `false`     |
| card_background_override | string (color)        | **Optional** | When set, overrides the background color of the inner cards. Note that `keep_background` must not be `true`, or it overrides this option.                                                                                  | `undefined` |
| is_inner_container       | boolean               | **Optional** | When `true`, visual aspects of the container card are removed, including: Shadow, Rounded Corners, Background, Border, Padding, and Blur/Filter. This is useful for wuing within other cards or collapsible card trays.    | `false`     |

## Footnotes

Note that though the languages are specified, currently they are unused and all English.
I hope to be able to get full UI configuration support, where they will be used, but that is a future job.
If you'd like to contribute translations to your language, create a new branch, modify the file, and make a pull request.
[^2]: Supported languages: `ar`, `bg`, `ca`, `cs`, `cy`, `da`, `de`, `el`,`en`, `es`, `et`, `fi`, `fr`, `he`, `hu`, `hr`, `id`, `is`, `it`, `ko`, `lb`, `lt`, `nb`, `nl`, `pl`, `pt`, `pt-BR`, `ro`, `ru`, `sk`, `sl`, `sr`, `sr-Latn`, `sv`, `th`, `tr`, `uk`, `ur`, `vi`, `zh-CN`, `zh-TW`
