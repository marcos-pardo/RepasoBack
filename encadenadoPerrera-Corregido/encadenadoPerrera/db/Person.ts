import moongoose from "mongoose";
import { Person } from "../types.ts";

const  Schema = moongoose.Schema
const PersonSchema = new Schema ({
    name:{type:String, required:true, unique:true},
    age:{type:Number, required:true},
})

export type PersonModelType = moongoose.Document & Omit<Person,"id"|"pets">
export const PersonModel = moongoose.model <PersonModelType>("Person",PersonSchema)