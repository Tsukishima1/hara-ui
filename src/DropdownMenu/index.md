---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# DropdownMenu 下拉菜单

向用户显示由按钮触发的菜单，例如一组操作或功能。

## 预览

<code src="./demo/index.tsx">DropdownMenu 示例</code>

## 使用方法

### 导入

```jsx | pure
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from 'hara-ui';
```

### 组件结构

```html | pure
<DropdownMenu>
  <DropdownMenuTrigger>下拉菜单标题</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>小标题</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>选项1</DropdownMenuItem>
    <DropdownMenuItem>选项2</DropdownMenuItem>
    <DropdownMenuItem>选项3</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## 参数

### TriggerProps

| 属性        | 类型                  | 必选 | 默认值 | 描述       |
| ----------- | --------------------- | ---- | ------ | ---------- |
| `style`     | `React.CSSProperties` | 否   | -      | 自定义样式 |
| `className` | `string`              | 否   | -      | 自定义类名 |

### ContentProps

| 属性        | 类型                  | 必选 | 默认值 | 描述       |
| ----------- | --------------------- | ---- | ------ | ---------- |
| `style`     | `React.CSSProperties` | 否   | -      | 自定义样式 |
| `className` | `string`              | 否   | -      | 自定义类名 |

### ItemProps

| 属性        | 类型                  | 必选 | 默认值 | 描述       |
| ----------- | --------------------- | ---- | ------ | ---------- |
| `onClick`   | `() => void`          | 否   | -      | 点击事件   |
| `style`     | `React.CSSProperties` | 否   | -      | 自定义样式 |
| `className` | `string`              | 否   | -      | 自定义类名 |
