import { Calendar } from 'hara-ui';
import React from 'react';

export default () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <Calendar mode="single" selected={date} onSelect={setDate} />
      <p style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>
        您选择的日期：{date?.toLocaleDateString()}
      </p>
    </div>
  );
};
