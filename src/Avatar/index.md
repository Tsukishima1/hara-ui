---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Avatar 头像

头像组件用于展示用户头像、头像信息等。

## 预览

<code src="./demo/index.tsx">Avatar 示例</code>

## 使用方法

### 导入

```jsx | pure
import { Avatar } from 'hara-ui';
```

### 组件结构

```html | pure
<Avatar>
  <AvatarImg src="..." alt="...">头像图片</AvatarImg>
  <AvatarFallback>当图片失效时显示的文本内容</AvatarFallback>
</Avatar>
```

## 参数

### AvatarProps

| 属性        | 类型                  | 必选 | 默认值 | 描述       |
| ----------- | --------------------- | ---- | ------ | ---------- |
| `style`     | `React.CSSProperties` | 否   | -      | 自定义样式 |
| `className` | `string`              | 否   | -      | 自定义类名 |

### AvatarImgProps

| 属性        | 类型                  | 必选 | 默认值 | 描述       |
| ----------- | --------------------- | ---- | ------ | ---------- |
| `src`       | `string`              | 是   | -      | 图片地址   |
| `alt`       | `string`              | 是   | -      | 图片描述   |
| `style`     | `React.CSSProperties` | 否   | -      | 自定义样式 |
| `className` | `string`              | 否   | -      | 自定义类名 |

### AvatarFallbackProps

| 属性        | 类型                  | 必选 | 默认值 | 描述       |
| ----------- | --------------------- | ---- | ------ | ---------- |
| `style`     | `React.CSSProperties` | 否   | -      | 自定义样式 |
| `className` | `string`              | 否   | -      | 自定义类名 |
