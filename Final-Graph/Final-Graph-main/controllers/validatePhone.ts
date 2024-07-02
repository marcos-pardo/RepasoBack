const apiKey = "CbmwFqPFOskF4+mJRHqIUQ==pv7Sz9vc428fBkK7";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

export const validatePhone = async (telefono: string): Promise<{is_valid:boolean, country:string}> =>{
    const url = "https://api.api-ninjas.com/v1/validatephone?number="+telefono;
    const response = await fetch(url,options);
    
    if(response.status !== 200) throw new Error("No se puede validar el telefono");
    
    const data = await response.json();
    const datosTelf = {is_valid: data.is_valid, country: data.country};

    return datosTelf
};