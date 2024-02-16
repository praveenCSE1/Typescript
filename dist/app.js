"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerRoutes_1 = require("./routes/registerRoutes");
const cors_1 = __importDefault(require("cors"));
const mcqRoutes_1 = require("./routes/mcqRoutes");
const studentRoutes_1 = require("./routes/studentRoutes");
const jwtController_1 = require("./controllers/jwtController");
const redisController_1 = require("./controllers/redisController");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
//for cross platform acess.
app.use((0, cors_1.default)({
    origin: '*'
}));
app.get('/redis', redisController_1.redisfunction);
app.use('/students', jwtController_1.verifyToken, studentRoutes_1.Students);
app.use('/mcq', jwtController_1.verifyToken, mcqRoutes_1.mcq);
app.use('/', registerRoutes_1.register);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
