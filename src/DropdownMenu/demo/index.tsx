import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'hara-ui';
import React from 'react';

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>用户设置</DropdownMenuTrigger>
      <DropdownMenuContent style={{ width: '120px' }}>
        <DropdownMenuLabel>我的账号</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>个人信息</DropdownMenuItem>
        <DropdownMenuItem>退出登录</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            alert('真的没有啊');
          }}
        >
          此处啥也没有
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuDemo;
