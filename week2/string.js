let s = "Hello World"

function lengthOfLastWord(s) {
   
    let words = s.split(" "); 
   
    let lastWord = words[words.length - 1];


    return lastWord.length;
}

console.log(lengthOfLastWord(s)); 

console.log("===================================")

let str = "   fly me to the moon   ";

function lengthOfLastWord(str) {
    
    str = str.trim();

    
    let words = str.split(" ");

    
    let lastWord = words[words.length - 1];

 
    let length = lastWord.length;

   
    return length;
}

console.log(lengthOfLastWord(str)); 

console.log("===================================")

function isAnagram(str1, str2) {
    // 
    let s1 = str1.replace(/\s/g, "").toLowerCase();
    let s2 = str2.replace(/\s/g, "").toLowerCase();

    
    let sorted1 = s1.split("").sort().join("");
    let sorted2 = s2.split("").sort().join("");

    
    return sorted1 === sorted2;
}

console.log(isAnagram('listen', 'silent')); 
console.log(isAnagram('hello', 'world'));   
console.log(isAnagram('Dormitory', 'Dirty room')); 