const express =  require('express');
const app = express();
const  quoteRoute = require('./routes/quotes')

const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Define all your routes here.
app.use('/quotes', quoteRoute);


app.listen(PORT, ()=> {
    console.log(`The server is running at port http://localhost:${PORT}`)
});