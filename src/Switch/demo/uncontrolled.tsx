import { Switch } from 'hara-ui';
import React from 'react';

const Demo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <Switch id="airplane-mode" defaultChecked={true} />
      <label htmlFor="airplane-mode">飞行模式</label>
    </div>
  );
};

export default Demo;
