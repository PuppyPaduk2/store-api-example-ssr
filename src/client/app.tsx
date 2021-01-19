import * as React from 'react';
import { Button } from "antd";
import { ContextScope, store } from "store-api";
import { Context, useContext, useStoreState } from "store-api-react";

const numApi = store({
  init: -1,
  api: ({ setState, getState }) => ({
    inc: () => setState(prev => prev + 1),
    dec: () => setState(getState() - 1),
  }),
});

export const getCountClick = (init?: number) => numApi({ name: "count-click", init });

export const App = (props: { context: ContextScope }) => {
  return (
    <Context value={props.context}>
      <CountClick />
    </Context>
  );
};

const CountClick = () => {
  const countClick = useContext(getCountClick);
  const count = useStoreState(countClick);

  return (
    <div>
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
    </div>
  );
};
