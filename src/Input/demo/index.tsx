import { Input } from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Input placeholder="请输入用户名" />
      <Input type="password" placeholder="请输入密码" />
      <Input type="file" />
      <Input disabled placeholder="被禁用的输入框" />
    </div>
  );
};
