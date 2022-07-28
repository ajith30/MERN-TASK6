//GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript

//1.Fix the code to get the largest of three.


const aa = (f, s, t) => {
    if (f > s && f > t) {
        console.log(f)
    }
    else if (s > f && s > t) {
        console.log(s)
    }
    else {
        console.log(t)
    }
}
aa(1, 2, 3);


//2. Fix the code to Sum of the digits present in the number


let n = 123;
console.log(add(n));
function add(n) {
    let sum = 0;
    n = n.toString();
    for (var i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }
    return sum;
}


//3. Fix the code to Sum of all numbers using IIFE function

(function () {
    const arr = [9, 8, 5, 6, 4, 3, 2, 1];
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }
    console.log(sum);
})();

//4.Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
}
ano(arr);


//5.Fix the code to return the Prime numbers


const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
});
console.log(myPrime);


//6.Fix the code to sum the number in that array

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const sum = (a, b) => a + b;
const sumResult = num.reduce(sum);
console.log(sumResult);


//7.Fix the code to rotate an array by k times and return rotated array using IIFE function

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
(function () {
    const newArr = arr.slice(arr.length - k, arr.length);
    const out = arr.slice(0, arr.length - k);

    var count = newArr.length;
    for (var i = 0; i < out.length; i++) {
        newArr[count] = out[i];
        count += 1;
    }
    console.log(newArr);
})(arr);

//8.Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];
(function () {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
})();



//9.print all odd numbers in an array using IIFE function

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})(arr);

//10.Fix the code to reverse.

(function (str) {
    const str1 = str.split("").reverse().join("");
    console.log(str1);
})("abcd");



//11.Fix the code to remove duplicates.

var res = function (arr) {
    const newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr)
}
res(["guvi", "geek", "guvi", "duplicate", "geeK"]);



//12.Fix the code to give the below output:

// Expected Output:

// [
// {firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
// {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
// ]



var array = [[["firstname", "vasanth"], ["lastname", "Raje"], ["age", 24], ["role", "JSWizard"]],
[["firstname", "Sri"], ["lastname", "Devi"], ["age", 28], ["role", "Coder"]]];

var final = []
while (array.length != 0) {
    var outer_remove = array.shift();
    var new_object = [];
    while (outer_remove.length != 0) {
        var inner_remove = outer_remove.shift()
        var key = inner_remove[0]
        var value = inner_remove[1]
        new_object[key] = value;
    }
    final.push(new_object)
}
console.log(final);


//13.Fix the code to give the below output:
//Sum of odd numbers in an array

var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function (a, c) {
    if (c % 2 != 0) {
        return a + c;
    }
    return a;
}, 0);
console.log(s);



//14.Fix the code to give the below output:
//Swap the odd and even digits

const aaa = data => {
    var a = data;
    var l = "";

    for (i = 0; i < a.length-1; i++) {
  
        var s = a[i + 1];
        var b = a[i];
        l += s;
        l += b;
        i = i + 1;
    }
    if ((a.length % 2) != 0) {
        l += a[a.length - 1]; 
    }
   
    console.log(l);
}
aaa("1234");











