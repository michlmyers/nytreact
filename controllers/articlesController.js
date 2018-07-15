const path = require('path');
const router = require('express').Router();
const db = require('../models');

const articleFunctions = {
    findAll: function (req, res) {
        console.log("here")
        db.Article
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Article
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Article
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}

router.get('/api/articles', articleFunctions.findAll)

router.post('/api/articles', articleFunctions.create)

router.delete('/api/articles/:id', articleFunctions.remove)

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;