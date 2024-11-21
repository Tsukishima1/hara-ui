---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Calendar 日历

用于展示日期的日历组件。

## 预览

<code src="./demo/index.tsx">Calendar 示例</code>

## 使用方法

### 导入

```jsx | pure
import { Calendar } from 'hara-ui';
```

### 组件结构

```html | pure
<Calendar mode="single" selected={date} onSelect={setDate} />
```

## 参数

### SingleProps

:::info{title=待开发}
目前只支持使用单选日期以及以下参数设置，其他模式暂不支持，其中`mode='single'`必填，否则之后的`selected`和`onSelect`并不生效。
:::

| 属性        | 类型                   | 必选 | 默认值     | 描述                      |
| ----------- | ---------------------- | ---- | ---------- | ------------------------- |
| `mode`      | `'single'`             | 是   | `'single'` | 日历模式，`single` 为单选 |
| `selected`  | `Date`                 | 否   | -          | 绑定状态中的日期值        |
| `onSelect`  | `React.SetStateAction` | 否   | -          | 绑定状态中的更新函数      |
| `className` | `string`               | 否   | -          | 自定义类名                |
| `style`     | `React.CSSProperties`  | 否   | -          | 自定义样式                |
