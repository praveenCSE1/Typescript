
import {displayQuestions,add_mcq,storeResult,displayResult,displayCategories} from "../controllers/mcqController"

import express from 'express';
const router = express.Router();

router.get('/displayResult',displayResult)

router.post('/storeResult',storeResult)

router.get('/categories',displayCategories)

router.get('/:id',displayQuestions)



router.post('/',add_mcq);


export {router as mcq}
