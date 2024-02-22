// // //Assingment Solution

// // Task no:2
// // personal Message: Store a person’s name in a variable, and print a message to that person.
// // our message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// let personName: string = "Eric";
// console.log(`Hello ${personName}, would you like to learn some Python today?`);


// // task 3

// // Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// let personName: string = "Shakir Hussain";

// //in lowercase
// console.log("lowercase:", personName.toLowerCase());

// //in uppercase
// console.log("uppercase:", personName.toUpperCase());

// //title case
// console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));



// // task 4

// // //Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// // //its author, Your output should look something like the following, including the quotation
// // //marks:

// //Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// let quote: string = "A person who never made a mistake never tried anything new.";
// let author: string = "Albert Einstein";

// console.log(`${author} once said, "${quote}"`);



// // task 5

// let famous_person: string = "Albert Einstein";
// let message: string = `${famous_person} once said, "${quote}"`;

// console.log(message);



// // task 6


// // Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// // Make sure you use each character combination, "\t" and "\n", at least once.
// // Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


// let personName: string = "\t\n John Doe \n\t";
// console.log("original:", personName);
// console.log("stripped:", personName.trim());


// // //task 7and 8


// // //Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// console.log(5 + 3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);


// // task 9


// // Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

// let favoriteNumber: number = 5;
// console.log (`My favorite number is ${favoriteNumber}.`);



// // task 10

// // Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// author: [Shakir Hussain]
// date: [ Friday , Feburary 16 , 2024]


// //  Task 11
// let names : string [] = ["Ali","Shakir","Javed","Haseeb"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);


// // // Task 12
//  let names : string [] = ["Ali","Shakir","Javed","Haseeb"];

// let message : string = "Do you like to play Cricket?"
// console.log(names[0] + " "+ message )
// console.log(names[1] + " "+ message )
// console.log(names[2] + " "+ message )
// console.log(names[3] + " "+ message )


// //  Task 13
//  let transpotation : string [] = ["Toyota", "Bmw", "Honda"];
// transpotation.map((items) => console.log(`I would like to own a ${items}`));


// //  Task 14

// let guestArr : string [] = ["Ali","Javed","Haseeb"];

//  guestArr.map((items) => (console.log(`Dear ${items}, You are invited to the dinner`)));


// // // Task 15 
//  let guestArr : string [] = ["Ali","Shakir", "Javed","Haseeb"];
//  let canNotAttend : string = "Javed"

// console.log(canNotAttend + " " "Can not attend the dinner." )

// let newGuest : string = "Saad"

//  guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

// console.log(guestArr)

// guestArr.map((items) =>
//  console.log(`Dear ${items}, You are invited to the dinner.`))


// // // //Task 16
// let guestArr : string [] = ["Ali","Shakir","Javed","Haseeb"];

// let canNotAttend : string = "Ali"

// let newGuest : string = "Furqan"

// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)

// guestArr.map((items) =>
//  console.log(`Dear ${items}, I found a bigger dinner table so I am invited more people.`));

// //   16 part 2
// let guestBeg : string = "Mozi"
// guestArr.unshift(guestBeg);
// console.log(guestArr)

// //  16 part 3
// let middleGuest : string = "Hussain"
// let middleIndex = guestArr.length/3
// guestArr.splice(middleIndex,0,middleGuest)
// console.log(guestArr)

// //  16 part 4
// guestArr.push("Zeeshan")
// console.log(guestArr)

// //  16 part 5
// guestArr.map((items) =>
// console.log(`Dear ${items}, You are invited in the more pepole list on dinner.`))


// // //Task 17

// let dinnerGuests: string[] = ['Mozi', 'Hussain', 'Furqan', 'Shakir', 'Javed'];

// console.log("You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.");

// // //Print initial list
// console.log("Initial guest list:");
// console.log(dinnerGuests);


// // Remove guests until only two names remain
// while (dinnerGuests.length > 2) {
// const removedGuest = dinnerGuests.pop();
// if (removedGuest) {
// console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);}}

// // Print remaining guests
// console.log("Remaining guests invited to dinner:");
// console.log(dinnerGuests);

// // Remove the last two names from the list
// dinnerGuests.pop();
// dinnerGuests.pop();

// // Print the empty list
// console.log("Empty list:");
// console.log(dinnerGuests);



// // // Task 18

// // Define the array of locations
// let placesToVisit: string[] = ["Tokyo","Paris","Itlay","China","Dubai"];

// // Print original order
// console.log("Original Order:");
// console.log(placesToVisit);

// // Print in alphabetical order without modifying the actual list
// console.log("\nAlphabetical Order:");
// console.log([...placesToVisit].sort());

// // Check original order
// console.log("\nOriginal Order Check:");
// console.log(placesToVisit);

// // Print in reverse alphabetical order
// console.log("\nReverse Alphabetical Order:");
// console.log([...placesToVisit].sort().reverse());

// // Check original order
// console.log("\nOriginal Order Check:");
// console.log(placesToVisit);

// // Reverse the order of the list
// placesToVisit.reverse();
// console.log("\nReversed Order:");
// console.log(placesToVisit);

// // Reverse the order again to bring it back to original
// placesToVisit.reverse();
// console.log("\nOriginal Order after Double Reversal:");
// console.log(placesToVisit);

// // Sort the array in alphabetical order
// placesToVisit.sort();
// console.log("\nAlphabetical Order after Sorting:");
// console.log(placesToVisit);

// // Sort in reverse alphabetical order
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("\nReverse Alphabetical Order after Sorting:");
// console.log(placesToVisit);


// //  Task 19  

// // Assuming you have an array of guests or any other data structure representing your dinner guests
// const dinnerGuests: string[] = ['Mozi', 'Hussain', 'Furqan', 'Shakir', 'Javed'];

// //Function to print the number of dinner guests
// function printNumberOfGuests(guests: string[]): void {
// const numberOfGuests: number = guests.length;
// console.log(`You are inviting ${numberOfGuests} people to dinner.`);}
// printNumberOfGuests(dinnerGuests);

// // // Task 20 

// //// Define the topic and create an array of items related to it
// const myTopic: string[] = ["Mount Everest","K2","Kangchenjunga","Makalu","Lhotse",];

// console.log("List of Mountains:");
// myTopic.forEach((item, index) => {
// console.log(`${index + 1}. ${item}`);});

// // // Task 21

// // Define types for items
// interface Item {name: string;
// quantity: number;}

// // Function to create an object with items
// function createObject(items: Item[]): object 
// {const obj: { [key: string]: Item } = {};
// items.forEach(item => {obj[item.name] = item;});
// return obj;}

// // Example items
// const items: Item[] = [
// { name: "apple", quantity: 5 },{ name: "banana", quantity: 3 },{ name: "orange", quantity: 2 }];

// // Create object containing items
// const myObject = createObject(items);

// // Log the object
// console.log(myObject);


// // // Task 23

// let car: string = 'subaru';

// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');

// console.log("Is car == 'honda'? I predict False.");
// console.log(car == 'honda');

// console.log("Is car != 'toyota'? I predict True.");
// console.log(car != 'toyota');

// console.log("Is car !== 'Subaru'? I predict True.");
// console.log(car !== 'Subaru');

// console.log("Is car.toLowerCase() == 'SUBARU'? I predict True.");
// console.log(car.toLowerCase() == 'subaru');

// console.log("Is car.length > 5? I predict False.");
// console.log(car.length > 5);

// console.log("Is car.charAt(0) == 's'? I predict True.");
// console.log(car.charAt(0) == 's');

// // // Task no 24

// // Tests for equality and inequality with strings
// const string1: string = "hello";
// const string2: string = "world";

// console.log(string1 === string2); // False
// console.log(string1 !== string2); // True

// // Tests using the lower case function
// const uppercaseString: string = "HELLO";
// const lowercaseString: string = "hello";

// console.log(uppercaseString.toLowerCase() === lowercaseString); // True

// // Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// const num1: number = 10;
// const num2: number = 5;

// console.log(num1 === num2); // False
// console.log(num1 !== num2); // True
// console.log(num1 > num2); // True
// console.log(num1 < num2); // False
// console.log(num1 >= num2); // True
// console.log(num1 <= num2); // False

// // Tests using "and" and "or" operators
// const bool1: boolean = true;
// const bool2: boolean = false;

// console.log(bool1 && bool2); // False
// console.log(bool1 || bool2); // True

// // // Test whether an item is in an array
// const array: number[] = [1, 2, 3, 4, 5];
// const itemToCheck: number = 3;

// console.log(array.includes(itemToCheck)); // True

// // Test whether an item is not in an array
// console.log(!array.includes(6)); // True



// // Task no 25

// //  Version 1: Passing the if test
// let alien_color: 'green' | 'yellow' | 'red' = 'green';
// if (alien_color === 'green') {console.log("Congratulations! You just earned 5 points.");}

// //  Version 2: Failing the if test (no output)
// alien_color = 'red';
// if (alien_color = 'green') {console.log("Congratulations! You just earned 5 points.");}



// // Task no 26

// // Version 1: Runs the if block
// const alienColor: string = "green";

// if (alienColor === "green") 
// {console.log("Player just earned 5 points for shooting the alien.");} 
// else {console.log("Player just earned 10 points.");}

// // Version 2: Runs the else block
// const alienColor2: string = "red"; // Change the color to something other than green

// if (alienColor2 === "green") 
// {console.log("Player just earned 5 points for shooting the alien.");} 
// else {console.log("Player just earned 10 points.");}


// // Task no 27

// enum AlienColor {Green,Yellow,Red}
// function calculatePoints(alienColor: AlienColor): number {
// let points = 0;
// if (alienColor === AlienColor.Green) {
// console.log("The player earned 5 points.");
// points = 5;
// } else if (alienColor === AlienColor.Yellow) {console.log("The player earned 10 points.");
// points = 10;} else if (alienColor === AlienColor.Red) {console.log("The player earned 15 points.");
// points = 15;}return points;}

//   // Testing the function with different alien colors
// console.log("For Green Alien:");
// calculatePoints(AlienColor.Green);

// console.log("\nFor Yellow Alien:");
// calculatePoints(AlienColor.Yellow);

// console.log("\nFor Red Alien:");
// calculatePoints(AlienColor.Red);

// // Task no 28

// let age: number = 25; // Change the age value as needed

// if (age < 2) {
// console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
// console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
// console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
// console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
// console.log("The person is an adult.");} 
// else {console.log("The person is an elder.");}


// // // task n0 29

// // Define array of favorite fruits
// const favorite_fruits: string[] = ["apple", "banana", "mango"];

// // Check for favorite fruits using if statements
// if (favorite_fruits.includes("apple")) {
// console.log("I really like apples!");}

// if (favorite_fruits.includes("banana")) {
// console.log("I really like bananas!");}

// if (favorite_fruits.includes("mango")) {
// console.log("I really like mangoes!");}

// if (favorite_fruits.includes("orange")) {
// console.log("I really like oranges!");
// } else {
// console.log("I don't seem to like oranges much.");
// }

// if (favorite_fruits.includes("strawberry")) {
// console.log("I really like strawberries!");
// } else {
// console.log("I don't seem to like strawberries much.");
// }


// // Task no 30


// const usernames: string[] = ['admin', 'Mozi', 'Hussain', 'Javed', 'Furqan'];

// function greetUsers(usernames: string[]): void {
// for (const username of usernames) {
// if (username.toLowerCase() == 'admin') {
// console.log('Hello admin, would you like to see a status report?');
// } else {console.log(`Hello ${username}, thank you for logging in again.`);}}}

// greetUsers(usernames);



// //  Task no 31


// let users: string[] = []; 

// function checkUsersList(users: string[]): boolean {
// return users.length === 0;}

// function removeAllUsers(users: string[]): void {
// users = [];}

// function executeTasks(users: string[]): void {


// if (checkUsersList(users)) {
// console.log("We need to find some users!");
// } else {
// console.log("List of users exists."); }

// removeAllUsers(users);

// if (checkUsersList(users)) {
// console.log("We need to find some users!");
// } else {
// console.log("List of users exists but is empty now.");
// }}

// executeTasks(users);



// // Task no 32

// const current_users: string[] = ["shakir", "Hussain", "Furqan", "ali", "Mozi"];

// const new_users: string[] = ["shakir", "Javed", "Gul", "Mohsin", "ali"];

// function isUsernameTaken(username: string): boolean {
// const lowerCaseUsername = username.toLowerCase();
// return current_users.includes(lowerCaseUsername)}

// new_users.forEach((username) => {
// if (isUsernameTaken(username)) {
// console.log(`The username "${username}" is not available. Please choose a different one.`);
// } else {
// console.log(`The username "${username}" is available.`)}});

// // Task no 33

// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const num of numbers) {
// let ordinal: string;

// if (num === 1) {ordinal = 'st';
// } else if (num === 2) {ordinal = 'nd';
// } else if (num === 3) {ordinal = 'rd';
// } else {ordinal = 'th' };

// console.log(`${num}${ordinal}`)};


// // Task no 34


// const favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// console.log("My favorite pizzas:");
// for (let pizza of favoritePizzas) {
// console.log(pizza)};


// console.log("\nSentences about my favorite pizzas:");
// for (let pizza of favoritePizzas) {
// console.log(`I like ${pizza} pizza.`)};

// console.log("\nI really love pizza!");

// Task no 35

// // Define a list of animals
// const animals: string[] = ["Dog", "Cat", "Rabbit"];

// // Name of each animal using for loop
// console.log("Names of animals:");
// for (let i = 0; i < animals.length; i++) {
// console.log(animals[i])};

// // Statement about each animal
// console.log("\nStatements about each animal:");
// for (let i = 0; i < animals.length; i++) {
// switch (animals[i]) {
// case "Dog":
// console.log("A dog would make a great pet.");
// break;
// case "Cat":
// console.log("A cat can be independent yet affectionate.");
// break;
// case "Rabbit":
// console.log("A rabbit is a cute and gentle companion.");
// break;
// default:
// console.log("This animal is not recognized.")}};

// // What these animals have in common
// console.log("\nWhat these animals have in common?");
// console.log("Any of these animals would make a great pet!");


// // Task no 36

// function make_shirt(size: string, message: string): void {
// console.log(`You have ordered a ${size} T-shirt with the message: "${message}".`)};

// // Example usage
// make_shirt("medium", "Hello, World!");


// task no 37

// class Shirt {size: string;
// message: string;

// constructor(size: string = "large", message: string = "I love TypeScript") {
// this.size = size;
// this.message = message};

// display(): void {
// console.log(`This ${this.size} shirt says: "${this.message}"`)}};

// function make_shirt(size: string = "medium", message: string = "I love Python"): Shirt {
// return new Shirt(size, message);}

// // Create a large shirt with the default message
// const largeShirt = make_shirt("large"); 

// // Create a medium shirt with the default message
// const mediumShirt = make_shirt("medium");

// // Create a small shirt with a different message
// const smallShirt = make_shirt("small", "I love to learn new thing");

// largeShirt.display();
// mediumShirt.display();
// smallShirt.display();

// // Task no 38

// function describe_city(city: string, country: string = "Unknown"): void {
// console.log(`${city} is in ${country}.`)};

// // Calling the function for three different cities
// describe_city("Karachi", "Pakistan");
// describe_city("New York", "USA");
// describe_city("Tokyo"); // Calling with default country


// // Task no 39

// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }

// // Calling the function with city-country pairs
// const pair1 = city_country("Lahore", "Pakistan");
// const pair2 = city_country("Tokyo", "Japan");
// const pair3 = city_country("Paris", "France");

// // Printing the returned values
// console.log(pair1);
// console.log(pair2);
// console.log(pair3);



// // Task 40

// interface Album {
// artist: string;
// title: string;
// tracks?: number;}

// function make_album(artist: string, title: string, tracks?: number): Album {
// const album: Album = {artist: artist,title: title};

// if (tracks) {album.tracks = tracks;}

// return album;}

// // Making three dictionaries representing different albums
// const album1 = make_album("Artist1", "Album1");
// const album2 = make_album("Artist2", "Album2");
// const album3 = make_album("Artist3", "Album3");

// // Printing each return value to show that Objects are storing the album information correctly
// console.log(album1);
// console.log(album2);
// console.log(album3);

// // Adding an optional parameter to store the number of tracks on an album
// const album4 = make_album("Artist4", "Album4", 10);
// console.log(album4);

// // Task 41

// // Define a function to show magicians
// function showMagicians(magicians: string[]): void {
// magicians.forEach(magician => {
// console.log(magician);
// });
// }

// // Array of magician's names
// const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// // Call the function to show magicians
// showMagicians(magicianNames);

// // TASK no 42

// // Define a type for Magician
// type Magician = string;

// // Define an array of magicians
// let magicians: Magician[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// // Function to make magicians great
// function makeGreat(magicians: Magician[]): Magician[] {return magicians.map(magician => `the Great ${magician}`);}

// // Function to show magicians
// function showMagicians(magicians: Magician[]): void {
// console.log("Magicians:");
// magicians.forEach(magician => console.log(magician));
// }

// // Make magicians great
// magicians = makeGreat(magicians);

// // Show modified list of magicians
// showMagicians(magicians);


// // Task no 43

// // Define the function make_great to add "the Great" to each magician's name
// function make_great(magicians: string[]): string[] {
// const greatMagicians: string[] = [];
// for (const magician of magicians) {
// greatMagicians.push(`${magician} the Great`);}
// return greatMagicians;}

// // Define the function show_magicians to display the list of magicians
// function show_magicians(magicians: string[]): void {for (const magician of magicians) 
//     {console.log(magician);}}

// // Original array of magician names
// const magicians: string[] = ["Merlin", "Gandalf", "Harry Houdini"];

// // Copy the array and call make_great with the copy
// const greatMagicians: string[] = make_great([...magicians]);

// // Display the original array of magician names
// console.log("Original Magicians:");
// show_magicians(magicians);

// // Display the array with "the Great" added to each magician's name
// console.log("\nGreat Magicians:");
// show_magicians(greatMagicians);

// // Task no 44

// function orderSandwich(...items: string[]): void {
//     console.log("Order Summary:");
//     if (items.length === 0) {
//         console.log("No items selected.");
//     } else {
//         console.log("Sandwich with:");
//         items.forEach(item => console.log(`- ${item}`));
//     }
//     console.log("-------------------");
// }

// // Call the function three times with different numbers of arguments
// orderSandwich("ham", "cheese", "lettuce", "tomato");
// orderSandwich("turkey", "bacon");
// orderSandwich("peanut butter", "jelly");


// // TASK no 45


// interface Car {
//     manufacturer: string;
//     model: string;
//     color: string;
//     year: string
  
//     [key: string]: any};
  
//   function createCar(manufacturer: string, model: string, color: string, year: string,...extras: [string, any][]): Car {
//   const car: Car = {manufacturer,model,color,year};
  
//   extras.forEach(([key, value]) => {car[key] = value});
//   return car;}
  
//   // Example
//   const myCar = createCar("Toyota", "Camry", "black", "2021");
  
//   console.log(myCar);
  