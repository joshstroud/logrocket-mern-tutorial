const express = require('express');
const connectDB = require('./config/db')
const books = require('./routes/api/books')
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());



connectDB();

app.get('/', (req, res) => res.send('Hello, world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use('/api/books', books);