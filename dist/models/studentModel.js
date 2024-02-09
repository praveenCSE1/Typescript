"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentDetails = void 0;
const db_1 = require("./db");
const studentDetails = new db_1.mongoose.Schema({
    userId: String,
    name: String,
    email: String,
    department: String,
    phn: String,
    dob: Date,
});
const details = db_1.mongoose.model("Student", studentDetails);
exports.studentDetails = details;
