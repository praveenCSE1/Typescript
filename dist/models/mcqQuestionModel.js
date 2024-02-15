"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.McqModel = exports.CategoryModel = void 0;
const db_1 = require("./db");
const categorySchema = new db_1.mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
const mcqSchema = new db_1.mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [{
            option: String,
            isCorrect: Boolean
        }],
    category: {
        type: db_1.mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
});
const CategoryModel = db_1.mongoose.model('category', categorySchema);
exports.CategoryModel = CategoryModel;
const McqModel = db_1.mongoose.model('mcqQuestions', mcqSchema);
exports.McqModel = McqModel;
