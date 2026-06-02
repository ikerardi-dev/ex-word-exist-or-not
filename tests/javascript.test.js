import { describe, it, expect } from "vitest";
import { contieneEnglish } from "./js/main.js";

describe("contieneEnglish", () => {
  it("detecta la palabra English en cualquier combinación de mayúsculas", () => {
    expect(contieneEnglish("abcEnglishdef")).toBe(true);
    expect(contieneEnglish("abceNglisHxyz")).toBe(true);
  });

  it("devuelve false si la palabra está desordenada o incompleta", () => {
    expect(contieneEnglish("abcnEglishsef")).toBe(false);
    expect(contieneEnglish("englis")).toBe(false);
    expect(contieneEnglish("englsh")).toBe(false);
  });

  it("funciona con cadenas largas y caracteres ASCII variados", () => {
    expect(contieneEnglish("1234!!__ENGLISH__!!")).toBe(true);
    expect(contieneEnglish("XYZneglishXYZ")).toBe(false);
  });

  it("devuelve false si la cadena no contiene la palabra", () => {
    expect(contieneEnglish("hola mundo")).toBe(false);
  });
});
