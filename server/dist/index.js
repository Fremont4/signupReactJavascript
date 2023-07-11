"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const port = 5000;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const UsersModel = require("./models/Users.js");
// const employeeRoutes = express.Router();
const app = (0, express_1.default)();
// transport the data from front end to backend in json formatt
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use(body_parser_1.default.json());
// create connection with mongodb
mongoose_1.default.connect("mongodb://localhost:27017/users", {});
const connection = mongoose_1.default.connection;
app.get("/", (req, res) => { });
// api to post into the database
app.post("/register", (req, res) => {
    UsersModel.create(req.body);
    UsersModel.Save()
        .then((users) => res.json(users))
        .catch((error) => res.json(error));
});
app.listen(port, function () {
    console.log("server is running " + port);
});
//# sourceMappingURL=index.js.map