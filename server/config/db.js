const mongoose = require('mongoose')

const db = 'mongodb+srv://meuapp:meuapp@cluster0.qrfjn.mongodb.net/properties?retryWrites=true&w=majority';

const connection = mongoose.connect(db, {
    useNewUrlParser: true
})

module.exports = connection