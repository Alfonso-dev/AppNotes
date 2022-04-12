const notesModel = require('../models/notes.model');

class NotesServices{

    NotesServices(){}

    async queryNotes(){
        try {
            return await notesModel.find();
        } catch (error) {
            console.log('An ocurred has error in function get notes: '+error);
        }
    }

    async saveNotes(notes = new notesModel()){
        try {
            var notesSave;
            await notesModel.create(notes).then((value) => {
                notesSave = value;
            });
            return notesSave;
        } catch (error) {
            console.log('An ocurried has error in function save notes: ' + error);
        }
    }

    async deleteNote(data = new notesModel()){
        try {
            var noteDelete = await notesModel.deleteOne({
                title:data,
            });
            console.log(noteDelete);
        } catch (error) {
            console.log('An ocurred has error in delete note function: ' + error);
        }
    }
}

module.exports = new NotesServices();