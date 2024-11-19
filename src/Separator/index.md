---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Separator 分割线

用于在内容之间插入分割线，增加内容的可读性。

## 预览

<code src="./demo/index.tsx">Separator 示例</code>

## 使用方法

### 导入

```jsx | pure
import { Separator } from 'hara-ui';
```

### 组件结构

```html | pure
<Separator />
```

## 参数

| 属性          | 类型                         | 必选 | 默认值         | 描述         |
| ------------- | ---------------------------- | ---- | -------------- | ------------ |
| `orientation` | `"horizontal" \| "vertical"` | 否   | `"horizontal"` | 分割线的方向 |
| `style`       | `React.CSSProperties`        | 否   | -              | 自定义样式   |
| `className`   | `string`                     | 否   | -              | 自定义类名   |
