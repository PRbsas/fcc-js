// Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello"); // a string
reverseString("hello"); // "olleh"
reverseString("Howdy"); // "ydwoH"
reverseString("Greetings from Earth"); // "htraE morf sgniteerG"


// Factorialize a Number
function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
}

factorialize(5); // a number
factorialize(5); // 120
factorialize(10); // 3628800
factorialize(20); // 2432902008176640000
factorialize(0); // 1



// Check for Palindromes
function palindrome(str) {
  // Remove all NON alphanumeric characters:
  var lowC = str.toLowerCase();
  var re = lowC.replace(/[\W_]/g,'');

   // Reverse String:
   var reverseStr = re.split('').reverse().join('');

   return re === reverseStr;
}

palindrome("_eye"); // true
palindrome("race car"); // true
palindrome("not a palindrome"); // false
palindrome("A man, a plan, a canal. Panama"); // true
palindrome("never odd or even"); // true
palindrome("nope"); // false
palindrome("almostomla"); // false
palindrome("My age is 0, 0 si ega ym."); // true
palindrome("1 eye for of 1 eye."); // false
palindrome("0_0 (: /-\ :) 0-0"); // true
palindrome("five|\_/|four"); // false



// Find the Longest Word in a String
function findLongestWord(str) {
  var arr = str.split(' ');
  return arr.sort(function (a, b) {
    return b.length - a.length;
  })[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); // a number
findLongestWord("The quick brown fox jumped over the lazy dog"); // 6
findLongestWord("May the force be with you"); // 5
findLongestWord("Google do a barrel roll"); // 6
findLongestWord("What is the average airspeed velocity of an unladen swallow"); // 8
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); // 19


// Title Case a Sentence
function titleCase(str) {
  var arr = str.toLowerCase().split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
}

titleCase("I'm a little tea pot"); // a string
titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot"
titleCase("sHoRt AnD sToUt"); // "Short And Stout"
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // "Here Is My Handle Here Is My Spout"



// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  var largest = [];
  for(var i = 0; i < arr.length; i++) {
    var a = 0;
    for(var j = 0; j < arr[i].length; j++) {
      if(a< arr[i][j]) {
        a = arr[i][j];
      }
    }
    largest.push(a);
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // an array
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [27,5,39,1001]
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // [9, 35, 97, 1000000]


// Confirm the Ending
function confirmEnding(str, target) {
  for (var i = 0; i < str.length; i++) {
    if (target === str.substr(str.length - target.length)) {
      return true;
    } else {
      return false;
    }
  }
}

confirmEnding("Bastian", "n"); // true
confirmEnding("Connor", "n"); // false
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // false
confirmEnding("He has to give me a new name", "name"); // true
confirmEnding("Open sesame", "same"); //true
confirmEnding("Open sesame", "pen"); // false
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); // false
//Do not use the built-in method .endsWith() to solve the challenge.



// Repeat a string
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return '';
  } else {
    return str.repeat(num);
  }
}

repeatStringNumTimes("*", 3); // "***"
repeatStringNumTimes("abc", 3); // "abcabcabc"
repeatStringNumTimes("abc", 4); // "abcabcabcabc"
repeatStringNumTimes("abc", 1); // "abc"
repeatStringNumTimes("*", 8); // "********"
repeatStringNumTimes("abc", -2); // ""


// Truncate a string
function truncateString(str, num) {
  var newStr = str.substr(0,num);
  var otherStr = str.substr(0,num-3);

  if (num < 3) {
    return newStr + '...';
  } else if (str.length > num + 3) {
    return otherStr + '...';
  }else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11); // "A-tisket..."
truncateString("Peter Piper picked a peck of pickled peppers", 14); // "Peter Piper..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // "A-tisket a-tasket A green and yellow basket"
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); // "A-tisket a-tasket A green and yellow basket"
truncateString("A-", 1); // "A...".
truncateString("Absolutely Longer", 2); // "Ab..."



// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  var lastArr = [];
  while (arr.length) {
    lastArr.push(arr.splice(0,size));
  }
  return lastArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // [[0, 1], [2, 3], [4, 5], [6, 7], [8]]



// Slasher Flick
function slasher(arr, howMany) {
  var sliced = arr.slice(howMany);
  return sliced;
}

slasher([1, 2, 3], 2); // [3]
slasher([1, 2, 3], 0); // [1, 2, 3]
slasher([1, 2, 3], 9); // []
slasher([1, 2, 3], 4); // []
slasher(["burgers", "fries", "shake"], 1); // ["fries", "shake"]
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5); // ["cheese", 4]



// Mutations
function mutation(arr) {
  var arr0 = arr[0].toLowerCase();
  var arr1 = arr[1].toLowerCase();

  for (var i = 0; i < arr1.length; i++) {
    var x = arr0.indexOf(arr1[i]);
    if (x < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]); // false
mutation(["hello", "Hello"]); // true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // true
mutation(["Mary", "Army"]); // true
mutation(["Mary", "Aarmy"]); // true
mutation(["Alien", "line"]); // true
mutation(["floor", "for"]); // true
mutation(["hello", "neo"]); // false
mutation(["voodoo", "no"]); // false



// Falsy Bouncer
function bouncer(arr) {
  arr = arr.filter(function(Boolean) {
    return Boolean;
  });
  return arr;
}

bouncer([7, "ate", "", false, 9]); // [7, "ate", 9]
bouncer(["a", "b", "c"]); // ["a", "b", "c"]
bouncer([false, null, 0, NaN, undefined, ""]); // []
bouncer([1, null, NaN, 2, undefined]); // [1, 2]



// Seek and Destroy
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  arr = arr.filter(function(arr) {
    return args.indexOf(arr) === -1;
  });
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // [1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // [1]
destroyer([2, 3, 2, 3], 2, 3); // []
destroyer(["tree", "hamburger", 53], "tree", 53); // ["hamburger"]



// Where do I belong
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

getIndexToIns([10, 20, 30, 40, 50], 35); // 3
getIndexToIns([10, 20, 30, 40, 50], 30); // 2
getIndexToIns([40, 60], 50); // 1
getIndexToIns([3, 10, 5], 3); // 0
getIndexToIns([5, 3, 20, 3], 5); // 2
getIndexToIns([2, 20, 10], 19); // 2
getIndexToIns([2, 5, 10], 15); // 3



// Caesars Cipher
function rot13(str) { // LBH QVQ VG!
  var newArray = str.split('');
  var code = newArray.map(function(val) {
    a = val.charCodeAt(0);
    if (a < 65 || a > 90) {
      return String.fromCharCode(a);
    } else if (a < 78) {
      return String.fromCharCode(a + 13);
    } else {
      return String.fromCharCode(a - 13);
    }
  });
  var newString = code.join('');
  return newString;
}

rot13("SERR PBQR PNZC"); // "FREE CODE CAMP"
rot13("SERR CVMMN!"); // "FREE PIZZA!"
rot13("SERR YBIR?"); // "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
