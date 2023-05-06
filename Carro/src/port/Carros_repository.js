const { CarrosModel } = require('../infrastructure/database');

const CarrosRepository = {
    async create(data) {
        try {
            const model = new CarrosModel(data);
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
                Marca: data.Marca,
                Modelo: data.Modelo,
            };
            const options = { new: true };
            const filter = { Marca: data.Marca };
            const result = await CarrosModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await CarrosModel.deleteOne({ Marca: data.Marca }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await CarrosModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByMarca(data) {
        try {
          const result = await CarrosModel.findOne({ Marca: data.Marca }).exec();
          return result;
        } catch (e) {
          return e;
        }
      },
};

module.exports = CarrosRepository;