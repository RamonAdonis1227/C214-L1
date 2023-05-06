const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@ramon.5m3ui73.mongodb.net/?retryWrites=true&w=majority`;
            

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarrosSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },    
    nome: String,
    Modelo: String,
    Marca: String,
    ano: String,
});

const CarrosModel = mongoose.model('CarrosModel', CarrosSchema);

module.exports = {
    CarrosModel,
};