import { ContactoResponse, Contacto } from "../types.ts"
import { ContactoModel, ContactoModelType } from "../db/Contacto.ts"
import { validatePhone } from "../controllers/validatePhone.ts";
import { GraphQLError } from "graphql"
import { getCapital } from "../controllers/getCapital.ts"
import { getTime } from "../controllers/getTime.ts"

export const Query = {

    getContact: async (_: unknown, args: { id: string }): Promise<Contacto> => {

        try {

            const per = await ContactoModel.findById(args.id);
            
            if (!per) throw new GraphQLError("Contacto no encontrado")
            
            const phoneData = await validatePhone(per.numTelefono)
            const capital = await getCapital(phoneData.country)
            //const time = await getTime(capital)

            //...per es lo mismo que las tres líneas de abaj
            return {
                id: per._id,
                nombre: per.nombre,
                apellido: per.apellido,
                numTelefono: per.numTelefono,
                pais: phoneData.country,
                capital,
            };

        } catch (e) {
            throw new GraphQLError(e.message)
        }
    },


    getContacts: async (_: unknown, args_: any): Promise<ContactoResponse[]> => {

        try {
            const p = await ContactoModel.find();

            if (!p) throw new GraphQLError("No se ha encontrado ningun contacto")

            return Promise.all(p.map(async (per) => {
                const phoneData = await validatePhone(per.numTelefono)
                const capital = await getCapital(phoneData.country)
                //const time = await getTime(capital)
                return {
                    //...per es lo mismo que las tres líneas de abajo                    
                    id: per._id,
                    nombre: per.nombre,
                    apellido: per.apellido,
                    numTelefono: per.numTelefono,
                    pais: phoneData.country,
                    capital
                    //time
                };
            }))

        } catch (e) {
            throw new GraphQLError(e.message)
        }
    },
};