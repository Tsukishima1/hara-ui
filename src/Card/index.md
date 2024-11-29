---
nav:
  title: 组件
  order: 2
group: 通用
toc: content
---

# Card 卡片

卡片组件用于展示一组相关的信息，通常用于展示列表项、文章等。

## 预览

<code src="./demo/index.tsx">Card 示例</code>

## 使用方法

### 导入

```jsx | pure
import { Card } from 'hara-ui';
```

### 组件结构

```html | pure
<Card>
  <CardHeader>
    <CardTitle></CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent></CardContent>
  <CardFooter></CardFooter>
</Card>
```
 