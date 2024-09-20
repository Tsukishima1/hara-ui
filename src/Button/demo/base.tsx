import React from 'react';
import { Button } from 'hara-ui';

export default () => {

  return (
    <>
      <Button variant="primary">默认按钮</Button> &nbsp;
      <Button variant="ghost">幽灵按钮</Button> &nbsp;
      <Button style={{color:'skyblue',backgroundColor:'whitesmoke'}}>自定义样式</Button> &nbsp;
      <Button onClick={() => alert('点击事件')}>点击事件</Button>
    </>
  );
}
