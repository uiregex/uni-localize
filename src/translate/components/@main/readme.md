# uni-translate



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type                               | Default               |
| ----------- | ----------- | ----------- | ---------------------------------- | --------------------- |
| `end`       | `end`       |             | `string`                           | `'}}'`                |
| `feature`   | `feature`   |             | `string`                           | `'uni.store'`         |
| `inactive`  | `inactive`  |             | `boolean`                          | `false`               |
| `path`      | `path`      |             | `string`                           | `'app.loc.translate'` |
| `refresh`   | `refresh`   |             | `boolean`                          | `false`               |
| `separator` | `separator` |             | `string`                           | `'.'`                 |
| `start`     | `start`     |             | `string`                           | `'{{'`                |
| `type`      | `type`      |             | `"local" \| "memory" \| "session"` | `'memory'`            |


## Dependencies

### Depends on

- uni-event-store-get
- uni-replace

### Graph
```mermaid
graph TD;
  uni-translate --> uni-event-store-get
  uni-translate --> uni-replace
  uni-event-store-get --> uni-event
  uni-event-store-get --> uni-store-get
  style uni-translate fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Powered by [UiWebKit](https://uiwebkit.com/)*
