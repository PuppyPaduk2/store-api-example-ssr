import * as React from 'react';
import { rootContext, contractStores, contractDepends, depend } from "store-api";
import { useContext, useStore } from "store-api-react";
import { Button, Space } from "antd";

import { numberApi } from "../../lib/store-apis";

const rootStores = rootContext(contractStores({
  countRequests: numberApi,
}).stores());

const appContract = contractStores({
  countRequests: numberApi,
});

const appDepends = contractDepends({
  useRootCountRequests: depend({
    name: "useRootCountRequests",
    stores: appContract.config(["countRequests"]),
    handler: ({ countRequests }) => {
      rootStores.countRequests.api.inc();
      return countRequests.api.set(rootStores.countRequests.getState());
    },
  }),
});

const appDependsAll = appDepends.depends();

export const PageHome: React.FC = () => {
  useContext(appDependsAll);

  const countRequests = useContext(appContract.store.countRequests);
  const countRequestsValue = useStore(countRequests);

  return (
    <Space>
      <div>{countRequestsValue}</div>
      <Button
        onClick={countRequests.api.dec}
      >
        Dec
      </Button>
      <Button
        onClick={countRequests.api.inc}
      >
        Inc
      </Button>
    </Space>
  )
};
