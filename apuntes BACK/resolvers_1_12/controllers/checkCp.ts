export const checkCP = async (cp: string) :Promise<boolean>=> {
    const API_URL = "https://zip-api.eu/api/v1";
    const url = `${API_URL}/info/ES-${cp}`
    console.log(url)
    const response = await fetch(url);
    if(response.status === 200){
        return true;
    }
    return false;
}
