---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# RadioGroup 单选按钮组

该组件用于在多个选项中选择一个。

该组件同样支持受控和非受控两种模式，详情请阅读 `Switch` 组件描述。

## 预览

<code src="./demo/index.tsx">RadioGroup 示例</code>

## 使用方法

### 导入

```jsx | pure
import { RadioGroup } from 'hara-ui';
```

### 组件结构

```html | pure
<RadioGroup>
  <RadioGroupItem></RadioGroupItem>
  <RadioGroupItem></RadioGroupItem>
</RadioGroup>
```

## 禁用状态

<code src="./demo/disabled.tsx"></code>

## 参数

### RadioGroupProps

| 属性            | 类型                      | 必选 | 默认值  | 描述                 |
| --------------- | ------------------------- | ---- | ------- | -------------------- |
| `defaultValue`  | `string`                  | 否   | -       | 默认选中值           |
| `value`         | `string`                  | 否   | -       | 选中值               |
| `onValueChange` | `(value: string) => void` | 否   | -       | 状态改变时的回调函数 |
| `disabled`      | `boolean`                 | 否   | `false` | 是否禁用             |
| `style`         | `React.CSSProperties`     | 否   | -       | 自定义样式           |
| `className`     | `string`                  | 否   | -       | 自定义类名           |

### RadioGroupItemProps

| 属性       | 类型      | 必选 | 默认值  | 描述             |
| ---------- | --------- | ---- | ------- | ---------------- |
| `id`       | `string`  | 否   | -       | 用于绑定 `label` |
| `value`    | `string`  | 是   | -       | 选中值           |
| `disabled` | `boolean` | 否   | `false` | 是否禁用         |
