const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@ramon.5m3ui73.mongodb.net/?retryWrites=true&w=majority`;
            

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UsersSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },    
    nome: String,
    atores: String,
    produtora: String,
    ano: String,
});

const UsersModel = mongoose.model('UsersModel', UsersSchema);

module.exports = {
    UsersModel,
};