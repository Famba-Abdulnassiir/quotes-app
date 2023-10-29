const express =  require('express');
const app = express();
const  quoteRoute = require('./v1/routes/quotes')
const quoteRoute2 = require('./v2/routes/quotes')

const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Define all your routes here.
app.use('/api/v1/quotes', quoteRoute);
app.use('/api/v2/quotes', quoteRoute2)

app.use("*",(req,res) => {
    return res.status(404)
              .json({Message:"End point doesnot exist"})
})


app.listen(PORT, ()=> {
    console.log(`The server is running at port http://localhost:${PORT}`)
});