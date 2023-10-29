const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const getAllQuotes = async(req, res) =>{
    try {
        const quotes = await prisma.quote.findMany({
            include:{
                aurthor:true
            }
        })
        res.status(200)       
           .json(quotes);
        
    } catch (error) {
        
    }
}

const getQuoteById = async (req, res) => {
    try {
        const quote = await prisma.quote.findUnique({
            where:{
                id:Number(req.params.id)
            }
        })

        if(!quote) {
           return res.status(404).json({message:`Quote with Id ${req.params.id} not found.`})
        }
         return res.status(200).json(quote)

    } catch (error) {
        res.status(404)
           .json({message:`Quote with Id ${req.params.id} not found.`})
        
    }
}

const createQuote = async (req, res) => {
    try {
        const new_quote = await prisma.quote.create({

            data: req.body
            
    })
    return res.status(200).json(new_quote)
    } catch (error) {
        
    }
   
}

const updateQuote = async (req, res) => {
    const id = parseInt(req.params.id)
    const qouteExists = await prisma.quote.findUnique({
        where:{
            id
        }
    })

    if(qouteExists){
        const updatedQuote = await prisma.quote.update({
            where:{
                id
            },
            data: req.body
        })
       return res.json(updatedQuote)
    }

    return res.json({message:`Record with id ${id} not found`})
}

const deleteQuote = async (req, res) => {
    const id = parseInt(req.params.id)
    const qouteExists = await prisma.quote.findUnique({
        where:{
            id
        }
    })

    if(qouteExists){
        const deletedQuote = await prisma.quote.delete({
            where:{
                id
            }
        })
       return res.json({message:`Record successfully deleted`})
    }

    return res.json({message:`Record with id ${id} not found`})
}
module.exports = {getAllQuotes, getQuoteById, createQuote, deleteQuote, updateQuote};