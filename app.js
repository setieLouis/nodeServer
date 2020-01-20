const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./router/stuffRoutes');
const userRoutes = require('./router/userRoutes');
const header = require('./middleware/header')
const app = express();


// da cancellare
const pwd = 'Kczl8ahs';
// Mongo db connection
// ho creato il account sul sito di mongoi db
mongoose.connect('mongodb+srv://adjams:' + pwd +'@cluster0-nf9gi.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
     .then(() => console.log("connessione avenuta con sucesso"))
    .catch((error) => console.log('connessione fallita con il seguente coduce errore ' +  error) );



// generique Middleware for all our rest services
app.use(header.generiqueHeaderContent);
app.use(header.jsonBodyParser);

app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);
module.exports = app;