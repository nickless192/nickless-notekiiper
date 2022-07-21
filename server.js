const express = require('express');
const path = require('path');
const {db} = require('./db/db.json');

const app = express();

const PORT = process.env.PORT || 3001;

// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});