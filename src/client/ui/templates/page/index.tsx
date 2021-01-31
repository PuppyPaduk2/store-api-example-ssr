import * as React from "react";
import { Space } from "antd";
import { Link } from "react-router-dom";
import { depend, contractStores, contractDepends } from "store-api";
import { useContext, useStore } from "store-api-react";
import { v4 as uuid } from "uuid";

import { stringApi } from "../../../lib/store-apis";

const appStores = contractStores({ hashRequest: stringApi });

const generateHashRequest = depend({
  name: "generateHashRequest",
  stores: appStores.config(["hashRequest"]),
  handler: ({ hashRequest }) => hashRequest.api.set(uuid()),
})

const appDepends = contractDepends({ generateHashRequest })

const appDependsAll = appDepends.depends();

export const Page: React.FC = ({ children }) => {
  useContext(appDependsAll);

  const hashRequest = useContext(appStores.store.hashRequest);

  return (
    <div>
      <Space align="center" style={{ width: "100%", justifyContent: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/joke">Joke</Link>
      </Space>
      <Space align="center" style={{ width: "100%", justifyContent: "center" }}>
        {useStore(hashRequest)}
      </Space>
      <div>{children}</div>
    </div>
  );
};
