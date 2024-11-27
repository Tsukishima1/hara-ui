import { Switch } from 'hara-ui';
import React, { useState } from 'react';

const Demo = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <Switch
        id="airplane-mode"
        checked={isChecked}
        onCheckedChange={(checked) => setIsChecked(checked)}
      />
      <label htmlFor="airplane-mode">飞行模式</label>
    </div>
  );
};

export default Demo;
