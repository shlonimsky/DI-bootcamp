// Exercise 1 : Dog Competition
const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
  ];
//   Hint: Dog Years -> the dog’s age is the age multiplied by 7.

// Use a loop to find the sum of all the dog’s ages in dog years.
// Using the reduce() method, find the sum of all the dog’s ages in dog years.
const dogYears = data.filter(obj => obj.type === 'dog')
.reduce((acc, obj) => {return acc+obj.age*7}, 0)
console.log(dogYears);

// Exercise 2 : Email
// 
// Clean up this email to have no whitespaces. Do it in a single line (return a new string).
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
const newEmail = userEmail3.trim();
console.log(newEmail)


// Exercise 3 : Employees #3
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
// Example: { 'Bradley Bouley': 'Full Stack Resident' }
// Hint: Step one, create an empty object.
const newUsers = users.map((obj,ind) => {
  let key={}
     key[obj.firstName+" "+obj.lastName]=obj.role;
    return key
}
)
console.log(newUsers)


// Exercise 4 : Array To Object
// Using this array 
const letters = ['x', 'y', 'z', 'z'];
// Use a for loop to get this output { x: 1, y: 1, z: 2 };
let newObj1={};
for (let letter of letters){
newObj1[letter]? newObj1[letter]+=1:newObj1[letter]=1
}
console.log(newObj1);
// Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
// let obj ={}
let newobj = letters.reduce((acc,leter,ind) => {
  acc[leter]? acc[leter]+=1 : acc[leter]=1
return acc
},{})
console.log(newobj);
