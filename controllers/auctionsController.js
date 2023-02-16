const auctionsController = require('express').Router();

const { hasUser } = require('../middlewares/guards');
const { getAll, publish } = require('../services/auctionsService');
const { parseError } = require('../util/parser');



auctionsController.get('/browse', async (req, res) => {
    try{
        const auctions = await getAll();
        console.log(auctions);
        res.render('browse', {
            title: 'Auctions',
            auctions
        });
    }catch(error){
        res.render('404', {
            errors: parseError(error)
        });
    }
});


auctionsController.get('/details/:id', async (req, res) => {

    res.render('details', {
        title: 'Auction Details'
    })
});


auctionsController.get('/publish', hasUser(), async (req, res) => {

    res.render('publish', {
        title: 'Create Auction',
    });

});

auctionsController.post('/publish', hasUser(), async (req, res) => {

    const auction = {
        title: req.body.title,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        description: req.body.description,
        author: req.user._id
    }
   
    try {
        await publish(req.user._id, auction);
        res.redirect('/auction/browse');

    } catch (error) {
        const errors = parseError(error);
        res.render('publish', {
            errors,   
        });
    }
});



module.exports = auctionsController;