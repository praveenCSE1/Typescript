import {adduser,deleteuser,updateuser,users,myprofile} from "../controllers/studentController"
import express from "express"

const router = express.Router();

router.get('/',users);

router.post('/addStudent',adduser);

router.post('/updateStudent',updateuser)

router.delete('/deleteStudent',deleteuser)

router.get('/myProfile',myprofile)

export {router as Students}