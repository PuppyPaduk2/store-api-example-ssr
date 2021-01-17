import * as React from 'react';

const { useState } = React;

export const App = () => {
  const [num, set] = useState<number>(0);

  return (
    <div>
      <div>{num}</div>
      <button onClick={() => {
        set((prev) => prev + 1);
      }}>Add</button>
    </div>
  );
};
