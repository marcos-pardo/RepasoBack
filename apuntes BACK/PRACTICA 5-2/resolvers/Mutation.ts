import { GraphQLError } from "graphql";
import { Usuario } from "../db/Usuario.ts";
import { UsuarioModelType, UsuarioModel } from "../db/Usuario.ts";
import { ColeccionModelType, ColeccionModel } from "../db/Coleccion.ts";
import { ComicModelType, ComicModel } from "../db/Comic.ts";
import { Coleccion } from "../db/Coleccion.ts";
import { Comic } from "../db/Comic.ts";
import mongoose from "npm:mongoose@7.6.3";

const ObjectId = mongoose.Types.ObjectId

export const Mutation = {

    //USUARIO
    addUsuario: async(parent_: unknown, args : {name: string, email: string, coleccionIds: string[]}): Promise<UsuarioModelType> => {
        const { name, email, coleccionIds } = args;
        const usuario = new UsuarioModel({
            name,
            email,
            colecciones: coleccionIds.map((colecc) => new ObjectId(colecc) )
        });
        await usuario.save();
        return usuario;
    },

    deleteUsuario: async(parent_: unknown, args : {id: string}): Promise<UsuarioModelType> => {
        const { id } = args;
        const usuario = await UsuarioModel.findByIdAndDelete(id);
        if (!usuario) {
            throw new GraphQLError("User not found");
        }
        return usuario;
    },

    updateUsuario: async(parent_: unknown, args : {id: string, name: string, email: string, coleccionIds: string[]}): Promise<UsuarioModelType> => {
        const { id, name, email, coleccionIds } = args;
        const usuario = await UsuarioModel.findByIdAndUpdate(id, {
            name,
            email,
            colecciones: coleccionIds.map((comic) => new ObjectId(comic) )
        });
        if (!usuario) {
            throw new GraphQLError("User not found");
        }
        return usuario;
    },

    //COLECCION
    addColeccion: async(parent_: unknown, args : {nombre: string, comicIds: string[]}): Promise<ColeccionModelType> => {
        const { nombre, comicIds } = args;
        const coleccion = new ColeccionModel({
            nombre,
            comics: comicIds.map((comicos) => new ObjectId(comicos) )//IMPORTANTE, MAPEAMOS AL VENIR DE UN OBJETO
            //añadir el id de los comics???
        });
        await coleccion.save();
        return coleccion;
    },
    /*
        {  "name": "Paco",
        "email": "paco@gma.com",
        "coleccionIds": ["65780d4f11b4069bba983f37"]
        }
        */
    
        

    //COMIC
    addComic: async(parent_: unknown, args : {titulo: string, descripcion: string, formato: string}): Promise<ComicModelType> => {
        const { titulo, descripcion, formato } = args;
        const comic = new ComicModel({
            titulo,
            descripcion,
            formato
        });
        await comic.save();
        return comic;
    },
    
    deleteComic: async(parent_: unknown, args : {id: string}): Promise<ComicModelType> => {
        const { id } = args;
        const comic = await ComicModel.findByIdAndDelete(id);
        if (!comic) {
            throw new GraphQLError("Comic not found");
        }
        return comic;
    },

    updateComic: async(parent_: unknown, args : {id: string, titulo: string, descripcion: string, formato: string}): Promise<ComicModelType> => {
        const { id, titulo, descripcion, formato } = args;
        const comic = await ComicModel.findByIdAndUpdate(id, {
            titulo,
            descripcion,
            formato
        });
        if (!comic) {
            throw new GraphQLError("Comic not found");
        }
        return comic;
    },
}