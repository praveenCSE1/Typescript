"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.McqModel = void 0;
const db_1 = require("./db");
const mcqSchema = new db_1.mongoose.Schema({
    question: {
        type: String
    },
    options: [{ option: String, isCorrect: Boolean }]
});
const McqModel = db_1.mongoose.model('mcqQuestions', mcqSchema);
exports.McqModel = McqModel;
