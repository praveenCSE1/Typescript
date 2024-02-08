"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./routes/data");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
//for cross platform acess.
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use('/', data_1.router);
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
