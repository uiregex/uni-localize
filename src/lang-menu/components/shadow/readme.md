# uni-lang-menu-shadow



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

- uni-store-set
- uni-event-store-get
- uni-flag
- uni-text
- uni-event-store-set
- uni-router-link
- uni-route
- uni-event
- uni-store-load

### Graph
```mermaid
graph TD;
  uni-lang-menu-shadow --> uni-store-set
  uni-lang-menu-shadow --> uni-event-store-get
  uni-lang-menu-shadow --> uni-flag
  uni-lang-menu-shadow --> uni-text
  uni-lang-menu-shadow --> uni-event-store-set
  uni-lang-menu-shadow --> uni-router-link
  uni-lang-menu-shadow --> uni-route
  uni-lang-menu-shadow --> uni-event
  uni-lang-menu-shadow --> uni-store-load
  uni-event-store-get --> uni-event
  uni-event-store-get --> uni-store-get
  uni-event-store-set --> uni-event
  uni-event-store-set --> uni-store-set
  uni-store-load --> uni-event
  uni-store-load --> uni-store-set
  uni-store-load --> uni-load
  style uni-lang-menu-shadow fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Powered by [UiWebKit](https://uiwebkit.com/)*
