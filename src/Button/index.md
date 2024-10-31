---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Button 按钮

按钮组件用于触发一个动作或事件，如提交一个表单、打开一个对话框、取消一个动作或执行一个删除操作。

## 预览

<code src="./demo/base.tsx">按钮示例</code>

## 使用方法

### 导入

```jsx | pure
import { Button } from 'hara-ui';
```

### 组件结构

```html | pure
<button>你好</button>
```

## 参数

| 属性      | 类型                                                    | 必选 | 默认值    | 描述       |
| --------- | ------------------------------------------------------- | ---- | --------- | ---------- |
| variant   | `"primary" \| "ghost"`                                  | 否   | `primary` | 按钮类型   |
| style     | `React.CSSProperties`                                   | 否   | -         | 自定义样式 |
| className | `string`                                                | 否   | -         | 自定义类名 |
| onClick   | `(event: React.MouseEvent<HTMLButtonElement>) => void;` | 否   | -         | 点击事件   |
