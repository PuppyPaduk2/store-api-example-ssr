import * as express from 'express';
import * as http from "http";
import * as ReactDOMServer from "react-dom/server";
import * as React from 'react';

import { html } from "../client/html";
import { App } from "../client/app";

const port = 5000;
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.static("dist/client"));
app.get("/favicon.ico", (req, res) => res.sendStatus(404));

app.get("/", (req, res) => {
  res.send(
    html({
      title: "Home",
      content: ReactDOMServer.renderToString(<App />),
    })
  );
});

server.listen(port, () => console.log(`http://localhost:${port}`));
