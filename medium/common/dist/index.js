"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateblogSchema = exports.createblogSchema = exports.updateuserSchema = exports.createuserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createuserSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8),
    name: zod_1.default.string().optional(),
});
exports.updateuserSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8),
});
exports.createblogSchema = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
exports.updateblogSchema = zod_1.default.object({
    title: zod_1.default.string().min(10).optional(),
    content: zod_1.default.string().min(10).optional(),
    id: zod_1.default.string(),
});
