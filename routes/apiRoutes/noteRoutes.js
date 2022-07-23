const router = require('express').Router();
const {createNote, deleteNote} = require('../../lib/notes');
const {db} = require('../../db/db.json');

router.get('/notes', (req, res) => {
    // console.log(db);
    res.json(db);
});

router.post('/notes', (req, res) => {
    // console.log(req.body);
    const note = createNote(req.body, db);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const id = deleteNote(req.params.id, db);
    res.send(id);
});

module.exports = router;