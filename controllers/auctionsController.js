const auctionsController = require('express').Router();

auctionsController.get('/browse', async (req, res) => {
    res.render('browse', {
        title: 'Auctions'
    });
});

module.exports = auctionsController;