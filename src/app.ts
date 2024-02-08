import express from "express"

import {router} from "./routes/data"
import cors from "cors"

const app = express();
const PORT:Number = 3000;
app.use(express.json());

//for cross platform acess.
app.use(cors({
  origin : '*'
}))

app.use('/',router)



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});