---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Button 按钮

按钮组件用于触发一个动作或事件，如提交一个表单、打开一个对话框、取消一个动作或执行一个删除操作。

## 引用

```jsx | pure
import { Button } from 'hara-ui';
```

## 示例

<code src="./demo/base.tsx">按钮示例</code>

## 参数

| 参数      | 说明       | 类型                                                    | 默认值    |
| --------- | ---------- | ------------------------------------------------------- | --------- |
| type      | 按钮类型   | `"primary" \| "default"`                                | `default` |
| style     | 自定义样式 | `React.CSSProperties`                                   | -         |
| className | 自定义类名 | `string`                                                | -         |
| onClick   | 点击事件   | `(event: React.MouseEvent<HTMLButtonElement>) => void;` | -         |
