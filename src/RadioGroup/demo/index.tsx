import { RadioGroup, RadioGroupItem } from 'hara-ui';
import React from 'react';

export default () => {
  const [value, setValue] = React.useState('1');

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'8px', alignItems:'center'}}>
      <RadioGroup defaultValue="1" value={value} onValueChange={setValue}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <RadioGroupItem value="1" id="r1" />
          <label htmlFor="r1">选项1</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <RadioGroupItem value="2" id="r2" />
          <label htmlFor="r2">选项2</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <RadioGroupItem value="3" id="r3" />
          <label htmlFor="r3">选项3</label>
        </div>
      </RadioGroup>
      <p>选中的值为：{value}</p>
    </div>
  );
};
