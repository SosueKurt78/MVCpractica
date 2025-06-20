import {Schema, model} from "mongoose";

const EsquemaPalabras = new Schema({
    name : String,
    age: Number
})

export const modelopalabras = new model("Palabras", EsquemaPalabras)

