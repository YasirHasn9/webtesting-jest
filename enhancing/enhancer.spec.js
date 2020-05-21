const enhancer = require("./enhancer.js");
// test away!

// - a `repair(item)` method that accepts an `item`
//  object and **returns a new
//  item** with the durability restored to 100.
//  This method is the simplest of the three and would be a
// - Items have `name`, `durability` and `enhancement`.
// - The item's `enhancement` it's a number from 0 to 20.
// - The item's `durability` it's a number from 0 to 100.
describe("repair", () => {
  it("returns a new item with the durability restored to 100.", () => {
    const repairItem = {
      name: "Yasir",
      enhancement: 18,
      durability: 100
    };
    const expected = enhancer.repair(repairItem);
    expect(expected.durability).toBe(100);
  });
});
