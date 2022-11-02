// import path and express Router
const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const cuid = require('cuid');

// GET request to /api/notes
router.get('/notes', (request, response) => {
    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        const { notes: notesArray } = JSON.parse(data);
        console.log(notesArray);
        response.json(notesArray);
    });

});

// POST request to /api/notes
router.post('/notes', (request, response) => {
    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        const { notes: notesArray } = JSON.parse(data);

        const { title, text } = request.body;
        // console.log(title, t ext);

        const someNewNote = {
            title,
            text,
            id: cuid()
        }

        notesArray.push(someNewNote);

        fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify({ notes: notesArray }), (err) => {
            if (err) throw err;
            response.json(someNewNote);
        });
    });


});

module.exports = router;