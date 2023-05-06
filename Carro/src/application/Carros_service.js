const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/Constants');
const CarrosRepository = require('../port/Carros_repository');
const Constraints = require('../utils/Carros_validation');
const Validation = require('../utils/validation');

const Carros = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await CarrosRepository.create(data);

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

            const response = await CarrosRepository.update(data);

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

            const response = await CarrosRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByMarca(data) {
        try {
            const validation = validate.validate(data, Constraints.get);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await CarrosRepository.getByMarca(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await CarrosRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Carros;