import mongoose from "mongoose"
import { Contacto } from "../types.ts"
const Schema = mongoose.Schema;
const ContactoSchema = new Schema({

    nombre:{ type: String, requiered: true},
    apellido:{ type: String, requiered: true},
    numTelefono:{ type: String, requiered: true, unique: true},
    pais:{ type: String, requiered: true},
    capital:{ type: String, requiered: true},
    hora:{ type: String, requiered: true}
});


export type ContactoModelType = mongoose.Document & Omit<Contacto, "id"|"hora">;
export const ContactoModel = mongoose.model<ContactoModelType>("Contacto", ContactoSchema);