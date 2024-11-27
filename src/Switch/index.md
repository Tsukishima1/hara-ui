---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Switch 切换按钮

该组件用于在选中和非选中状态之间进行切换。

**支持受控和非受控两种模式：**

- 受控模式：组件外部通过 `checked` 属性和 `onCheckedChange` 回调函数来控制和响应组件的状态变化
- 非受控模式：组件内部根据 `defaultChecked` 属性来设置默认选中状态，通过 `onCheckedChange` 回调函数来响应组件的状态变化

## 预览

<code src="./demo/index.tsx">受控模式</code>

<code src="./demo/uncontrolled.tsx">非受控模式</code>

## 使用方法

### 导入

```jsx | pure
import { Switch } from 'hara-ui';
```

### 组件结构

```html | pure
<Switch />
```

## 禁用状态

<code src="./demo/disabled.tsx"></code>

## 参数

| 属性              | 类型                         | 必选 | 默认值  | 描述                     |
| ----------------- | ---------------------------- | ---- | ------- | ------------------------ |
| `id`              | `string`                     | 否   | -       | 用于关联 label 元素的 id |
| `defaultChecked`  | `boolean`                    | 否   | `false` | 默认选中状态             |
| `checked`         | `boolean`                    | 否   | -       | 选中状态                 |
| `onCheckedChange` | `(checked: boolean) => void` | 否   | -       | 状态改变时的回调函数     |
| `style`           | `React.CSSProperties`        | 否   | -       | 自定义样式               |
| `className`       | `string`                     | 否   | -       | 自定义类名               |
