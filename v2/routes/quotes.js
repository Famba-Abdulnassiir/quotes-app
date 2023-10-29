const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotesController');


router.get('/', quotesController.getAllQuotes);
router.get('/:id', quotesController.getQuoteById);
router.post('/', quotesController.createQuote);
router.patch('/:id', quotesController.updateQuote);
router.delete('/:id', quotesController.deleteQuote);


module.exports = router