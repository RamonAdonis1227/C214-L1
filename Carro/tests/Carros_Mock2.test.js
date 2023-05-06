const { CarrosModel } = require('../src/infrastructure/database');
const Carros = require('../src/port/Carros_repository');

describe('create', () => {
    it('Valid Carros', async () => {
        CarrosModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                nome: "Porsche Panamera",
                Modelo: "Panamera",
                Marca: "Porsche",
                ano: "2023",
            }),        
        }));

        expect(await Carros.create({
            id: 1,
            nome: "Porsche Panamera",
            Modelo: "Panamera",
            Marca: "Porsche",
            ano: "2023"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nome: expect.any(String),
                Modelo: expect.any(String),
                Marca: expect.any(String),
                ano: expect.any(String),
            }),
        );
    });
});