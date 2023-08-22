const contas = require("./contas");

test("Subtração de 5 - 2 esperando 3 como resultado", () => {
  expect(contas.subtracao(5, 2)).toBe(3);
});
