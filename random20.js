/*
 * Danilo Zekovic
 * 4/1/2015
 * Javascript 101
 * problem 1
 * 1. Write a program that creates an array, called arr, 
 * and fill it with 20 random numbers between 10 and 200.  Print the result.
 */

var arr = [];

var populateArr = function(arr) {
  for (var i = 0; i< 20; ++i){
    arr[i] = Math.floor((Math.random() * (200-10+1) + 10));
  }
}
populateArr(arr);
for (var i = 0; i < arr.length; ++i){
  print(arr[i]);
}
