# uni-loc-menu



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute        | Description | Type                               | Default           |
| ------------------ | ---------------- | ----------- | ---------------------------------- | ----------------- |
| `activePath`       | `active-path`    |             | `string`                           | `'loc.active'`    |
| `feature`          | `feature`        |             | `string`                           | `'uni.store'`     |
| `frame`            | `frame`          |             | `boolean`                          | `false`           |
| `languagesPath`    | `languages-path` |             | `string`                           | `'loc.languages'` |
| `linear`           | `linear`         |             | `boolean`                          | `false`           |
| `mini`             | `mini`           |             | `boolean`                          | `false`           |
| `mode`             | `mode`           |             | `"flat" \| "outlined" \| "raised"` | `undefined`       |
| `only`             | `only`           |             | `boolean`                          | `false`           |
| `round`            | `round`          |             | `boolean`                          | `false`           |
| `route`            | `route`          |             | `string`                           | `'lang'`          |
| `routing`          | `routing`        |             | `boolean`                          | `false`           |
| `separator`        | `separator`      |             | `string`                           | `'.'`             |
| `shadow`           | `shadow`         |             | `boolean`                          | `false`           |
| `top`              | `top`            |             | `boolean`                          | `false`           |
| `translatePath`    | `translate-path` |             | `string`                           | `'loc.translate'` |
| `type`             | `type`           |             | `"local" \| "memory" \| "session"` | `'memory'`        |
| `url` _(required)_ | `url`            |             | `string`                           | `undefined`       |


## Dependencies

### Depends on

- [uni-lang-menu-button](../components/lang-menu-button/@element)
- [uni-lang-load](../components/lang-load/@element)

### Graph
```mermaid
graph TD;
  uni-lang-menu --> uni-lang-menu-button
  uni-lang-menu --> uni-lang-load
  style uni-lang-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Powered by [UiWebKit](https://uiwebkit.com/)*
