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



// ASYNC CODE
const fetchData = callback => {
    setTimeout(()=>{
        callback('DONE!!');
    },1500);
};

// Nested CB
const getData = () => {
    setTimeout(()=>{
        console.log('ASYNC CALL DONE!!')
        fetchData(text => console.log(text));
    }, 2000);
};

// Another solution - PROMISES
const fetchData1 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('DONE!!');
        },2000);
    });
    return promise;
};

const getData1 = () => {
    setTimeout(() => {
        console.log('ASYNC Promises');
        fetchData1().then(data => console.log(data));
    }, 2400);
};

// Its better because we don't have to use nested promises again and again like in callbacks
// Promises can be chained, one promise can return another promise, so they all can be chained

// Chaining example
const getData2 = () => {
    setTimeout(() => {
        console.log('ASYNC Promises');
        fetchData1()
            .then(data => {
                console.log('PROMISE 1');
                console.log(data);
                return fetchData1();
            }).then(data2 => {
                console.log('PROMISE 2');
                console.log(data2);
            })
    }, 2400);
};

getData2();