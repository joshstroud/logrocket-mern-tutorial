const express = require('express');
const router = express.Router();

const Book = require('../../models/Book')

bodyParser = require('body-parser').json();

router.get('/test', (req, res) => res.send('book route testing'));

router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: 'No books founds.'}));
});

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: 'No book found.'}));
});

router.post('/', (req, res) => {
    console.log(req.body);
    
    Book.create(req.body)
        .then(book => res.json({ msg: 'Book successfully added.'}))
        .catch(err => res.status(400).json({ err, error: 'Unable to add book.'}));
});

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated successfully'}))
        .catch(err => res.status(400).json({ error: 'Unable to update successfully'}));
});

router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ msg: 'Book entry deleted.'}))
        .catch(err => res.status(404).json({ error: 'No such book.'}));
});

module.exports = router;