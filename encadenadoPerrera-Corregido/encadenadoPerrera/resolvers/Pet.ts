import { GraphQLError } from "graphql";
import { PetModel, PetModelType } from "../db/Pet.ts";
import { PersonModel, PersonModelType } from "../db/Person.ts";

/*const Pet = {
    owner: async (parent:PersonModelType):Promise<PetModelType[]> => {
        const pets = await PetModel.find({owner:parent._id}).exec()
        return pets
    }
}*/

const Pet = {
    owner: async (parent: PetModelType): Promise<PersonModelType> => {
      const person = await PersonModel.findById(parent.owner).exec();
      if (!person) throw new GraphQLError(`No person found with id ${parent.owner}`);
      return person;
    },
  };

export default Pet;