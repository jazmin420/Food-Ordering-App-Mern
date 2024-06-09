import express from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";

//connection to db
mongoose.connect(process.env.CONNECTION_STRING).then(
  result=>{
      console.log("Mongodb Atlas connected");
  }
).catch(err=>{
  console.log("Connection failed!!!");
  console.log(err);
})


const app = express();
app.use(express.json());
app.use(cors())

app.get("/test", (req, res) => {
  res.json({message: "its a test!"})  
})

app.listen(3000, () => {
  console.log("server is running on port 3000")
})

app.get("/",(req,res)=>{
  res.status(200).send(`<h1 style="color:red">Project Fair Server Started and waiting for client request!!!</h1>`)
})