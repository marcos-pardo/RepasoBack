import { GraphQLError } from "graphql";
import { UsuarioModelType, UsuarioModel } from "../db/Usuario.ts";
import { ColeccionModelType, ColeccionModel } from "../db/Coleccion.ts";
import { ComicModelType, ComicModel } from "../db/Comic.ts";

export const Query = {

    usuarioID: async (parent_: unknown, args: { id: string }): Promise<UsuarioModelType> => {
        try {
            const p = await UsuarioModel.findById(args.id);
            if (!p) {
            throw new GraphQLError("User not found");
            }
            return p;
        } catch (e) {
            throw new GraphQLError(e.message);
        }
    },

    usuariosTodos: async (parent_: unknown, args: any): Promise<UsuarioModelType[]> => {
        try {
            const p = await UsuarioModel.find();
            if (!p) {
            throw new GraphQLError("Users not found");
            }
            return p;
        } catch (e) {
            throw new GraphQLError(e.message);
        }
    },

    Coleccion: async (parent_: unknown, args: { id: string }): Promise<ColeccionModelType> => {
        try {
            const p = await ColeccionModel.findById(args.id);
            if (!p) {
            throw new GraphQLError("Collection not found");
            }
            return p;
        } catch (e) {
            throw new GraphQLError(e.message);
        }
    },

    comicId: async (parent_: unknown, args: { id: string }): Promise<ComicModelType> => {
        try {
            const p = await ComicModel.findById(args.id);
            if (!p) {
            throw new GraphQLError("Comic not found");
            }
            return p;
        } catch (e) {
            throw new GraphQLError(e.message);
        }
    },

    comicTodos: async (parent_: unknown, args: any): Promise<ComicModelType[]> => {
        try {
            const p = await ComicModel.find();
            if (!p) {
            throw new GraphQLError("Comics not found");
            }
            return p;
        } catch (e) {
            throw new GraphQLError(e.message);
        }
    }
};