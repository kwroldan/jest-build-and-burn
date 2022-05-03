const subtraction = require("./index");

test("subtracts 100 - 25 to equal 75", () => {
    expect(subtraction(100, 25)).toBe(75);
});