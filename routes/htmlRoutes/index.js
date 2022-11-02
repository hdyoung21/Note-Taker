// import path and express Router
const path = require('path');
const router = require('express').Router();

// create two endpoints to serve
// homepage and notes page

// homepage endpoint
router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../../public/index.html'))
});

// notes endpoint
router.get('/notes', (request, response) => {
    response.sendFile(path.join(__dirname, '../../public/notes.html'))
});

// notes endpoint
router.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../../public/index.html'))
});

module.exports = router;