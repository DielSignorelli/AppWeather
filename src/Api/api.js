import dotenv from 'dotenv';

import previousDay from '../helpers/previousDay';

export const API_URL = 'https://api.openweathermap.org/data';

export const UNITS_LANG = 'units=metric&lang=pt_br';

dotenv.config();
export const API_KEY = process.env.REACT_APP_API_KEY;

export const YESTERDAY = previousDay();

export function WEATHER_GET(city) {
  return {
    url: `${API_URL}/2.5/weather?q=${city}&appid=${API_KEY}&${UNITS_LANG}`,
    options: {
      method: 'GET',
    },
  };
}

export function ONECALL_GET(lat, lon) {
  return {
    url: `${API_URL}/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&${UNITS_LANG}`,
    options: {
      method: 'GET',
    },
  };
}
