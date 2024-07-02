const apiKey = "CbmwFqPFOskF4+mJRHqIUQ==pv7Sz9vc428fBkK7";
const options = {
    method: "GET", 
    headers: {
        "X-Api-Key": apiKey,
    },
};

export const getCapital = async (country: string): Promise<string> =>{
    const url = "https://api.api-ninjas.com/v1/country?name="+country;
    const response = await fetch(url,options);

    if(response.status !== 200) throw new Error("No se reconoce el país");
    
    const data = await response.json();
    return data[0].capital; //CON ESTO ACCEDEMOS A LA PRIMERA POSICION DEL ARRAY QUE ES LA QUE NOS QUEREMOS TRAER
    
};