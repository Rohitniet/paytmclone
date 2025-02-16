"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const zod_1 = require("zod");
exports.user = zod_1.z.object({
    username: zod_1.z.string().min(3).max(15),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(5)
});
