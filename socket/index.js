import express from "express";
const app = express();
app.get("/healthz", (_req, res) => res.status(200).send("ok"));
app.get("/", (_req, res) => res.send("socket placeholder up"));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));
