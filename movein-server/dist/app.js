"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = process.env.PORT || 8080;
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.get('/', (req, res) => {
    res.send('hello from my app');
});
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
