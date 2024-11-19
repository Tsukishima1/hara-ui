import { Button, Tooltip } from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <>
      <Tooltip content="提示文本" placement="top">
        <Button style={{ backgroundColor: 'whitesmoke', color: 'black' }}>
          top
        </Button>
      </Tooltip>
      <Tooltip content="提示文本" placement="bottom">
        <Button style={{ backgroundColor: 'whitesmoke', color: 'black' }}>
          bottom
        </Button>
      </Tooltip>
      <Tooltip content="提示文本" placement="left">
        <Button style={{ backgroundColor: 'whitesmoke', color: 'black' }}>
          left
        </Button>
      </Tooltip>
      <Tooltip content="提示文本" placement="right">
        <Button style={{ backgroundColor: 'whitesmoke', color: 'black' }}>
          right
        </Button>
      </Tooltip>
    </>
  );
};
