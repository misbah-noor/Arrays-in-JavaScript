/*********** Array in JS ************/

let courses = ["HTML", "CSS", "Bootstrap"]
console.log(courses);

let fruits = new Array("Apple", "Bananna", "Cherry")
console.log(fruits);


/****** Accessing elements *******/

console.log("First fruit:", fruits[0]);
console.log("Second course:", courses[1]);

/****** Adding elements to Array ******/

fruits.push("Peach")       
console.log(fruits);    
courses.unshift("Javascript")   
console.log(courses);

/******* Removing elements from array *******/

fruits.pop();
console.log(fruits);
courses.shift();
console.log(courses);


/***** Modifying an element in the array *****/

fruits[1] = "Blueberry"
console.log(fruits);


/****** looping through array *****/

console.log("Looping through the array using for loop: ");
for(let i = 0; i< courses.length; i++){
    console.log(courses[i]);
}

/****** Methods used in Array ******/


let morecourses = ["React" , "Tailwind CSS"]
let allcourses = courses.concat(morecourses);  
console.log(allcourses); 

console.log(allcourses.indexOf("React"));
console.log(allcourses.includes("Tailwind CSS")); 
console.log(allcourses.slice(1,4));
console.log(allcourses.splice(1,4));
// console.log(allcourses);

const allcourses1 = [...courses, ...morecourses]      
console.log(allcourses1);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [3, 2]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Misbah"));
console.log(Array.from("Misbah"));
console.log(Array.from({name: "misbah"}));      //  !important

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

/****************** 2D Array ****************/

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix);

/***** Adding a new row *****/

matrix.push([10, 11, 12])
console.log(matrix);

/***** Accessing 2D array elements *****/

console.log(matrix[2][0]);  //7
console.log(matrix[1][2]);  //6
console.log(matrix[0][2]);  //3
console.log(matrix[2][2]);  //9
console.log(matrix[3][2]);  //12


/***** Adding a new column *****/

function addColumn(matrix, newColumnValues){
for (let row = 0; row < 4; row++){
    matrix[row].push(newColumnValues[row]);
}
}

let newColumnValues = [14, 19, 21, 15]
addColumn(matrix, newColumnValues);

console.log(matrix);


