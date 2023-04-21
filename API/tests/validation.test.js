const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Caso válido', () => {
    const result = Validation.create({
        nome: "Ramon",
        email: "ramon.adonis@gec.inatel.br",
        senha: "123456789"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        email: "ramon.adonis@gec.inatel.br",
        senha: "123456789"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
