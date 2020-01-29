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



console.log(filter_list([1,2,'aasf','1','123',123]))

