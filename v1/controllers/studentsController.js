const quotes = require('../../quotes_db');

const getAllQuotes = (req, res) =>
{  
    res.json(quotes);    
    
}

const getQuoteById = (req, res) => {
    const quoteAvailable = quotes.some(quote => quote.id === parseInt(req.params.id))
    const id = parseInt(req.params.id);

    if(quoteAvailable){
        res.json(quotes.filter(quote => quote.id === id))
        .status(200)
    }else{
        res
        .status(400)
        .json({message: `The Quote id ${id} you provided does not exist.`})
    }
}

const postQuote = (req, res) =>{
    const newQuote = {
     id: quotes.length + 1,
     quote: req.body.quote,
     author: req.body.author
    } 
 
    quotes.push(newQuote);
 
    res.json(newQuote);
 }
 
const updateQuote =  (req, res) => {
    const id = parseInt(req.params.id);

    const replacementQuote = {
            quote: req.body.quote,
            author: req.body.author
    };      
      
    const searchIndex = quotes.some((quote) => quote.id === id);
      
        if(searchIndex){
            quotes[searchIndex] = replacementQuote;
       
            res
            .status(201)
            .json({Message:`Record successfully Updated`})
           
        } else{
            res
            .status(400)
            .json({Message:`No record found in ${id}`})
            
        }
        
    
    };

    const deleteQuote = (req, res) => {
        const id = parseInt(req.params.id);
    
        const findQuoteIndex = quotes.findIndex(quote => quote.id === id)
    
        if(findQuoteIndex > -1) {
            quotes.splice(findQuoteIndex, 1)
            res
            .status(200)
            .json({message:'Quote successfully deleted'})
        }else {
            res
            .status(404)
            .json({message:`Quote with ${id} not found, please enter the right id`})
        }
    };
 
module.exports = { getAllQuotes, getQuoteById, postQuote, updateQuote, deleteQuote}