"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const db_1 = require("./db");
const userschema = new db_1.mongoose.Schema({
    email: String,
    password: {
        type: String
    },
    role: {
        type: String,
        default: 'USER'
    }
});
const Users = db_1.mongoose.model('registers', userschema);
exports.Users = Users;
