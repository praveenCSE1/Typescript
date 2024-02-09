import {adduser,deleteuser,updateuser,users,myprofile} from "../controllers/studentController"
import express from "express"

const router = express.Router();

router.get('/',users);

router.post('/addStudent',adduser);

router.post('/updateUser',updateuser)

router.delete('/deleteUser',deleteuser)

router.get('/myProfile',myprofile)

export {router as Students}