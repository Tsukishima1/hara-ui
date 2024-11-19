import { Button } from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <>
      <Button variant="primary">默认按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
      <Button style={{ color: 'skyblue', backgroundColor: 'whitesmoke' }}>
        自定义样式
      </Button>
      <Button onClick={() => alert('点击事件')}>点击事件</Button>
    </>
  );
};
