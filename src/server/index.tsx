import * as express from 'express';
import * as http from "http";
import * as ReactDOMServer from "react-dom/server";
import * as React from 'react';
import { ContextScope, context, serializeContext } from "store-api";
import { StaticRouter } from "react-router-dom";

import { html } from "../client/html";
import { App } from "../client/app";
import { getCountClick } from "../client/provider";

const port = 5000;
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.static("dist/client"));
app.get("/favicon.ico", (req, res) => res.sendStatus(404));

const renderPage = async (payload: {
  title?: string;
  url: string;
  preload?:(contextScope: ContextScope) => (void | Promise<void>);
}) => {
  const routerContext = {};
  const app = context();

  if (payload.preload) {
    await payload.preload(app);
  }

  return html({
    title: payload.title,
    content: ReactDOMServer.renderToString(
      <StaticRouter location={payload.url} context={routerContext}>
        <App context={app} />
      </StaticRouter>
    ),
    data: serializeContext(app),
  });
};

app.get("/", async (req, res) => {
  try {
    res.send(await renderPage({
      title: "Home",
      url: req.url,
      // preload: (app) => {
      //   app(getCountClick).api.inc.call();
      // }
    }));
  } catch (error) {}
});

app.get("/joke", async (req, res) => {
  try {
    res.send(
      await renderPage({
        title: "Joke",
        url: req.url,
      })
    );
  } catch (error) {}
});

server.listen(port, () => console.log(`http://localhost:${port}`));
