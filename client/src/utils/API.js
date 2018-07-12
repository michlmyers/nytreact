import axios from 'axios';

const apiKey = '?api-key=80cbe933901c4f958ba5f48e3fe8ffba';

export default {
    getTopicArticles: function(term, startYear, endYear) {
        console.log('hey we made it to this function')
        const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json' +
        apiKey + '&q=' + term + '&begin_date' + startYear + '0101&end_date' + endYear + '0101';
        console.log(queryURL);
        return axios.get(queryURL);
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