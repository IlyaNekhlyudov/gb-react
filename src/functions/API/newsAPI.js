import axios from "axios";

const API_KEY = 'xkQ7Of6lyG7DpW9P2WRQ7xwe1l9H12KW';

export const getPopularNews = () => {
    return axios.get(`https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=${API_KEY}`);
};