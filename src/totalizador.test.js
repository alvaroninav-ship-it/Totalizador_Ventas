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
  it("deberia haber impuesto por estado", () => {
    const totalizadorInstance = new totalizador(5, 5,"UT");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 26.6625");
  });
  it("deberia haber impuesto por estado", () => {
    const totalizadorInstance = new totalizador(5, 5,"NV");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 27");
  });
  it("deberia haber impuesto por estado", () => {
    const totalizadorInstance = new totalizador(5, 5,"TX");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 26.5625");
  });
  it("deberia haber impuesto por estado", () => {
    const totalizadorInstance = new totalizador(5, 5,"AL");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 26");
  });
  



});


