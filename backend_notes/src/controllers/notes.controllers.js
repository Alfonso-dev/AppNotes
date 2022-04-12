const notesService = require('../services/notes.service');
const query_Notes = async (req, res) => {
    
    res.json({
        note:await notesService.queryNotes(),
    });
}
const save_Notes = async (req, res) => {
    console.log(req.body);
    res.json({
        note:await notesService.saveNotes(req.body),
    });
}

const delete_Notes = async (req, res) => {
    //console.log(req.body);
    res.json({
        note:await notesService.deleteNote(req.body),
    });
}

module.exports = {query_Notes, save_Notes, delete_Notes};