import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import checkAuth from "./middleware/is-auth";
import Requirements from "./models/Requirements";
import User from "./models/User";
import authRoute from "./routes/auth";
import requirementsRoute from "./routes/requirements";
import path from "path";
import Images from "./models/Images";
const FileType = require("file-type");
const app = express();
const port = process.env.PORT || 5000;
const fileUpload = require("express-fileupload");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(fileUpload());
// app.use(express.static(path.join(__dirname, "../movein-client/build")));
app.use(cors(corsOptions));
// app.get("/", async (req, res) => {
//   res.send("Hello vro!");
// });

app.post("/upload", async (req: any, res: any) => {
  const { name, data } = req.files.pic;
  // console.log(name, );
  // let test = String(data).replace("\u0000/g", "SomeVerySpecialText");
  if (name && data) {
    const image = new Images({
      id: 2,
      name,
      image: data,
      img: "",
    });
    const result = await image.save();
    console.log(result);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

app.get("/img/:id", async (req, res) => {
  const id = req.params.id;
  let img: any = await Images.findOne({ where: { id: 2 } });
  if (img) {
    // img = String(img).replace("SomeVerySpecialText", "\u0000");

    // const kaki: any = Buffer.from(img);
    const contentType = await FileType.fromBuffer(img.image); // get the mimetype of the buffer (in this case its gonna be jpg but can be png or w/e)
    res.type(contentType.mime); // not always needed most modern browsers including chrome will understand it is an img without this
    res.end(img.image);
  } else {
    res.end("No Img with that Id!");
  }
});
app.use(express.static(path.join(__dirname, "../movein-client", "build")));
app.use(authRoute);
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
