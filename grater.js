/*
 * Danilo Zekovic
 * 4/1/2015
 * 2. Write a function, isGreater(str1, str2) that prints out the whichever
 *  of its parameter strings is lexicographically greater. 
 *  Show it in action.
 */

var isGreater = function(str1, str2) {
  if (str1 > str2){
    return str1;
  }else {
    return str2;
  }
}

print(isGreater("Usein Bolt", "Asafa Powel"));

print(isGreater("ab", "an") + "  test");
