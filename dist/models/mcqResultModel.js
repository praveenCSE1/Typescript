"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcqResult = void 0;
const db_1 = require("./db");
const mcq1 = new db_1.mongoose.Schema({
    userId: String,
    username: String,
    Result: String,
    marksObtained: { type: String, default: 0 },
    TotalAttempts: { type: Number, default: 0 },
    Date: { type: Date, default: Date.now }
});
const mcqResult = db_1.mongoose.model("mcqResults", mcq1);
exports.mcqResult = mcqResult;
