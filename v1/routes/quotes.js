const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/studentsController');

const quotes = require('../../quotes_db')


//Get all Quotes.
router.get('/', quotesController.getAllQuotes);

//get a Quotes by id
router.get("/:id",quotesController.getQuoteById )

 
//POST => add a Quote
router.post('/', quotesController.postQuote)

// PUT => update a Quote
router.put('/:id', quotesController.updateQuote)


//DELETE => delete a Quote.
router.delete('/:id', quotesController.deleteQuote)


module.exports = router;