import express from "express";
import bodyParser from "body-parser";
import { WebSocketServer } from "ws";

import authRouter from "./router/auth";
import productRouter from "./router/product";
import articleRouter from "./router/article";
import setUpDatabase from "./models/config";

const app = express();
const wss = new WebSocketServer({ port: 8080 });

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type",
    "Content-Type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/articles", articleRouter);

setUpDatabase();
wss.on("connection", function connection(ws) {
  ws.on("error", console.error);
});

app.listen(5000, () => console.log("Running"));

export default wss;
