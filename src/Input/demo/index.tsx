import React from 'react';
import { Input } from 'hara-ui';

export default () => {
    return (
        <>
            <Input placeholder="请输入用户名" /> &nbsp;
            <Input type="password" placeholder="请输入密码" /> &nbsp;
            <Input type="file"/> &nbsp;
            <Input disabled placeholder='被禁用的输入框'/> &nbsp;
        </>
    );
}
