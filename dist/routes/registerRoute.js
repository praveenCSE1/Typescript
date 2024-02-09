"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const registerController_1 = require("../controllers/registerController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.register = router;
router.post('/signup', registerController_1.signup);
router.post('/login', registerController_1.login);
