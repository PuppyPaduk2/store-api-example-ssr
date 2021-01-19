import * as React from "react";
import * as ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { context, deserializeContext } from "store-api";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app";

const app = context();

const _window: any = window;

if (_window.initData) {
  deserializeContext(_window.initData, app);
}

ReactDOM.hydrate(
  <BrowserRouter>
    <App context={app} />
  </BrowserRouter>,
  document.getElementById("root")
);
