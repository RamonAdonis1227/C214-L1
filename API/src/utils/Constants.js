const Constants = {
    ErrorValidation: {
        name: 'ValidationError',
        message: '',
        produtora: 'ProdutoraError',
        ano: 'AnoError',
        atores: 'AtoresError'
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