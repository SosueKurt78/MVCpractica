import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dontenv from "dotenv";
import { test } from "./backend/controllers/palabras.controller.js";

dontenv.config()
mongoose.connect(process.env.urlbd)
.then(() => {
    console.log("funciona la conexion a base de datos")
})
.catch ((error)=>{
    console.log("no jalo esta madre", error)
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("escuchando al sevidor")
})

test();
