# uni-translate



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type                               | Default               |
| ----------- | ----------- | ----------- | ---------------------------------- | --------------------- |
| `active`    | `active`    |             | `boolean`                          | `false`               |
| `end`       | `end`       |             | `string`                           | `'}}'`                |
| `feature`   | `feature`   |             | `string`                           | `'uni.store'`         |
| `path`      | `path`      |             | `string`                           | `'app.loc.translate'` |
| `refresh`   | `refresh`   |             | `boolean`                          | `false`               |
| `separator` | `separator` |             | `string`                           | `'.'`                 |
| `start`     | `start`     |             | `string`                           | `'{{'`                |
| `type`      | `type`      |             | `"local" \| "memory" \| "session"` | `'memory'`            |


## Dependencies

### Depends on

- uni-store-event-get
- uni-replace

### Graph
```mermaid
graph TD;
  uni-translate --> uni-store-event-get
  uni-translate --> uni-replace
  style uni-translate fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Powered by [UiWebKit](https://uiwebkit.com/)*
