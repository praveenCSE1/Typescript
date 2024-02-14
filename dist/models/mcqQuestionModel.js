"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.McqModel = exports.CategoryModel = void 0;
const db_1 = require("./db");
//schema for categories of the MCQ's
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
        ref: 'Category'
    }
});
const CategoryModel = db_1.mongoose.model('Category', categorySchema);
exports.CategoryModel = CategoryModel;
const McqModel = db_1.mongoose.model('mcqQuestions', mcqSchema);
exports.McqModel = McqModel;
