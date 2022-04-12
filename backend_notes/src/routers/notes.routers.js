const { Router } = require('express');
const { query_Notes, save_Notes, delete_Notes } = require('../controllers/notes.controllers');
const router = Router();

router.get('/api/notes/getNotes',query_Notes);
router.post('/api/notes/saveNotes',save_Notes);
router.delete('/api/notes/deleteNotes', delete_Notes);

module.exports = router;