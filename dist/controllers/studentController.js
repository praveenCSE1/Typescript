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
exports.myprofile = exports.users = exports.updateuser = exports.deleteuser = exports.adduser = void 0;
const studentModel_1 = require("../models/studentModel");
const adduser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = new studentModel_1.studentDetails({
            userId: 'kdlafjnvvdd',
            name: req.body.name,
            department: req.body.department,
            phn: req.body.mobileNumber,
            dob: req.body.dateOfBirth
        });
        const savedUser = yield newUser.save();
        console.log(savedUser);
        res.status(200).json({ message: 'Profile Added' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while adding the user' });
    }
});
exports.adduser = adduser;
const updateuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log(req.user.userId)
        let current = yield studentModel_1.studentDetails.findOneAndUpdate({ name: req.body.name }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                department: req.body.department,
                phn: req.body.phn,
                dob: req.body.dateOfBirth,
            },
        }, { new: true });
        if (!current) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User updated successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while updating the user' });
    }
});
exports.updateuser = updateuser;
const deleteuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteUser = yield studentModel_1.studentDetails.findById(req.body._id);
        console.log(deleteUser);
        if (!deleteUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        yield deleteUser.deleteOne();
        res.json({ message: 'User deleted successfully', user: deleteUser });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while deleting the user' });
    }
});
exports.deleteuser = deleteuser;
const users = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const all = yield studentModel_1.studentDetails.find({});
        res.json(all);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal error' });
    }
});
exports.users = users;
const myprofile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield studentModel_1.studentDetails.find({});
        res.json(profile);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Profile Not found' });
    }
});
exports.myprofile = myprofile;
