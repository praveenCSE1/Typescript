
import {signup,login} from '../controllers/registerController'
import express from 'express';
const router = express.Router();


router.post('/signup',signup);

router.post('/login',login)

export {router as register}
