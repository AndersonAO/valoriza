import express from "express";
import "reflect-metadata";
import { router } from "../routes";

import "./database";

const _PORT = 3000

const app = express();
app.use(express.json());
app.use(router);




app.listen(_PORT, () => {
  console.log('SERVER IS RUNNING: ' + _PORT)
})