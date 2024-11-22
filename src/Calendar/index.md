---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Calendar 日历

用于展示日期的日历组件，封装了`react-day-picker`组件，目前仅支持单选日期。

## 预览

<code src="./demo/index.tsx">Calendar 示例</code>

## 使用方法

### 导入

```jsx | pure
import { Calendar } from 'hara-ui';
```

### 组件结构

```html | pure
<Calendar mode="single" selected="{date}" onSelect="{setDate}" />
```

## 可选年月的日历

<code src="./demo/withdropdown.tsx">Calendar 示例</code>

## 参数

### SingleProps

:::info{title=待开发}
目前只支持使用单选日期以及以下参数设置，其他模式暂不支持，其中`mode='single'`必填，否则之后的`selected`和`onSelect`并不生效。
:::

| 属性           | 类型                   | 必选 | 默认值     | 描述                      |
| -------------- | ---------------------- | ---- | ---------- | ------------------------- |
| `mode`         | `'single'`             | 是   | `'single'` | 日历模式，`single` 为单选 |
| `selected`     | `Date`                 | 否   | -          | 绑定状态中的日期值        |
| `onSelect`     | `React.SetStateAction` | 否   | -          | 绑定状态中的更新函数      |
| `withDropdown` | `boolean`              | 否   | `false`    | 是否显示年月选择器        |
| `className`    | `string`               | 否   | -          | 自定义类名                |
| `style`        | `React.CSSProperties`  | 否   | -          | 自定义样式                |
