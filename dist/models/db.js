"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
const uri = 'mongodb://localhost:27017/typescript';
mongoose_1.default.connect(uri);
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB eror:'));
db.once('open', () => {
    console.log('Connected');
});
