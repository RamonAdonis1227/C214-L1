const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    Marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    Marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};