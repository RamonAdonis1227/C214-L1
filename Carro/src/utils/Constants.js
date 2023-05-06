const Constants = {
    ErrorValidation: {
        name: 'ValidationError',
        message: '',
        Marca: 'MarcaError',
        ano: 'AnoError',
        Modelo: 'ModeloError'
    },

    ErrorMongo: {
        name: 'MongoError',
        message: 'MongoDB Error',
    },

    ErrorNotFound: {
        name: 'NotFound',
        message: 'Not Found!',
    },

    ErrorDuplicate: {
        name: 'Duplicate',
        message: 'Duplicada',
    }
};

module.exports = Constants;