import express from "express";
import mongoose from "mongoose";

import { postContacts } from "./resolvers/postContacts.ts";
import { getContacto } from "./resolvers/getContactsDNI.ts";
import { AllContacts } from "./resolvers/getAllContacts.ts";
import { deleteContacts } from "./resolvers/deleteContact.ts";
import { updateContact } from "./resolvers/updateContact.ts";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("Debes especificar la variable de entorno MONGO_URL");
  Deno.exit(1);
}



try {
  await mongoose.connect(MONGO_URL);
  console.log("Conectado a la base de datos");
  const app = express();
app.use(express.json());
app
.post("/api/contactos", postContacts)
.get("/api/contactos/:dni", getContacto)
.get("/api/contactos", AllContacts)
.delete("/api/contactos/:dni", deleteContacts)
.put("/api/contactos/:dni", updateContact)


app.listen(3000, () => {
  console.log("Server listening on port 3000");
})
  

}
catch (error) {
  console.log(error);
}