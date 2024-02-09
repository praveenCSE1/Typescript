"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function generateToken(userId, userRole) {
    const payload = { userId, role: userRole };
    const token = jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY, { expiresIn: '45m' });
    return token;
}
exports.generateToken = generateToken;
function verifyToken(req, res, next) {
    const tok = req.headers['authorization'];
    const token = tok === null || tok === void 0 ? void 0 : tok.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, { algorithms: ['HS256'] }, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    });
}
exports.verifyToken = verifyToken;
function isAdmin(req, res, next) {
    var _a;
    if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'ADMIN') {
        return res.status(401).json({ message: 'Requires Admin access for this page' });
    }
    next();
}
exports.isAdmin = isAdmin;
