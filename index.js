/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]
 */

function array_diff(a, b) {
  var arr=[];
  if(a.length == 0 || b.length ==0){
    return a
  }else {
    for(var i in a){
      if(b.indexOf(a[i]) == -1){
        arr.push(a[i])
      }
      i++;
    }
  }
  return arr;
}

//console.log(array_diff([1,2],[1]))


/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
*/

function maskify(cc) {
  var final = cc.slice(-4)
  var inicio = cc.slice(0,-4)
   var res = inicio.replace(/\w|\s/g, "#")
   return res.concat(final)
}

//console.log(maskify("4556364607935616"))

/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/
function longest(s1,s2){
  var st = s1.concat(s2);
  var str1 = st.replace(/(.)(?=.*\1)/g, "");
  var arr= [...str1];
  var sortArr = arr.sort()
  return sortArr.toString().replace(/[,\/]/g,"")
  
}

a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'

//console.log(longest(a,b))


/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */
var countBits = function(n) {
  var i=0;
  var num = n.toString(2).split('')
  var num1 = num.reduce((sum, num) => sum + Number(num), 0)
  return num1
};

//console.log(countBits(123442212))


/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(l) {
  var list = l.filter(num => Number.isFinite(num));
  return list
}



//console.log(filter_list([1,2,'aasf','1','123',123]))


/*

Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

Note! a and b are not ordered!

Example: 
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
Waiting for the Feedback! Thanks!

*/

function getSum(a,b){
  var sum = 0;
  if(a === b){
    return a;
  } else if(a < b){  
    for(a; a <= b; a++){
      sum += a;
    }
  } else if(b < a){
    for(b; b <= a; b++){
      sum += b;
    }  
  }
  return sum;
}

//console.log(getSum(-1,2))

/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

*/


/*function sortArray(array) {
  // Return a sorted array.
  indices = [];
  array
    .filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => array[indices[i]] = v)
    return array
}


//console.log(sortArray([5, 3, 2, 8, 1, 4]))


/*


Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/

function expandedForm(num) {
  // Your code here
  var numStr = num.toString().split('');
   for(let i = 0 ; i < numStr.length; i++ ){
      for(let y = numStr.length - i; y > 1; y--){
         numStr[i] += '0'; 
      }
  }
  var num1 = numStr.filter(num => num> 0)
  return num1.join("+")
}

/*
The same as above
function expandedForm(num) {
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}
*/

//console.log(expandedForm(42))

/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
  var zeros=[]
  var num = []
for(let i in arr){
if(arr[i]=== 0){
   zeros.push(arr[i])
 }else{
   num.push(arr[i])
 }
}
 
 return num.concat(zeros)
}
/* Alternative solution
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
*/

//console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))


/* 
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(phrase){
  //TODO Have fun :)
  var array=[]
  var arr = phrase.split(" ")
  for(let i in arr){
    if(arr[i].length >= 5){
      array.push(arr[i].split("").reverse().join(""))
    } else{
      array.push(arr[i])
    }
  }
  return array.join(" ")
}

//console.log(spinWords("Hey fellow warriors"))

/*

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  if(Array.isArray(iterable)){
  return iterable.filter(
    (element,i, array) => {
      return array[i] !== array[i+1]
    }
  )} else{
   return iterable.split("").filter(
    (element,i, array) => {
      return array[i] !== array[i+1]
    }
  )
  }

  
}

//uniqueInOrder('ABBCcAD')


/*

Description:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

*/

/*var solution = function(str){
  array=[]
  if(str.length%2 === 0 ){
  for(let i in str){
    if(i %2 !== 0){
      array.push(str[i-1] + str[i])
    }
  }
  return array
  } else{
    str+="_"
    for(let i in str){
    if(i %2 !== 0){
      array.push(str[i-1] + str[i])
    }
  }
  return array
  }
  
}
*/
solution=s=>(s+'_').matcstring

//solution('abc')


/*

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(string){
    return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string)
}

console.log(isPangram("The quick brown fo jumps over the lazy dog."))