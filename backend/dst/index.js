"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const zod_1 = require("./zod");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const data = zod_1.user.safeParse(req.body);
    const username = (_a = data.data) === null || _a === void 0 ? void 0 : _a.username;
    const email = (_b = data.data) === null || _b === void 0 ? void 0 : _b.email;
    const password = (_c = data.data) === null || _c === void 0 ? void 0 : _c.password;
    try {
        yield db_1.usermodel.create({
            username,
            email,
            password
        });
    }
    catch (e) {
        res.json({
            message: "incorrect inputs"
        });
    }
    res.json({
        message: "youe have signed up"
    });
}));
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect("mongodb+srv://admin:zHj0B48rwT9ykOqc@admin1.as6ck.mongodb.net/paytm");
            console.log("db is connected");
        }
        catch (e) {
            console.log("error in db");
        }
    });
}
start();
app.listen(3000);
