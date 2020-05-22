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
      durability: item.durability,
      enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20
    };
  }
}



// why does not work ? this is js issue
// function fail(item) {
//   function checkEnhancement(enhancement, durability) {
//     if (enhancement > 15) {
//       durability = durability - 5;
//     }
//     if (enhancement >= 15) {
//       durability = durability - 10;
//     }
//     if (enhancement > 16) {
//       enhancement = enhancement - 1;
//     }
//   }
//   return {
//     ...item,
//     enhancement: checkEnhancement(item.enhancement, item.durability)
//   };
// }

function fail(item) {
  let { enhancement, durability } = item;
  if (enhancement < 15) {
    return { ...item, durability: durability - 5 };
  } else if (enhancement >= 15) {
    return { ...item, durability: durability - 10 };
  } else if (enhancement > 16) {
    return { ...item, enhancement: enhancement - 1 };
  }
}
function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
