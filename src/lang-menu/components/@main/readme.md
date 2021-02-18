# uni-loc-menu



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute        | Description | Type                               | Default               |
| ------------------- | ---------------- | ----------- | ---------------------------------- | --------------------- |
| `activePath`        | `active-path`    |             | `string`                           | `'app.loc.active'`    |
| `feature`           | `feature`        |             | `string`                           | `'uni.store'`         |
| `list` _(required)_ | `list`           |             | `string`                           | `undefined`           |
| `mini`              | `mini`           |             | `boolean`                          | `false`               |
| `round`             | `round`          |             | `boolean`                          | `false`               |
| `route`             | `route`          |             | `string`                           | `'lang'`              |
| `routing`           | `routing`        |             | `boolean`                          | `false`               |
| `select`            | `select`         |             | `string`                           | `undefined`           |
| `separator`         | `separator`      |             | `string`                           | `'.'`                 |
| `translatePath`     | `translate-path` |             | `string`                           | `'app.loc.translate'` |
| `type`              | `type`           |             | `"local" \| "memory" \| "session"` | `'memory'`            |


## Dependencies

### Depends on

- uni-event
- uni-store-set
- uni-button
- uni-button-icon-wrap
- uni-event-store-get
- uni-flag
- uni-button-label
- uni-text
- uni-button-icon
- uni-menu-surface
- uni-list-wrap
- uni-event-store-set
- uni-router-link
- uni-route
- uni-list-item
- uni-store-load

### Graph
```mermaid
graph TD;
  uni-lang-menu --> uni-event
  uni-lang-menu --> uni-store-set
  uni-lang-menu --> uni-button
  uni-lang-menu --> uni-button-icon-wrap
  uni-lang-menu --> uni-event-store-get
  uni-lang-menu --> uni-flag
  uni-lang-menu --> uni-button-label
  uni-lang-menu --> uni-text
  uni-lang-menu --> uni-button-icon
  uni-lang-menu --> uni-menu-surface
  uni-lang-menu --> uni-list-wrap
  uni-lang-menu --> uni-event-store-set
  uni-lang-menu --> uni-router-link
  uni-lang-menu --> uni-route
  uni-lang-menu --> uni-list-item
  uni-lang-menu --> uni-store-load
  uni-event-store-get --> uni-event
  uni-event-store-get --> uni-store-get
  uni-event-store-set --> uni-event
  uni-event-store-set --> uni-store-set
  uni-list-item --> uni-list-item-ripple
  uni-store-load --> uni-event
  uni-store-load --> uni-store-set
  uni-store-load --> uni-load
  style uni-lang-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Powered by [UiWebKit](https://uiwebkit.com/)*
