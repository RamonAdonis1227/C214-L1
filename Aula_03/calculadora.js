const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {

    soma(valor1, valor2) {
        const validatevalor1 = validate({ valor1 },  CalculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatevalor1);
        const validatevalor2 = validate({ valor2 },  CalculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatevalor2);
        if(validatevalor1 !== undefined || validatevalor2 !== undefined){
            return 'Error';
        }
        var p = valor1 + valor2;
        return p;
    },

    subtracao(valor1, valor2) {
        const validatevalor1 = validate({ valor1 },  CalculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatevalor1);
        const validatevalor2 = validate({ valor2 },  CalculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatevalor2);
        if(validatevalor1 !== undefined || validatevalor2 !== undefined){
            return 'Error';
        }
        var p = valor1 - valor2;
        return p;
    },

    multiplicacao(valor1, valor2) {
        const validatevalor1 = validate({ valor1 },  CalculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatevalor1);
        const validatevalor2 = validate({ valor2 },  CalculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatevalor2);
        if(validatevalor1 !== undefined || validatevalor2 !== undefined){
            return 'Error';
        }
        var p = valor1 * valor2;
        return p;
    },

    divisao(valor1, valor2) {
        const validatevalor1 = validate({ valor1 },  CalculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatevalor1);
        const validatevalor2 = validate({ valor2 },  CalculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatevalor2);
        if(validatevalor1 !== undefined || validatevalor2 !== undefined){
            return 'Error';
        }
        var p = valor1 / valor2;
        return p;
    },

    potenciacao(valor1, valor2) {
        const validatevalor1 = validate({ valor1 },  CalculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatevalor1);
        const validatevalor2 = validate({ valor2 },  CalculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validatevalor2);
        if(validatevalor1 !== undefined || validatevalor2 !== undefined){
            return 'Error';
        }
        var p = valor1 ** valor2;
        return p;
    },

};

module.exports = Calculadora;