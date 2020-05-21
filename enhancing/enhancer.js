module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item, enhancementStatus) {
  if (enhancementStatus) {
    return {
      ...item,
      durability: item.enhancement,
      enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20
    };
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
