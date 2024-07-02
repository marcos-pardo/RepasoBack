import mongoose from "npm:mongoose@7.6.3";
import { Comic } from "../types.ts";

const Schema = mongoose.Schema;

const ComicSchema = new mongoose.Schema({

    titulo: { type: String, requiered: true },
    descripcion: { type: String, requiered: true },
    formato: { type: String, requiered: true }
});

export type ComicModelType = Document & Omit<Comic, "id">;
export const ComicModel = mongoose.model<ComicModelType>("comic", ComicSchema);