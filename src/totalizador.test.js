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
    it("Venta pequeña descuentos e impuestos de alcohol", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Bebidas alcohólicas");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 568.25");
    });
    it("Venta pequeña descuentos e impuestos de materiales de escritorio", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Material de escritorio");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 525.75");
    });
    it("Venta pequeña descuentos e impuestos para muebles", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Muebles");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 548.25");
    });
    it("Venta pequeña descuentos e impuestos para electrónicos", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Electrónicos");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 548.05");
    });
    it("Venta pequeña descuentos e impuestos para Vestimentas", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Vestimenta");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 543.25");
    });
    it("Venta pequeña descuentos e impuestos para Vestimentas", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Vestimenta");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 543.25");
    });
    it("Venta con peso volumetrico de menos de 10", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Vestimenta", 5);
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 543.25");
    });
    it("Venta con peso volumetrico de menos de 20", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Vestimenta", 15);
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 560.75");
    });
     it("Venta con peso volumetrico de menos de 40", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Vestimenta", 35);
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 568.25");
    });
    it("Venta con peso volumetrico de menos de 80", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Vestimenta", 65);
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 573.25");
    });
    it("Venta con peso volumetrico de menos de 100", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Vestimenta", 95);
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 575.75");
    });
    it("Venta con peso volumetrico de menos de 200", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Vestimenta", 150);
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 583.25");
    });
    it("Venta a un cliente normal", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Vestimenta", 150, "Normal");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 583.25");
    });
    it("Venta a un cliente Recurrente", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Vestimenta", 150, "Recurrente");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 583.05");
    });
    it("Venta a un cliente Especial", () => {
    const totalizadorInstance = new totalizador(5, 100, "UT", "Vestimenta", 150, "Especial");
    expect(totalizadorInstance.mostrarResultado()).toEqual("El total es: 582.65");
    });
    it("Validar precio faltante", () => {
    const totalizadorInstance =new totalizador(undefined, 100, "CA", "Varios", 10, "Normal");
    expect(totalizadorInstance.validar()).toContain("La cantidad es obligatoria.");
    });
    it("Validar cantidad faltante", () => {
    const totalizadorInstance =new totalizador(2, undefined, "CA", "Varios", 10, "Normal");
    expect(totalizadorInstance.validar()).toContain("El precio es obligatorio.");
    });
    it("No permitir peso volumétrico negativo", () => {
    const totalizadorInstance =new totalizador(10, 100, "CA", "Varios", -10, "Normal");
    expect(totalizadorInstance.validar()).toContain("El peso volumétrico debe ser mayor o igual a 0.");
    });

});


