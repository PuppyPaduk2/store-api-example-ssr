import * as React from 'react';
import { Button } from "antd";

const { useState } = React;

export const App = () => {
  const [num, set] = useState<number>(0);

  return (
    <div>
      <div>{num}</div>
      <Button onClick={() => {
        set((prev) => prev + 1);
      }}>Add</Button>
    </div>
  );
};
