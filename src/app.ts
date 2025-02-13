import express, { Application } from "express"
import cors from "cors";
import router from "./app/router/router";
const app : Application = express()
const port = 5000

app.use(express.json());
app.use(cors({origin : ["http://localhost:3000"]}))
app.use("/api", router)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app