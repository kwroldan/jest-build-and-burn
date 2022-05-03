const product = require("./index");

test("multiplies 3 * 6 to equal 18", () => {
    expect(product(3, 6)).toBe(18)
})