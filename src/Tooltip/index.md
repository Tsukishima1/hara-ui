---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Tooltip 文字提示

文字提示组件用于在鼠标悬停时显示提示信息。用双标签包裹需要提示的内容，通过 `content` 属性设置提示文字。

## 引用

```jsx | pure
import { Tooltip } from 'hara-ui';
```

## 示例

<code src="./demo/base.tsx">Tooltip 示例</code>

## 参数

| 参数      | 说明     | 类型     | 默认值                                   |
| --------- | -------- | -------- | ---------------------------------------- |
| content   | 提示文字 | `string` | -                                        |
| placement | 显示位置 | `string` | `"top" \| "bottom" \| "left" \| "right"` |
