const auctionsController = require('express').Router();
const { getAll } = require('../services/auctionsService');

auctionsController.get('/browse', async (req, res) => {
    const auctions = await getAll();
    res.render('browse', {
        title: 'Auctions',
        auctions
    });
});


auctionsController.get('/create', async (req, res) => {
    
    res.render('create', {
        title: 'Create Auction',       
    });

});




module.exports = auctionsController;