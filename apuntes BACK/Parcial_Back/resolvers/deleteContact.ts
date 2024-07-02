import {Request,Response} from "express"
import {PersonModel} from "../db/Person.ts"



export const deleteContacts=async(
    req:Request<{id:string}>,{},
    res:Response<string|{error:unknown}>)=>{
    const dni=req.params.dni;

    if(!dni){
        return res.status(500).send("Faltan datos")
    }
    if(typeof dni !== "string"){
        return res.status(500).send("Los datos no son del tipo correcto")
    }
    try{
        const contactDelete = await PersonModel.findOneAndDelete({dni});
        if(!contactDelete){
            return res.status(400).send("No existe un contacto con ese dni")
        }
        res.status(200).send("Contacto eliminado correctamente")
    }catch(error){
        res.status(500).send(error.message)
    }
    }