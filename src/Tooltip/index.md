---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Tooltip 文字提示

文字提示组件用于在鼠标悬停时显示提示信息。用双标签包裹需要提示的内容，通过 `content` 属性设置提示文字。

## 预览

<code src="./demo/base.tsx">Tooltip 示例</code>

## 使用方法

### 导入

```jsx | pure
import { Tooltip } from 'hara-ui';
```

### 组件结构

```html | pure
<Tooltip content="提示文字">
  <span>鼠标悬停显示提示</span>
</Tooltip>
```

## 参数

| 属性      | 类型     | 必选 | 默认值                                   | 描述     |
| --------- | -------- | ---- | ---------------------------------------- | -------- |
| content   | `string` | 是   | -                                        | 文字内容 |
| placement | `string` | 否   | `"top" \| "bottom" \| "left" \| "right"` | 显示位置 |
