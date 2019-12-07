// core types

// number example
const number1: number = 5;
const number2: number = 2.6;

// boolean example
const isActive: boolean = false;

// string example
const myName: string = "Alex";

// array example
/*
The advantage of using types with an array is that
you are stating that the contents of the 
array can only be of the type that is declared 
ie: never having a number in a types string array
*/
const someSuperCoolNames: string[] = ['Alex', 'Tom', 'Tu'];

// enum example
/*
Used for setting labels to numbers. The advantage 
of using an enum is that you can be sure that you 
are using the same values and takes the guess work out of naming
*/
enum Roles { ADMIN, USER, READ_ONLY };

// tuple example
/*
Used for setting a fixed length of an array The advantage 
of using a tuple is that you can declare the fixed length of the array
AND you can declare the types of each index of the array. Also better for 
error checking in development
*/
const mySuperTuple:[number,string] = [1, 'Name'];

/*
Implicit types examples
----------------------
*/
// imply boolean
const isRaining = false;
// imply string
const myOtherName = 'testing';
// imply number
const favNumber = 7;
//imply that this is an array of strings
const implicitArray = ['string', 'string' , 'string'];
