---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Input 输入框

_该组件封装了原生的`input`标签，提供了更多的样式和功能。_

输入框组件用于接收用户输入的文本信息。

## 预览

<code src="./demo/index.tsx">输入框示例</code>

## 使用方法

### 导入

```jsx | pure
import { Input } from 'hara-ui';
```

### 组件结构

```html | pure
<input />
```

## 参数

| 属性      | 类型                  | 必选 | 默认值 | 描述       |
| --------- | --------------------- | ---- | ------ | ---------- |
| style     | `React.CSSProperties` | 否   | -      | 自定义样式 |
| className | `string`              | 否   | -      | 自定义类名 |
