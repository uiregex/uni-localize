# uni-translate-shadow



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type                               | Default               |
| ----------- | ----------- | ----------- | ---------------------------------- | --------------------- |
| `active`    | `active`    |             | `boolean`                          | `false`               |
| `end`       | `end`       |             | `string`                           | `'}}'`                |
| `feature`   | `feature`   |             | `string`                           | `'uni.store'`         |
| `path`      | `path`      |             | `string`                           | `'app.loc.translate'` |
| `separator` | `separator` |             | `string`                           | `'.'`                 |
| `start`     | `start`     |             | `string`                           | `'{{'`                |
| `type`      | `type`      |             | `"local" \| "memory" \| "session"` | `undefined`           |


## Dependencies

### Depends on

- uni-store-event-get
- uni-replace

### Graph
```mermaid
graph TD;
  uni-translate-shadow --> uni-store-event-get
  uni-translate-shadow --> uni-replace
  uni-store-event-get --> uni-event
  uni-store-event-get --> uni-store-get
  style uni-translate-shadow fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Powered by [UiWebKit](https://uiwebkit.com/)*
