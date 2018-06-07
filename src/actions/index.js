import axios from 'axios';

const API_KEY = '210b0c6728e6ae1bd4ac36f5ee37bc20';
const ROOT_URL =
    `http://samples.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},es`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}