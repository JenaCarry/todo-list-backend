const express = require("express");
const router = require("./router");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/swagger", (_req, res) => {
  return res.sendFile(process.cwd() + "/swagger.json");
});

app.get("/docs", (req, res) => {
  return res.sendFile(process.cwd() + "/index.html");
});

app.use(router);

module.exports = app;
