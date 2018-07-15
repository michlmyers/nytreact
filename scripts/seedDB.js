const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/nytreact',
    {
        useMongoClient: true
    }
);

const articleSeed = [
    {
        title: 'Test Article Title 1',
        date: '7/15/2018',
        url: 'www.testurl.com'
    },
    {
        title: 'Another Article Title',
        date: '7/7/2017',
        url: 'www.google.com'
    },
    {
        title: 'NYTimes Article 3',
        date: '1/1/2028',
        url: 'www.nytimes.com'
    }
];

db.Article
    .remove({})
    .then(() => db.Article.collection.insertMany(articleSeed))
    .then(data => {
        console.log(data.insertedIds.length + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });