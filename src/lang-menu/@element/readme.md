# uni-loc-menu



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute        | Description | Type                               | Default               |
| ------------------- | ---------------- | ----------- | ---------------------------------- | --------------------- |
| `activePath`        | `active-path`    |             | `string`                           | `'app.loc.active'`    |
| `feature`           | `feature`        |             | `string`                           | `'uni.store'`         |
| `frame`             | `frame`          |             | `boolean`                          | `false`               |
| `list` _(required)_ | `list`           |             | `string`                           | `undefined`           |
| `mini`              | `mini`           |             | `boolean`                          | `false`               |
| `only`              | `only`           |             | `boolean`                          | `false`               |
| `round`             | `round`          |             | `boolean`                          | `false`               |
| `route`             | `route`          |             | `string`                           | `'lang'`              |
| `routing`           | `routing`        |             | `boolean`                          | `false`               |
| `select`            | `select`         |             | `string`                           | `undefined`           |
| `separator`         | `separator`      |             | `string`                           | `'.'`                 |
| `shadow`            | `shadow`         |             | `boolean`                          | `false`               |
| `top`               | `top`            |             | `boolean`                          | `false`               |
| `translatePath`     | `translate-path` |             | `string`                           | `'app.loc.translate'` |
| `type`              | `type`           |             | `"local" \| "memory" \| "session"` | `'memory'`            |


## Dependencies

### Depends on

- uni-store-set
- uni-menu
- uni-button
- uni-button-icon
- uni-event-store-get
- uni-flag
- uni-button-label
- uni-render
- uni-menu-surface
- uni-list-wrap
- uni-display
- uni-router-link
- uni-list-item
- uni-list-item-graphic
- uni-list-item-text
- uni-route
- uni-event-store-set
- uni-event
- uni-store-get
- uni-load-store

### Graph
```mermaid
graph TD;
  uni-lang-menu --> uni-store-set
  uni-lang-menu --> uni-menu
  uni-lang-menu --> uni-button
  uni-lang-menu --> uni-button-icon
  uni-lang-menu --> uni-event-store-get
  uni-lang-menu --> uni-flag
  uni-lang-menu --> uni-button-label
  uni-lang-menu --> uni-render
  uni-lang-menu --> uni-menu-surface
  uni-lang-menu --> uni-list-wrap
  uni-lang-menu --> uni-display
  uni-lang-menu --> uni-router-link
  uni-lang-menu --> uni-list-item
  uni-lang-menu --> uni-list-item-graphic
  uni-lang-menu --> uni-list-item-text
  uni-lang-menu --> uni-route
  uni-lang-menu --> uni-event-store-set
  uni-lang-menu --> uni-event
  uni-lang-menu --> uni-store-get
  uni-lang-menu --> uni-load-store
  uni-event-store-get --> uni-event
  uni-event-store-get --> uni-store-get
  uni-list-item --> uni-list-item-ripple
  uni-event-store-set --> uni-event
  uni-event-store-set --> uni-store-set
  uni-load-store --> uni-event
  uni-load-store --> uni-store-set
  uni-load-store --> uni-load
  style uni-lang-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Powered by [UiWebKit](https://uiwebkit.com/)*
