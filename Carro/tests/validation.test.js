const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Caso válido', () => {
    const result = Validation.create({
        nome: "Porsche Panamera",
        Modelo: "Panamera",
        Marca: "Porsche",
        ano: "2023"
        
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        Modelo: "Panamera",
        Marca: "Porsche",
        ano: "2023"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);    
});

test('Caso inválido - Nome Invalido', () => {
    const result = Validation.create({
        nome: 1234,
        Modelo: "Panamera",
        Marca: "Porsche",
        ano: "2023"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);    
});

test('Caso inválido - Retirando Marca', () => {
    const result = Validation.create({
        nome: "Porsche Panamera",
        Modelo: "Panamera",
        ano: "2023"
    });
    expect(result.produtora).toEqual(Constants.ErrorValidation.produtora);  
});

test('Caso inválido - Retirando Modelo', () => {
    const result = Validation.create({
        nome: "Porsche Panamera",
        Marca: "Porsche",
        ano: "2023"
    });
    expect(result.atores).toEqual(Constants.ErrorValidation.atores);  
});

test('Caso inválido - Retirando Ano', () => {
    const result = Validation.create({
        nome: "Porsche Panamera",
        Modelo: "Panamera",
        Marca: "Porsche"           
        
    });
    expect(result.ano).toEqual(Constants.ErrorValidation.ano);  
});
