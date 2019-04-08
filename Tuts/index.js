// Objects and Arrays as Reference types

const person = {
    name: "Sauron",
    age:220,
    smile() {
        console.log("Hey "+this.name+"! Smile...");
    }
};

// Spread operator
// Copied person
const copiedPerson  = {...person};

const hobbies = ['Sports', 'Cooking'];
const newHobbies = [...hobbies, 'Swimming'];


// Rest Operator
// It is quiet opposite of Spread operator

// Here's a function which returns its argument in an array
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};
// But this is not flexible as what if there are 4 args or more

// SO
const anotherToArray = (...args) => {
    return args;
};
// The above is rest operator
// Rest operator looks just like spread operator
// Spread operator is used to extract array items or object's propertie and methods
// While rest operator is used to bundle arguments into array