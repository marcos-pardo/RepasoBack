const apiKey = "CbmwFqPFOskF4+mJRHqIUQ==pv7Sz9vc428fBkK7";
const options = {
    method: "GET", 
    headers: {
        "X-Api-Key": apiKey,
    },
};

export const getCoordenadas = async (city: string): Promise<{lat: number, lon: number}> =>{
    const url = "https://api.api-ninjas.com/v1/city?name="+city;
    const response = await fetch(url,options);
    console.log(url)

    if(response.status !== 200) throw new Error("No se puede validar la hora");
    
    const data = await response.json();
    
    return {lat: data[0].latitude, lon: data[0].longitude};
    
}