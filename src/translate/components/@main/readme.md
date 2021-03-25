# uni-translate



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
| `type`      | `type`       |             | `"local" \| "memory" \| "session"` | `'memory'`            |


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
