# uni-lang-menu-wrap



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type                               | Default                 |
| ---------------- | ----------------- | ----------- | ---------------------------------- | ----------------------- |
| `activeState`    | `active-state`    |             | `string`                           | `'app.loc.menu.active'` |
| `feature`        | `feature`         |             | `string`                           | `'uni.store'`           |
| `separator`      | `separator`       |             | `string`                           | `'.'`                   |
| `translateState` | `translate-state` |             | `string`                           | `'app.loc.translate'`   |
| `type`           | `type`            |             | `"local" \| "memory" \| "session"` | `'session'`             |


## Dependencies

### Depends on

- uni-event
- uni-store-event-set
- uni-store-event-get
- uni-load

### Graph
```mermaid
graph TD;
  uni-lang-menu-wrap --> uni-event
  uni-lang-menu-wrap --> uni-store-event-set
  uni-lang-menu-wrap --> uni-store-event-get
  uni-lang-menu-wrap --> uni-load
  uni-store-event-set --> uni-event
  uni-store-event-set --> uni-store-set
  uni-store-event-get --> uni-event
  uni-store-event-get --> uni-store-get
  style uni-lang-menu-wrap fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Powered by [UiWebKit](https://uiwebkit.com/)*
