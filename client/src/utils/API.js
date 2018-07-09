import axios from 'axios';

const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const apiKey = '?api-key=80cbe933901c4f958ba5f48e3fe8ffba';

export default {
    getTopicArticles: function(term, startYear, endYear ) {
        return axios.get(queryURL + apiKey + '&q' + term);
        // '&begin_date' + startYear + '0101' + '&end_date' + endYear + '0101');
    },
    getArticles: function() {
        return axios.get('/api/articles');
    },
    saveArticle: function() {
        return axios.post('/api/articles');
    }
};