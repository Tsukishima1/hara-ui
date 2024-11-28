---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Checkbox 复选框

复选框组件用于展示多选项中的一个或多个选项。

该组件同样支持受控和非受控两种模式，详情请阅读 `Switch` 组件描述。

## 预览

<code src="./demo/index.tsx">Checkbox 示例</code>

## 使用方法

### 导入

```jsx | pure
import { Checkbox } from 'hara-ui';
```

### 组件结构

```html | pure
<Checkbox />
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
