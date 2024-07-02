export const getTiempo = async (city: string) :Promise<string>=> {
    const API_URL = "http://api.weatherapi.com/v1/current.json?key=8cfc595a154145fb912201320230510&q=";
    const url = `${API_URL}${city}&aqi=no`
    const response = await fetch(url);
    if(response.status !== 200){
        throw new Error("City not found");
    }
    const data = await response.json();
    const temperatura = data.current.temp_c;
    return temperatura;



}