import express,{Request,Response} from "express"
import multer from "multer"
import path from "path"


const router = express.Router()

//configuration for multer storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {

    //upload file in uploads folder in local memory
    cb(null, 'src/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

var upload = multer({ storage: storage }); 

//used middleware to store the sing file in /uploads endpoint
 router.post('/', upload.single('file'), function (req:Request, res:Response) {

      
    console.log(req.file?.filename)
  
  res.send('File uploaded successfully!');

});

export {router as upload};
