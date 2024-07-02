import { PetModel, PetModelType } from "../db/Pet.ts";
import { PersonModel, PersonModelType } from "../db/Person.ts";

export const Person = {
    pets: async (parent:PersonModelType):Promise<PetModelType[]> => {
        const pets = await PetModel.find({owner:parent._id}).exec()
        return pets
    }
}