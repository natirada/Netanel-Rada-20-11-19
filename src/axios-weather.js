import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/'
});

export default instance;