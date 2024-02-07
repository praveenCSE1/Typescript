import express from "express"

import {router} from "./routes/data"

const app = express();
const PORT:Number = 3000;
app.use(express.json());



app.use('/',router)


// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, world!');
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});