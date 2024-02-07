import express, { Request, Response } from 'express';

const router = express.Router();

interface  user{
  name:String
}

router.post('/data', (req:Request<user>, res: Response) => {

    const name1:String = req.body.name;  
    if (!name1) {
      res.status(400).send('Name is required');
    } else {
      res.send(`my name is ${name1}!`);
    }

});

export {router}
