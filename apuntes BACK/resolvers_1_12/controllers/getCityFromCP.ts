export const getCityFromCP = async (cp: string,iso :string) :Promise<string>=> {
    const API_URL = "https://zip-api.eu/api/v1";
    const url = `${API_URL}/info/${iso}-${cp}`
    const response = await fetch(url);
    if(response.status !== 200){
        throw new Error("CP not found");
    }
    const data = await response.json();
    const city = data.place_name;
    return city;
}

