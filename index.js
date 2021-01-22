const employees = {
  frontEnd: { name: "Jack" },
  backEnd: 100,
  devOps: { name: "JaGWRck" },
  pm: { name: "GWEGEW" },
};

// for (let key in employees) {
//   console.log(employees[key]);
// }

/////////////////////////////////////////
// 1. []
// 2. LOOP Employees
// 3. in loop push in new array

// const keys = [];

// for (let key in employees) {
//   keys.push(key);
// }

// console.log(keys)

/*******************************************
 * keys, values, entries
 */
/*********************** Object.keys */

// const keys = Object.keys(employees)
// console.log(keys)

/*********************** Object.values */

// const values = Object.values(employees)
// console.log(values)

// [
//     { name: 'Jack' },
//     100,
//     { name: 'JaGWRck' },
//     { name: 'GWEGEW' }
// ]

/*********************** Object.entries */

// const entries = Object.entries(employees)
// console.log(entries)

// [
//     [ 'frontEnd', { name: 'Jack' } ],
//     [ 'backEnd', 100 ],
//     [ 'devOps', { name: 'JaGWRck' } ],
//     [ 'pm', { name: 'GWEGEW' } ]
// ]

///////////******************************** */
/////*******************************  Clone  */

let obj = { x: 10, y: 20, z: 30 };

const cloneObj = {};

for (let key in obj) {
  // key   => key
  // value => obj[key]
  // cloneObj[key] = obj[key];
  obj[key] = cloneObj[key]
}

console.log(obj)

// // obj.d = 40
// obj["d"] = 40;
