import { ContactoModel, ContactoModelType } from "../db/Contacto.ts"
import { GraphQLError } from "graphql"
import { validatePhone } from "../controllers/validatePhone.ts"
import { getCapital } from "../controllers/getCapital.ts";
import { getTime } from "../controllers/getTime.ts";

export const Mutation = {

    addContact: async(_:unknown, args:{nombre: string, apellido: string, numTelefono: string}): Promise<ContactoModelType> =>{
        
        const { nombre, apellido, numTelefono } = args;

        const phoneDate = await validatePhone(numTelefono);
        const capital = await getCapital(phoneDate.country);
        //const time = await getTime(capital);

        if (phoneDate.is_valid) {
            const contacto = new ContactoModel({
                nombre,
                apellido,
                numTelefono,
                pais: phoneDate.country,
                capital,
            });
            await contacto.save()
            return contacto;
        }else throw new GraphQLError('El teléfono no es válido')
    },

    deleteContact: async(_:unknown, args:{id: string}): Promise<ContactoModelType> =>{
        
        try{
            const {id} = args;
            const contacto = await ContactoModel.findByIdAndDelete(id);

            if(!contacto) throw new GraphQLError("Contacto no encontrado");

            return contacto;

        }catch(e){
            throw new GraphQLError("Contacto no encontrado" || e.message);
        }
    },

    updateContact: async(_:unknown, args:{id: string, nombre: string, apellido: string, numTelefono: string }): Promise<ContactoModelType> =>{

        const {id, nombre, apellido, numTelefono} = args;

        const phoneDate = await validatePhone(numTelefono);
        const capital = await getCapital(phoneDate.country);
        //const time = await getTime(capital);

        const contacto = await ContactoModel.findByIdAndUpdate(id,{
            nombre,
            apellido,
            numTelefono,
            pais: phoneDate.country,
            capital,
        });

        if(!contacto) throw new GraphQLError("Contacto no encontrado");

        return contacto;
    }
};