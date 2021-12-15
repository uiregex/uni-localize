# uni-lang-load



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute        | Description | Type                               | Default           |
| ------------------ | ---------------- | ----------- | ---------------------------------- | ----------------- |
| `activePath`       | `active-path`    |             | `string`                           | `'loc.active'`    |
| `feature`          | `feature`        |             | `string`                           | `'uni.store'`     |
| `frame`            | `frame`          |             | `boolean`                          | `false`           |
| `isShadow`         | `is-shadow`      |             | `boolean`                          | `false`           |
| `languagesPath`    | `languages-path` |             | `string`                           | `'loc.languages'` |
| `separator`        | `separator`      |             | `string`                           | `'.'`             |
| `shadow`           | `shadow`         |             | `boolean`                          | `false`           |
| `top`              | `top`            |             | `boolean`                          | `false`           |
| `translatePath`    | `translate-path` |             | `string`                           | `'loc.translate'` |
| `type`             | `type`           |             | `"local" \| "memory" \| "session"` | `'memory'`        |
| `url` _(required)_ | `url`            |             | `string`                           | `undefined`       |


## Dependencies

### Used by

 - [uni-lang-menu](../../../@element)
 - [uni-lang-menu-shadow](../../../@shadow)

### Graph
```mermaid
graph TD;
  uni-lang-menu --> uni-lang-load
  uni-lang-menu-shadow --> uni-lang-load
  style uni-lang-load fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Powered by [UiWebKit](https://uiwebkit.com/)*
