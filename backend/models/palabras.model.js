import {Schema, model} from "mongoose"

const EsquemaPalabras = new Schema({
    palabras : String
})

export const modelopalabras = new model("Palabras", EsquemaPalabras)

