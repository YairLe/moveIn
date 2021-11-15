import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import checkAuth from "./middleware/is-auth";
import Requirements from "./models/Requirements";
import User from "./models/User";
import authRoute from "./routes/auth";
import apartmentsRoute from "./routes/apartments"
import requirementsRoute from "./routes/requirements";
import path from "path";
import Images from "./models/Images";
const app = express();
const port = process.env.PORT || 5000;
const fileUpload = require("express-fileupload");
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
  // allowedHeaders: ['Content-Type', "Authorization"]
  // allowedHeaders: ["Content-Type", "Authorization", "Accept", "Origin", "X-Requested-With"],
  // origin: true,
  // preflightContinue: true
};
// app.use(express.static(path.join(__dirname, "../movein-client/build")));
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "../movein-client", "build")));
app.post("/upload", async (req: any, res: any) => {
  // console.log(req.files, req.body, req.params, "i am here")
  const { name, data } = req.files.files;
  console.log(req.files.files, "printing them")
  // // console.log(name, );
  let test = String(data).replace("\u0000/g", "SomeVerySpecialText");
  if (name && data) {
    const image = new Images({
      id: 3,
      name,
      image: data,
      img: "",
    });
    const result = await image.save();
    //   console.log(result);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});
app.use(authRoute);
app.use(checkAuth, apartmentsRoute);
app.use(checkAuth, requirementsRoute);

User.hasOne(Requirements);
Requirements.belongsTo(User);

app.use(express.static("public"));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../movein-client", "build", "index.html"));
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
