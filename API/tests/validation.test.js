const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Caso válido', () => {
    const result = Validation.create({
        nome: "Interestelar",
        atores: "Matthew McConaughey, Jessica Chastain, Anne Hathaway",
        produtora: "Paramount",
        ano: "2014"
        
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        atores: "Matthew McConaughey, Jessica Chastain, Anne Hathaway",
        produtora: "Paramount",
        ano: "2014"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);    
});

test('Caso inválido - Nome Invalido', () => {
    const result = Validation.create({
        nome: 1234,
        atores: "Matthew McConaughey, Jessica Chastain, Anne Hathaway",
        produtora: "Paramount",
        ano: "2014"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);    
});

test('Caso inválido - Retirando Produtora', () => {
    const result = Validation.create({
        nome: "Interstellar",
        atores: "Matthew McConaughey, Jessica Chastain, Anne Hathaway",        
        ano: "2014"
    });
    expect(result.produtora).toEqual(Constants.ErrorValidation.produtora);  
});

test('Caso inválido - Retirando Atores', () => {
    const result = Validation.create({
        nome: "Interstellar", 
        produtora: "Paramount",              
        ano: "2014"
    });
    expect(result.atores).toEqual(Constants.ErrorValidation.atores);  
});

test('Caso inválido - Retirando Ano', () => {
    const result = Validation.create({
        nome: "Interstellar", 
        atores: "Matthew McConaughey, Jessica Chastain, Anne Hathaway",
        produtora: "Paramount",              
        
    });
    expect(result.ano).toEqual(Constants.ErrorValidation.ano);  
});
