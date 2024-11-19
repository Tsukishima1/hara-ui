import { Separator } from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <div>
      <p>
        这是一条水平的分割线
      </p>
      <Separator />
      <div style={{height:'24px',display:'flex'}}>
        {/* 注意如果用垂直分割线需要设定父元素的高尺寸 */}
        我是两条
        <Separator orientation="vertical" />
        垂直的
        <Separator orientation="vertical" />
        分割线
      </div>
    </div>
  );
};
