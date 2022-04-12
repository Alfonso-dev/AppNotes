const { Schema, model } = require('mongoose');
const notesSchema = new Schema({
    title:String,
    start:String,
    end:String,
    content:String
});

module.exports = model('Note',notesSchema);