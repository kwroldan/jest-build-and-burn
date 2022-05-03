const exponent = require("./index");

test("exponentiates 3 ** 2 to equal 9", () => {
    expect(exponent(3, 2)).toBe(9)
});