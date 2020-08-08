# uni-translate-shadow



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                               | Default               |
| -------- | --------- | ----------- | ---------------------------------- | --------------------- |
| `end`    | `end`     |             | `string`                           | `' }}'`               |
| `start`  | `start`   |             | `string`                           | `'{{ '`               |
| `state`  | `state`   |             | `string`                           | `'app.loc.translate'` |
| `type`   | `type`    |             | `"local" \| "memory" \| "session"` | `'session'`           |


## Dependencies

### Depends on

- uni-store
- uni-replace

### Graph
```mermaid
graph TD;
  uni-translate-shadow --> uni-store
  uni-translate-shadow --> uni-replace
  style uni-translate-shadow fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
