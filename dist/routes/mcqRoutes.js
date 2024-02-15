"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcq = void 0;
const mcqController_1 = require("../controllers/mcqController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.mcq = router;
router.get('/displayResult', mcqController_1.displayResult);
router.post('/storeResult', mcqController_1.storeResult);
router.get('/categories', mcqController_1.displayCategories);
router.get('/:id', mcqController_1.displayQuestions);
router.post('/', mcqController_1.add_mcq);
