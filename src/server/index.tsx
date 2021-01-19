import * as express from 'express';
import * as http from "http";
import * as ReactDOMServer from "react-dom/server";
import * as React from 'react';
import { context, serializeContext } from "store-api";

import { html } from "../client/html";
import { App, getCountClick } from "../client/app";

const port = 5000;
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.static("dist/client"));
app.get("/favicon.ico", (req, res) => res.sendStatus(404));

app.get("/", (req, res) => {
  // Root count
  const rootCountClick = getCountClick(0);

  rootCountClick.api.inc.call();

  const app = context();
  app(() => getCountClick(rootCountClick.getState()));

  res.send(
    html({
      title: "Home",
      content: ReactDOMServer.renderToString(<App context={app} />),
      data: serializeContext(app),
    })
  );
});

app.get("/joke", (req, res) => {
  res.send(html({
    title: "Joke",
    content: ""
  }));
});

server.listen(port, () => console.log(`http://localhost:${port}`));
