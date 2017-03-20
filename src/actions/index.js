import axios from 'axios';

export const API_KEY='f09459a99fe1e9f714de742518596ee8';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url =`${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}