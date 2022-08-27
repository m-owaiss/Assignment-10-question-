

//ANSWER NO.1:
//Write a javascript function that reverse a number.

function reverseNumber(x) {
    x = x + "";
    return x.split("").reverseNumber().join("");
}
console.log(reverseNumber(32243));


//ANSWER NO.2:
// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function checkPalindrome(str_entry) {

    var setr = str_entry.toLowerCase();
    var ccount = 0;

    if (setr === "") {
        console.log("Nothing found!");
        return false;
    }

    if ((setr.length) % 2 === 0) {
        ccount = (setr.length) / 2;
    } else {

        if (setr.length === 1) {
            console.log("Entry is a palindrome.");
            return true;
        } else {

            ccount = (setr.length - 1) / 2;
        }
    }
    for (var x = 0; x < ccount; x++) {

    }
    console.log("The entry is a palindrome.");
    return true;
}
checkPlindrome('level');
checkPalindrome('radar');
checkPalindrome('madam');



//ANSWER NO 3:
//Write a JavaScript function that generates all combinations of a string

function stringCombination(str1) {
    var listOfString = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length + 1; j++) {
            listOfString.push(str.slice(i, j))
        }
    } return listOfString

}

console.log(stringCombination("dog"));




//ANSWER NO. 4:
//Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alphabetOrder(str) {
    return str.split("").sort().join("");
}

console.log(alphabetOrder("webmaster"));




//answer no. 5:
//Write a JavaScript function that accepts a string as a parameter and
// converts the first letter of each word of the string in upper case

function uppercase(sto) {
    var array1 = sto.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));



//ANSWER NO. 6:
//Write a JavaScript function that accepts a string as a parameter and find the longest
//word within the string.

function longestWord(str) {
   var newString = str.split("");
   newString.sort(function(a,b) {return b.length - a.length});
   return newString[0];
}
console.log(longestWord('Web Development Tutorial'));


//ANSWER NO. 7:
//Write a JavaScript function that accepts a string as a parameter
//and counts the number of vowels within the string.


function countVowel(str1) {
    var vowelList = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str1.length; x++) {
        if (vowelList.indexOf(str1[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(countVowel("The quick brown fox"));




//ANSWER NO. 8:
//Write a JavaScript function that accepts a number as a parameter 
//and check the number is prime or not

function CheckPrime(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(CheckPrime(37));






//ANSWER NO.9:
//Write a JavaScript function which accepts an argument and returns the type

function detect_data_type(value) {
    var dtypes = [Function, Number, String, Boolean, Object], x, len;

    if (typeof value === "object" || typeof value === "function") {
        for (x = 0, len = dtypes.length; x < len; x++) {
            if (value instanceof dtypes[x]) {
                return dtypes[x];
            }
        }
    }

    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('Saylani'));
console.log(detect_data_type(false));




//ANSWER NO. 10:
//Write a JavaScript function which will take an array of 
//numbers stored and find the second lowest and second greatest numbers, respectively.


function lowestAndGreatesNumber(arr_num) {
    arr_num.sort(function (x, y) {
        return x - y;
    });
    var uniqu = [arr_num[0]];
    var result = [];

    for (var j = 1; j < arr_num.length; j++) {
        if (arr_num[j - 1] !== arr_num[j]) {
            uniqu.push(arr_num[j]);
        }
    }
    result.push(uniqu[1], uniqu[uniqu.length - 2]);
    return result.join(',');
}

console.log(lowestAndGreatesNumber([1, 2, 3, 4, 5]));