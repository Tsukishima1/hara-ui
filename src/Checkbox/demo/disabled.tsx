import { Checkbox } from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Checkbox id="terms" disabled />
      <label htmlFor="terms">同意我们的服务条款和隐私政策</label>
    </div>
  );
}
