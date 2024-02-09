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
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayResult = exports.storeResult = exports.add_mcq = exports.displayQuestions = void 0;
const mcqQuestionModel_1 = require("../models/mcqQuestionModel");
const mcqResultModel_1 = require("../models/mcqResultModel");
const displayQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield mcqQuestionModel_1.McqModel.find({});
        console.log(data);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: 'Error while fetching the data' });
    }
});
exports.displayQuestions = displayQuestions;
const add_mcq = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMcq = new mcqQuestionModel_1.McqModel({
            question: req.body.question,
            options: req.body.options,
        });
        const savedUser = yield newMcq.save();
        res.status(200).json({ message: 'mcq added successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while add the mcq' });
    }
});
exports.add_mcq = add_mcq;
const storeResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newResult = new mcqResultModel_1.mcqResult({
            userId: 'dsfsfdedfdfsecvnmoe',
            username: req.body.username,
            Result: req.body.result,
            marksObtained: req.body.marks,
            TotalAttempts: req.body.TotalAttempts,
            Date: Date.now()
        });
        const saveresult = yield newResult.save();
        res.status(200).json({ message: saveresult });
    }
    catch (error) {
        res.status(500).json({ message: 'Error while adding the mcq result' });
    }
});
exports.storeResult = storeResult;
const displayResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const result = await McqModel.findOne({userId:req.user.userId})
        const result = yield mcqQuestionModel_1.McqModel.find({});
        console.log(result + 'd');
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Error while fetching the mcq result' });
    }
});
exports.displayResult = displayResult;
