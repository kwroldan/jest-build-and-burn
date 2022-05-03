const division = require("./index");

test("divides 12 / 3 to equal 4", () => {
    expect(division(12, 3)).toBe(4);
});