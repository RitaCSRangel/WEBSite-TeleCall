const { expect } = require('@jest/globals');
const calculos = require('./falemais');

/*Calculo sem plano*/
test ("Testar se a função de cálculo sem plano está funcionando corretamente", () =>{
    expect(
        calculos.CalculoDePrecoSemPlano(10, 10)
    ).toBe(100)
});

/*Calculo com plano*/
test ("Testar se a função de cálculo sem plano está funcionando corretamente", () =>{
    expect(
        calculos.CalculoDePrecoComPlano(10, 10)
    ).toBe(110)
});