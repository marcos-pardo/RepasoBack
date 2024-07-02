import moongoose from "mongoose";
import { Pet } from "../types.ts";

const  Schema = moongoose.Schema
const PetSchema = new Schema ({
    name:{type:String, required:true, unique:true},
    breed:{type:String, required:true},
    owner:{type:Schema.Types.ObjectId, required:true, ref:"Person"}
})

export type PetModelType = moongoose.Document & Omit<Pet,"id"|"owner"> &{owner:moongoose.Types.ObjectId}
export const PetModel = moongoose.model <PetModelType>("Pet",PetSchema)