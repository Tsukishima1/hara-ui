---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Select 选择器

选择器组件用于从多个选项中选择一个或多个选项。

参考`ShadcnUI`对于 Select 组件的设计，使用了`lucide`图标库，显示选项列表供用户选择（由按钮触发）。

该组件同样支持受控和非受控两种模式，详情请阅读 `Switch` 组件描述。

## 预览

<code src="./demo/index.tsx">Select 示例</code>

## 使用方法

### 导入

```jsx | pure
import { Select } from 'hara-ui';
```

### 组件结构

```html | pure
<select>
  <SelectTrigger>头部内容</SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">选项1</SelectItem>
    <SelectItem value="option2">选项2</SelectItem>
    <SelectItem value="option3">选项3</SelectItem>
  </SelectContent>
</select>
```

## 参数

### SelectProps

| 属性            | 类型                      | 必选 | 默认值 | 描述                           |
| --------------- | ------------------------- | ---- | ------ | ------------------------------ |
| `value`         | `string`                  | 否   | `-`    | 选中的值                       |
| `defaultValue`  | `string`                  | 否   | `-`    | 默认选中的值                   |
| `onValueChange` | `(value: string) => void` | 否   | `-`    | 当选中的值变化时调用的回调函数 |
| `className`     | `string`                  | 否   | `-`    | Select 组件的附加类名          |
| `style`         | `React.CSSProperties`     | 否   | `-`    | Select 组件的内联样式          |

### SelectItemProps

| 属性    | 类型     | 必选 | 默认值 | 描述     |
| ------- | -------- | ---- | ------ | -------- |
| `value` | `string` | 是   | `-`    | 选项的值 |
