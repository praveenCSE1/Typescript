"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const studentController_1 = require("../controllers/studentController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.Students = router;
router.get('/', studentController_1.users);
router.post('/addStudent', studentController_1.adduser);
router.post('/updateStudent', studentController_1.updateuser);
router.delete('/deleteStudent', studentController_1.deleteuser);
router.get('/myProfile', studentController_1.myprofile);
