const { UsersModel } = require('../infrastructure/database');

const UsersRepository = {
    async create(data) {
        try {
            const model = new UsersModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nome: data.nome,
                ano: data.ano,
                produtora: data.produtora,
                atores: data.atores,
            };
            const options = { new: true };
            const filter = { email: data.email };
            const result = await UsersModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await UsersModel.deleteOne({ produtora: data.produtora }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await UsersModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByProdutora(data) {
        try {
          const result = await UsersModel.findOne({ produtora: data.produtora }).exec();
          return result;
        } catch (e) {
          return e;
        }
      },
};

module.exports = UsersRepository;