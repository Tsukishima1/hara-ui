import { Input } from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <>
      <Input placeholder="请输入用户名" />
      <Input type="password" placeholder="请输入密码" />
      <Input type="file" />
      <Input disabled placeholder="被禁用的输入框" />
    </>
  );
};
