var globalVar = "I'm a var";
let globalLet = "I'm a let";
const globalConst = "I'm a const";
console.log(globalVar, globalLet, globalConst);

function testScope() {
    var funcVar = "var in function";
    let funcLet = "let in function";
    const funcConst = "const in function";
}
testScope();
console.log(typeof funcVar);
console.log(typeof funcLet);
console.log(typeof funcConst);

if (true) {
    var blockVar = "var in block";
    let blockLet = "let in block";
    const blockConst = "const in block";
}
console.log(blockVar);

console.log(hoistedVar);
var hoistedVar = "I'm hoisted";

var a = 10;
var a = 20;

var x = 5;
x = 10;

let y = 15;
y = 25;

const z = 30;

{
    let tdzLet = "let inside block";
    const tdzConst = "const inside block";
}

const firstName = "Adil";
const lastName = "Abid";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const address = `123 Street Name
City, State
Postal Code`;
console.log(address);

const num1 = 5;
const num2 = 10;
const sum = `${num1} + ${num2} = ${num1 + num2}`;
console.log(sum);

function multiply(a, b) {
    return a * b;
}
const result = `The product is: ${multiply(4, 3)}`;
console.log(result);

function tag(strings, ...values) {
    console.log(strings, values);
}
const name = "JavaScript";
tag `Hello, ${name}!`;

function upper(strings, ...values) {
    const result = strings.map((str, i) => str + (values[i] ? values[i].toUpperCase() : "")).join("");
    return result;
}
const language = "javascript";
console.log(upper `I love ${language}!`);

const message = `This is a backtick: \``;
console.log(message);
const rows = [1, 2];
const nestedTable = `
<table>
  ${rows.map(row => `
    <tr>
      <td>Row ${row}, Cell 1</td>
      <td>Row ${row}, Cell 2</td>
    </tr>`).join("")}
</table>`;
console.log(nestedTable);

const number = 7;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

const score = 85;
const grade =
  score >= 90 ? "A" :
  score >= 80 ? "B" :
  score >= 70 ? "C" :
  score >= 60 ? "D" : "F";
console.log(grade);

function greet(name) {
  return name ? `Hello, ${name}!` : "Hello, guest!";
}
console.log(greet("Adil"));
console.log(greet(""));

const nums = [1, 2, 3, 4, 5];
const transformed = nums.map(n => n % 2 === 0 ? n * 2 : n * 3);
console.log(transformed);

const words = ["hi", "apple", "cat", "banana"];
const filtered = words.filter(word => word.length > 3);
console.log(filtered);

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(originalArray, copiedArray);
console.log(originalArray === copiedArray);

const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

const numbers = [2, 3, 4];
const updatedNumbers = [1, ...numbers, 5];
console.log(updatedNumbers);

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject);

const user = { name: "Adil", age: 20, email: "old@example.com" };
const updatedUser = { ...user, email: "new@example.com", address: "City" };
console.log(updatedUser);

function combineArrays(...arrays) {
  return arrays.flat();
}
console.log(combineArrays([1], [2, 3], [4, 5]));

function multiply(multiplier, ...nums) {
  return nums.map(n => n * multiplier);
}
console.log(multiply(2, 1, 2, 3));

const nestedArray = [[1], [2], [3]];
const shallowCopy = [...nestedArray];
shallowCopy[0][0] = 99;
console.log(nestedArray);
console.log(shallowCopy);

function average(...nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  return total / nums.length;
}
console.log(average(10, 20, 30));

const colors = ["red", "green", "blue", "yellow", "purple"];
const [, , ...remainingColors] = colors;
console.log(remainingColors);

const person = {
    name: "Adil",
    age: 25,
    email: "adil@example.com",
    address: "City Town"
};

const { name: personName, email, ...rest } = person;
console.log(personName);
console.log(email);
console.log(rest);

const student = {
    id: 1,
    name: "Ali",
    grades: [90, 85, 88],
    info: { age: 20, major: "CS" }
};

const {
    id,
    name: studentName,
    info: { major },
    ...restStudent
} = student;

console.log(id, studentName, major);
console.log(restStudent);

function filterEven(...nums) {
    return nums.filter(n => n % 2 === 0);
}
console.log(filterEven(1, 2, 3, 4, 5, 6));

function combineAndSort(...arrays) {
    return arrays.flat().sort((a, b) => a - b);
}
console.log(combineAndSort([3, 1], [4, 2], [5]));

const colorList = ["red", "green", "blue", "yellow"];
const [primaryColor, , tertiaryColor] = colorList;
console.log(primaryColor, tertiaryColor);

const numbersList = [1, 2, 3, 4, 5];
const [firstNumber, ...remainingNumbers] = numbersList;
console.log(firstNumber, remainingNumbers);

const car = { make: "Toyota", model: "Corolla", year: 2022 };
const { make: carMake, model: carModel, year: carYear } = car;
console.log(carMake, carModel, carYear);

const nestedArr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const [
    [a1],
    [b1],
    [c1]
] = nestedArr;
console.log(a1, b1, c1);

const data = {
    id: 101,
    info: [{ name: "Alice" }, { age: 25 }]
};
const {
    id: userId,
    info: [{ name: userName }, { age: userAge }]
} = data;
console.log(userId, userName, userAge);

function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ name: "Adil", age: 25 });

const book = {
    title: "JS Essentials",
    author: "Adil Abid",
    year: 2025
};

const keys = Object.keys(book);
console.log(keys);

const scores = {
    math: 85,
    science: 90,
    english: 80
};

const total = Object.values(scores).reduce((a, b) => a + b, 0);
console.log(total);

const userObj = {
    username: "adilx",
    email: "adil@example.com",
    location: "Pakistan"
};

Object.values(userObj).forEach(value => {
    console.log(value);
});

const inventory = {
    apples: 12,
    bananas: 5,
    oranges: 15,
    grapes: 8
};

const filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);
console.log(filteredKeys);

const temperatures = {
    morning: 20,
    afternoon: 30,
    evening: 25
};

const fahrenheit = Object.fromEntries(
    Object.entries(temperatures).map(([key, value]) => [key, value * 9 / 5 + 32])
);

console.log(fahrenheit);

const roles = {
    admin: "A",
    editor: "E",
    viewer: "V"
};

const swapped = Object.fromEntries(
    Object.entries(roles).map(([key, value]) => [value, key])
);

console.log(swapped);

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterAndMap(arr, filterFn, mapFn) {
    return arr.filter(filterFn).map(mapFn);
}

const resultArr = filterAndMap(numberArr, n => n % 2 !== 0, n => n ** 2);
console.log(resultArr);

const wordArr = ["apple", "banana", "cherry", "date"];

function sortAndReduce(arr, sortFn, reduceFn) {
    return arr.sort(sortFn).reduce(reduceFn);
}

const combined = sortAndReduce(wordArr, (a, b) => a.localeCompare(b), (acc, word) => acc + " " + word);
console.log(combined);

function greetCallback(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
}

function printGreeting(msg) {
    console.log(msg);
}

greetCallback("Adil", printGreeting);

function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched successfully!");
    }, 1000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData);

const add = (a, b) => a + b;
console.log(add(3, 5));

const numArr = [1, 2, 3, 4, 5];
const squares = numArr.map(n => n ** 2);
console.log(squares);

function greetWithDefault(name, msg = "Hello") {
    console.log(`${msg}, ${name}`);
}
greetWithDefault("Adil");
greetWithDefault("Ali", "Hi");

const wordList = ["apple", "banana", "cherry"];
const upperList = wordList.map(word => word.toUpperCase());
console.log(upperList);

["apple", "banana", "cherry"].forEach(word => console.log(word.length));

const firstEven = [1, 3, 5, 7, 8].find(n => n % 2 === 0);
console.log(firstEven);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => {
    console.log("Hello, world!");
});

function fetchDataPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: "Adil" });
        }, 1000);
    });
}

fetchDataPromise().then(data => {
    console.log(data);
});

function fetchUserData() {
    return new Promise((resolve, reject) => {
        const user = { name: "Ali" };
        if (!user.age) {
            reject("Error: age property missing");
        } else {
            resolve(user);
        }
    });
}

fetchUserData()
    .then(user => console.log(user))
    .catch(err => console.log(err));

function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ temp: 30, condition: "Sunny" });
            } else {
                reject("Failed to fetch weather");
            }
        }, 1000);
    });
}

getWeather()
    .then(data => console.log("Weather:", data))
    .catch(err => console.log("Error:", err));

async function getUserData() {
    try {
        const data = await fetchUserData();
        console.log("User:", data);
    } catch (err) {
        console.log("Error:", err);
    }
}
getUserData();

function fetchUser() {
    return new Promise((resolve, reject) => {
        const found = false;
        setTimeout(() => {
            if (found) {
                resolve({ id: 2, name: "Ali" });
            } else {
                reject("User not found");
            }
        }, 500);
    });
}

async function getUserInfo() {
    try {
        const user = await fetchUser();
        console.log("User:", user);
    } catch (err) {
        console.log("Error:", err);
    }
}
getUserInfo();

function apiCall(name) {
    return new Promise(resolve => {
        const delay = Math.random() * 1000;
        setTimeout(() => resolve(`${name} data`), delay);
    });
}

async function getData() {
    try {
        const data1 = await apiCall("User");
        console.log(data1);

        const data2 = await apiCall("Posts");
        console.log(data2);

        const data3 = await apiCall("Comments");
        console.log(data3);
    } catch (err) {
        console.log("API Error:", err);
    }
}
getData();