import * as express from 'express';
import * as http from "http";

const port = 5000;
const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello");
});

server.listen(port, () => console.log(`http://localhost:${port}`));
