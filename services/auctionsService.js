const Auction = require('../models/Auction');


async function getAll() {
    return Auction.find({}).lean();
}

async function getById(id) {
    return Auction.findById(id).lean();
}


module.exports = {
    getAll,
    getById,
    

}