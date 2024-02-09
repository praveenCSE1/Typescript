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
exports.login = exports.signup = void 0;
const signupModel_1 = require("../models/signupModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const password = req.body.password;
        //find whether the email already exist or not
        const existingUser = yield signupModel_1.Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const hpassword = yield bcrypt_1.default.hash(password, 10);
        const NewUser = new signupModel_1.Users({
            email: email,
            password: hpassword
        });
        const save = yield NewUser.save().then(User => {
            console.log(User);
            res.status(200).json({ message: "success", user: User });
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error while storing the user data" });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = yield signupModel_1.Users.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
        const Userpassword = yield bcrypt_1.default.compare(password, user.password);
        if (Userpassword) {
            res.status(200).json({ status: 'success' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error while login the user data" });
    }
});
exports.login = login;
