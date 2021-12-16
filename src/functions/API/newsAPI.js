import axios from "axios";
import {config} from "../../config";

export const getPopularNews = () => {
    return axios.get(`https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=${config.NEWS_API}`);
};
