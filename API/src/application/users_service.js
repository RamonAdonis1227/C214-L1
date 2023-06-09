const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/Constants');
const UsersRepository = require('../port/users_repository');
const Constraints = require('../utils/users_validation');
const Validation = require('../utils/validation');

const Users = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await UsersRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const validation = validate.validate(data, Constraints.update);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await UsersRepository.update(data);

            if (response === []) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {
            const validation = validate.validate(data, Constraints.deleteBy);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await UsersRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByProdutora(data) {
        try {
            const validation = validate.validate(data, Constraints.get);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await UsersRepository.getByProdutora(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await UsersRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Users;