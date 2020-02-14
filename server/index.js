"use strict";

import express from "express";
import morgan from "morgan";
import { resolve } from "path";
import path from "path";
import nunjucks from "nunjucks";

const publicPath = resolve(__dirname, "../public");

const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(publicPath));

app.use(morgan("dev"));

nunjucks.configure(path.resolve(__dirname, "views"), {
  autoescape: false,
  express: app,
  watch: true
});

app.get("/_health", (req, res) => {
  res.json({
    ok: true,
    message: "healthy"
  });
});

app.get("/", (req, res) => {
  res.render(__dirname + `/views/index.html`);
});

app.listen(port);
console.log(`I'm at http://localhost:${port}`);
