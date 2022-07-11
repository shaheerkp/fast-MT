import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import fs from 'fs'

import cookieParser from "cookie-parser";


const app = express();

app.use(cookieParser())

app.use(cors());
app.use(express.json())

mongoose
  .connect("mongodb://localhost:27017/crm")
  .then(() => {
    console.log("Data base connected succesfully");
  })
  .catch((err) => {
    console.log("ERRRR", err);
  });


//   app.get("/test",(req,res)=>{
//     res.send("helloo")
//   })

fs.readdirSync("./routes").map(r=>{
    app.use(`/api`,require(`./routes/${r}`))
})

app.listen(8001, () => {
  console.log("runnig on port 8001");
});
