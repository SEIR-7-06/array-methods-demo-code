// Array Iterator Methods

// =================================================

const friends = [
  {
    firstName: 'Wendy',
    hasPets: true,
    hometown: 'San Diego',
    age: 34
  },
  {
    firstName: 'Ron',
    hasPets: false,
    hometown: 'Denver',
    age: 25
  },
  {
    firstName: 'Ken',
    hasPets: true,
    hometown: 'New York',
    age: 45
  },
  {
    firstName: 'Lin',
    hasPets: false,
    hometown: 'Chicago',
    age: 45
  },
]

const printName = (person) => {
  console.log(person.firstName);
}

// printName(friends[0]);

// ===========================================================
// forEach method - loop through an array and call a function for each item in the array
// friends.forEach((person) => {
//   console.log(person.firstName);
// });


// ===========================================================
// map method - loop through an array and create a brand new array

// input => the friends array
// output => ['Wendy', 'Ron', 'Ken', 'Lin']

const friendsFirstNames = friends.map((person) => {
  return person.firstNames;
})

// console.log(friendsFirstNames);

// Activity:
// Using the map method create an array of welcome messages.
// input => the friends array
// output => ['Wendy is 35', 'Ron is 25', 'Ken is 45', 'Lin is 45']

// ``
const messages = friends.map((person) => {
  return `${person.firstName} is ${person.age}`;
});

// console.log(messages);

//======================================================================
// input => the friends array
// output => ['<li>Wendy<li>', '<li>Ron<li>', '<li>Ken</li>', '<li>Lin</li>']

const friendsLis = friends.map((person) => {
  return `<li>${person.firstName}</li>`;
});

// console.log(friendsLis);

// input => the friends array
// output => an array of divs showing the person's name and their hometown
/*
<div>
  <h2>Wendy</h2>
  <p>Hometown: San Diego</p>
</div>
*/

const friendsDivs = friends.map((person) => {
  return (
    `<div>
      <h2>${person.firstName}</h2>
      <p>${person.hometown}</p>
    </div>`
  );
});


// console.log(friendsDivs);

// ===================================================================
// filter method - Loop through an array and create a brand new array
// of just the items that match a particular criteria

// input => the array of friends
// output => an array of just friends with pets

// Using the filter method create an array of just friends with pets
const friendsWithPets = friends.filter((person) => {
  return person.hasPets === true;
});

// console.log(friendsWithPets);

const friendsFromDenver = friends.filter((person) => {
  return person.hometown === 'Los Angeles';
})

// console.log(friendsFromDenver);

// Activity
// Using the filter method create a new array of the friends with an age greater than 30.
// input => the array of friends
// output => [] - an array of friends with age greater than 30

const friendsOver30 = friends.filter((person) => {
  return person.age > 30;
});

// console.log(friendsOver30);


// =====================================================
// Get an array of all the friends over 30 that have pets
const friendsOver30WithPets = friends.filter((person) => {
  return person.age > 30 && person.hasPets === true;
});

console.log(friendsOver30WithPets);

//////////////////////////////////////////////////////////
// find method
