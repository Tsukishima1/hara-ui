import { Button } from 'hara-ui';
import { Pointer } from 'lucide-react';
import React from 'react';

export default () => {
  return (
    <>
      <Button>
        <Pointer/>
        点击进行下一步
      </Button>
    </>
  );
};
