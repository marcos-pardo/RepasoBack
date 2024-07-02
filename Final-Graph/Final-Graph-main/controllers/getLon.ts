const apiKey = "CbmwFqPFOskF4+mJRHqIUQ==pv7Sz9vc428fBkK7";
const options = {
    method: "GET", 
    headers: {
        "X-Api-Key": apiKey,
    },
};

export const getHorario = async (lon: number, lat: number): Promise<string> =>{
    const url = `https://api.api-ninjas.com/v1/worldtime?lat=+${lat}&lon=${lon}`;
    const response = await fetch(url,options);
    console.log(url)

    if(response.status !== 200) throw new Error("No se puede validar la hora");
    
    const data = await response.json();
    
    return data.datetime;
    
}