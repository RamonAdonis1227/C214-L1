const Carros = require('../src/application/Carros_service');
const Constants = require('../src/utils/Constants');
const Utils = require('../src/utils/utils');
const CarrosRepository = require('../src/port/Carros_repository');

jest.mock('../src/port/Carros_repository');

test('CREATE - Dado válido', async () => {
    const data = {
        nome: "Porsche Panamera",
        Modelo: "Panamera",
        Marca: "Porsche",
        ano: "2023"
    }

    const id = Utils.generateUuid();

    CarrosRepository.create.mockResolvedValue({ ...data, id });

    const result = await Carros.create(data);
    expect(result).toEqual({ ...data, id });
})

test('CREATE - Dado duplicado', async () => {
    const data = {
        nome: "Porsche Panamera",
        Modelo: "Panamera",
        Marca: "Porsche",
        ano: "2023"
    }

    const id = Utils.generateUuid();

    CarrosRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Carros.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})
