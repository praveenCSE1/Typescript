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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const signup_1 = require("../models/signup");
const router = express_1.default.Router();
exports.router = router;
router.post('/data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new signup_1.Users({
            email: req.body.email,
            password: req.body.password,
        });
        const save = yield data.save().then(User => {
            console.log(User);
            res.status(200).json({ message: "success", user: User });
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error while storing the user data" });
    }
}));
