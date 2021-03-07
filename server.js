const fs = require('fs');
const path = require('path');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express()
//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

//parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//parse data fromt the public filedirectory
app.use(express.static('public'));

const { animals } = require('./data/animals');
const PORT = process.env.PORT || 3001;



app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`);
});