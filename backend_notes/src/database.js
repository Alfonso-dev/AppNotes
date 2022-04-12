const mongoose = require('mongoose');
const db_connection = async () => {
    try {
        console.log('Connecting to DB.....');
        await mongoose.connect('mongodb://0.0.0.0/NotesDatabse',{
            
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Connected......')
    } catch (error) {
        console.log('An error has ocurred: '+error);
    }
}

module.exports = {
    db_connection
}