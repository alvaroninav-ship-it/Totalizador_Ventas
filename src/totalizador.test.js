import totalizador from "./totalizador";

describe("Totalizador", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(totalizador(3, 2)).toEqual(6);
  });
});


