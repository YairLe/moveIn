import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import checkAuth from "./middleware/is-auth";
import Requirement from "./models/Requirements";
import User from "./models/User";
import authRoute from "./routes/auth";
import requirementsRoute from "./routes/requirements";

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(authRoute);
app.use(checkAuth, requirementsRoute);

User.hasOne(Requirement, { foreignKey: "users_id_fkey" });
Requirement.belongsTo(User);

app.get("/", (req, res) => {
  res.send("hello from my app");
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
