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
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const corsOptions = {
    allowedHeaders: ["Content-Type", "Authorization"],
};
// app.use(express.static(path.join(__dirname, "../movein-client/build")));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.static(path_1.default.join(__dirname, "../movein-client", "build")));
app.use(auth_1.default);
app.use(is_auth_1.default, requirements_1.default);
User_1.default.hasOne(Requirements_1.default);
Requirements_1.default.belongsTo(User_1.default);
app.use(express_1.default.static("public"));
app.use((req, res, next) => {
    res.sendFile(path_1.default.join(__dirname, "../movein-client", "build", "index.html"));
});
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message, data });
});
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
