import totalizador from "./totalizador";

describe("Totalizador", () => {
  it("deberia multiplicar dos numeros", () => {
    const totalizadorInstance = new totalizador(3, 2);
    expect(totalizadorInstance.calcularTotal()).toEqual(6);
  });
  it("deberia multiplicar dos numeros", () => {
    const totalizadorInstance = new totalizador(0, -20);
    expect(totalizadorInstance.calcularTotal()).toEqual(0);
  });

});


