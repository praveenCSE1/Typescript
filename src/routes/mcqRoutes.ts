
import {displayQuestions,add_mcq,storeResult,displayResult} from "../controllers/mcqController"

import express from 'express';
const router = express.Router();

router.get('/displayResult',displayResult)

router.post('/storeResult',storeResult)

router.get('/',displayQuestions)

router.post('/',add_mcq);


export {router as mcq}
