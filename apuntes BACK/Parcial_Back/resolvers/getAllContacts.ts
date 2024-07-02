import {Request,Response} from "express"
import {PersonModel} from "../db/Person.ts"
import {Person} from "../types.ts"

export const AllContacts=async(
    req:Request,
    res:Response<Person[]|{error:unknown}>)=>{ 
    try {
        const allcontactos=await PersonModel.find().exec();
        if(!allcontactos){
            return res.status(400).send("No hay contactos")
        }
        res.status(200).send({
            contacto: allcontactos.map((contactos)=>({
            dni: contactos.dni,
            nombre: contactos.name,
        })),
    });       
    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
}