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
  it("deberia haber impuesto por estado", () => {
    const totalizadorInstance = new totalizador(5, 5,"CA");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 27.0625");
  });
  it("Aplicar descuento si llega a mil", () => {
    const totalizadorInstance = new totalizador(200, 5,"CA");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 1052.5");
  });
  it("Aplicar descuento si llega a tres mil", () => {
    const totalizadorInstance = new totalizador(700, 5,"CA");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 3613.75");
  });
  it("Aplicar descuento si llega a tres mil", () => {
    const totalizadorInstance = new totalizador(2000, 4,"CA");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 8100");
  });
  it("Aplicar descuento si llega a tres mil", () => {
    const totalizadorInstance = new totalizador(2000, 7,"CA");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 13755");
  });
  it("Aplicar descuento si llega a tres mil", () => {
    const totalizadorInstance = new totalizador(10000, 7,"CA");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 65275");
  });
  it("Aplicar descuentos e impuestos por producto", () => {
    const totalizadorInstance = new totalizador(10000, 7,"CA","Alimentos");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 64085");
  });
  it("Venta pequeña sin descuentos ni impuestos", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Varios");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 533.25");
});
    it("Venta pequeña sin descuentos ni impuestos", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Bebidas alcohólicas");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 568.25");
    });



});


