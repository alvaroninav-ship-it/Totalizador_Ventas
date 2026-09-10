import totalizador from "./totalizador";

describe("Totalizador", () => {
  it("deberia multiplicar dos numeros", () => {
    const totalizadorInstance = new totalizador(3, 2);
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 6");
  });
  it("deberia multiplicar dos numeros", () => {
    const totalizadorInstance = new totalizador(0, 5);
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 0");
  });
  it("deberia multiplicar dos numeros", () => {
    const totalizadorInstance = new totalizador(-3, -2);
    expect(totalizadorInstance.mostrarResultado()).toEqual("El precio no puede ser negativo. La cantidad no puede ser negativa.");
  });

});


