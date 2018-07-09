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
    saveArticle: function(articleData) {
        return axios.post('/api/articles', articleData);
    },
    deleteArticle: function(id) {
        return axios.delete('/api/articles' + id);
    }
};