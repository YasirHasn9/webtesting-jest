const enhancer = require("./enhancer.js");
// test away!
describe("succeed", () => {
  it("returns a new item object modified according to the rules defined by the client for enhancement success.", () => {
    const succeedItem = {
      name: "Yasir",
      enhancement: 15,
      durability: 80
    };
    const expected = enhancer.succeed(succeedItem, true);
    expect(expected.enhancement).toBe(16);
  });
});

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

describe("fail", () => {
  it("returns a new item modified according to the rules defined by the client", () => {
    const repairItem = {
      name: "Yasir",
      enhancement: 18,
      durability: 100
    };
    const expected = enhancer.repair(repairItem);
    expect(expected.durability).toBe(100);
  });
});
