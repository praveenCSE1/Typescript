import express from "express"
import {register} from "./routes/registerRoutes"
import cors from "cors"
import {mcq} from "./routes/mcqRoutes"
import {Students} from "./routes/studentRoutes"
import {verifyToken} from "./controllers/jwtController"
const app = express();
const PORT:Number = 3000;

app.use(express.json());
//for cross platform acess.
app.use(cors({
  origin : '*'
}))

app.use('/students',verifyToken,Students)
app.use('/mcq',verifyToken,mcq)
app.use('/',register)



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});