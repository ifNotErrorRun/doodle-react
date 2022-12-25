var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];
console.log(combined);
const [first, second, three = 'empty', ...otherArr] = array1;
console.log(first, second, three, otherArr);

var objOne = { one: 1, two: 2, other: 0 };
var objTwo = { three: 3, four: 4, other: -1 };
var objCombined = {
  ...objOne,
  ...objTwo,
};
console.log(objCombined);
var { other, ...others } = objCombined;
console.log(others);
