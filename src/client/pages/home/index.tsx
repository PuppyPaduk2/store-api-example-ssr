import * as React from 'react';
import { useContext, useStoreState } from "store-api-react";
import { Button, Space } from "antd";

import { getCountClick } from "../../provider";

export const PageHome: React.FC = () => {
  const countClick = useContext(getCountClick);
  const count = useStoreState(countClick);

  return (
    <Space>
      <div>{count}</div>
      <Button
        onClick={() => {
          countClick.api.dec.call();
        }}
      >
        Dec
      </Button>
      <Button
        onClick={() => {
          countClick.api.inc.call();
        }}
      >
        Inc
      </Button>
    </Space>
  )
};
