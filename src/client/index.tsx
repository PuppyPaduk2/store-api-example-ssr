import * as React from "react";
import * as ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { App } from "./app";

ReactDOM.hydrate(<App />, document.getElementById("root"));
