import { UsuarioModelType } from "../db/Usuario.ts";
import { ColeccionModel, ColeccionModelType } from "../db/Coleccion.ts";


//PARA HACER EL ENTREALZADO TIENE QUE COINCIDIR EL NOMBRE DEL TYPE DEL SCHEMA CON ESTE NOMBRE
export const Usuario = {
    //colecciones es de schema Usuario(mismo nombre)
    colecciones: async (parent: UsuarioModelType): Promise<ColeccionModelType[]> => {
        const c = await ColeccionModel.find({ _id: { $in: parent.colecciones } }).exec();
        return c;
    }
};