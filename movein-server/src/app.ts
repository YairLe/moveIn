import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import checkAuth from "./middleware/is-auth";
import Requirements from "./models/Requirements";
import User from "./models/User";
import authRoute from "./routes/auth";
import requirementsRoute from "./routes/requirements";

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(authRoute);
app.use(checkAuth, requirementsRoute);

User.hasOne(Requirements);
Requirements.belongsTo(User);

app.get("/", (req, res) => {
  res.send("hello from my app");
});

app.use((error: any, req: any, res: any, next: any) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
