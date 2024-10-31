import { Select, SelectContent, SelectItem, SelectTrigger } from 'hara-ui';
import React from 'react';

const Demo = () => {
  return (
    <Select>
      <SelectTrigger>选择一个工作地点 ✨</SelectTrigger>
      <SelectContent>
        <SelectItem value="Beijing">北京</SelectItem>
        <SelectItem value="Shanghai">上海</SelectItem>
        <SelectItem value="Shenzhen">深圳</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Demo;
