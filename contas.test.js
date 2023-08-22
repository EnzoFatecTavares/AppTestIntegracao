const contas = require('./contas');

test("Adição 2 + 5 esperando 7 como resultado", ()=> {
    expect(contas.multiplicacao(2,5)).toBe(7)
    
})

test("Multiplicação 2 * 5 esperando 10 como resultado", ()=> {
    expect(contas.multiplicacao(2,5)).toBe(10)
    
})

test("Divisão 5 / 2 esperando 2.5 como resultado", ()=> {
    expect(contas.multiplicacao(5,2)).toBe(2.5)
    
})

test("Subtração 5 - 2 esperando 3 como resultado", ()=> {
    expect(contas.multiplicacao(5,2)).toBe(3)
    
})