const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    atores: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    produtora: {
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
    produtora: {
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
    atores: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    produtora: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    produtora: {
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