import mongoose, {Document} from 'mongoose';
import { checkCP} from '../controllers/checkCp.ts';
import { getCityFromCP } from '../controllers/getCityFromCP.ts';
import { Person } from "../types.ts"; 

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: { type: String, required: true },
    cp: { type: String, required: true },
    city: { type: String, required: false },
    iso: { type: String, required: true },
    localTime: { type: String, required: false },
    tiempo: { type: String, required: false },

});

/*PersonSchema.path('cp').validate(async (cp) => {//el path es el campo que queremos validar
    console.log("estoy ejecutando el validate");
    try {
    return await checkCP(cp);
    }
    catch (error) {
        return false;
    }
});
*/

PersonSchema.pre('save', async function(next){//antes de guardar, ejecuta esto y esta funcion la llamamos en el mutation
    console.log("Estoy ejecutando el pre save");
    if(!this.isModified('cp')){//si no se ha modificado el cp,
        return next();
    }
    if(!this.iso){
        return next();
    }
    if(this.city){//si ya tenemos la ciudad, no hace falta hacer la llamada a la api
       return next();
    } 

    const cp = this.cp;
    const iso = this.iso;   
    const city=await getCityFromCP(cp,iso);
    this.city=city;
  
    next();
});

export type PersonModelType=Document&Omit<Person,"id">;
export const PersonModel = mongoose.model<PersonModelType>("Person", PersonSchema);



