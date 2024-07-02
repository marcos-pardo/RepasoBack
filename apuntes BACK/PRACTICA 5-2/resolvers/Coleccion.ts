import { ColeccionModel, ColeccionModelType } from "../db/Coleccion.ts";
import { ComicModelType, ComicModel } from "../db/Comic.ts";


//PARA HACER EL ENTREALZADO TIENE QUE COINCIDIR NOMBRE DEL TYPE DEL SCHEMA CON ESTE NOMBRE
export const Coleccion = {
    //comics es de schema Coleccion(mismo nombre)
    comics: async (parent: ColeccionModelType): Promise<ComicModelType[]> => {
        const c = await ComicModel.find({ _id: { $in: parent.comics } }).exec();
        return c;
    },
  };
  