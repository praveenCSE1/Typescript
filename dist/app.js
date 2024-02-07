"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./routes/data");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/', data_1.router);
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, world!');
// });
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
