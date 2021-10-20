"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const is_auth_1 = __importDefault(require("./middleware/is-auth"));
const Requirements_1 = __importDefault(require("./models/Requirements"));
const User_1 = __importDefault(require("./models/User"));
const auth_1 = __importDefault(require("./routes/auth"));
const requirements_1 = __importDefault(require("./routes/requirements"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(auth_1.default);
app.use(is_auth_1.default, requirements_1.default);
User_1.default.hasOne(Requirements_1.default);
Requirements_1.default.belongsTo(User_1.default);
app.get("/", (req, res) => {
    res.send("hello from my app");
});
app.use((error, req, res, next) => {
    console.log(error, " i am also here");
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
