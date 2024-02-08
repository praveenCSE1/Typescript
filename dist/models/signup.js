"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const db_1 = require("./db");
const userschema = new db_1.mongoose.Schema({
    email: Boolean,
    password: {
        type: String
    }
});
const Users = (0, db_1.Model)('registers', userschema);
exports.Users = Users;
