const greet = require("./index");

test("greet function returns proper greeting", () => {
  expect(greet("Kaveesha")).toBe("Hello, Kaveesha!");
});
