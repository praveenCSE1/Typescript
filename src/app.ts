import express from "express"
import {register} from "./routes/registerRoute"
import cors from "cors"
import {mcq} from "./routes/mcqRoute"
const app = express();
const PORT:Number = 3000;


app.use(express.json());
//for cross platform acess.
app.use(cors({
  origin : '*'
}))

app.use('/mcq',mcq)
app.use('/',register)



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});