import express from "express";
// import exphbs=require('express-handlebars')
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import db from "./util/database";
import authRoute from "./routes/auth";

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(authRoute);

app.get("/", (req, res) => {
  res.send("hello from my app");
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
