# uni-translate-shadow



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type                               | Default               |
| ----------- | ------------ | ----------- | ---------------------------------- | --------------------- |
| `activate`  | `activate`   |             | `boolean`                          | `false`               |
| `bindEnd`   | `bind-end`   |             | `string`                           | `'}}'`                |
| `bindStart` | `bind-start` |             | `string`                           | `'{{'`                |
| `feature`   | `feature`    |             | `string`                           | `'uni.store'`         |
| `inactive`  | `inactive`   |             | `boolean`                          | `false`               |
| `path`      | `path`       |             | `string`                           | `'app.loc.translate'` |
| `separator` | `separator`  |             | `string`                           | `'.'`                 |
| `top`       | `top`        |             | `boolean`                          | `false`               |
| `type`      | `type`       |             | `"local" \| "memory" \| "session"` | `'memory'`            |


## Dependencies

### Depends on

- uni-event
- uni-store-get
- uni-replace

### Graph
```mermaid
graph TD;
  uni-translate-shadow --> uni-event
  uni-translate-shadow --> uni-store-get
  uni-translate-shadow --> uni-replace
  style uni-translate-shadow fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Powered by [UiWebKit](https://uiwebkit.com/)*
