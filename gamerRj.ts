//Method forEach() from Arrays
//We declare an arrayWords to store all strings that user wants and after see each one of them 
let arrayWords:Array<string>=["Marliot","Nina","Seycker Nina","Neymar Merlo"];
//Here we declare a word(String) that user wants search in the array
let keyWord:string="Nina"

//And finally we store the result and print it to the console
let wordToLookingFor:Array<string>=ArrayWord(arrayWords,keyWord);
console.log("This is the result: ");
console.log(wordToLookingFor);

/** Word to search in a words array
 * @param {Array<string>} words - is an array only strings that the user wants
 * @param {string} stringSearch - is the word to search in array words
 */
function ArrayWord(words:Array<string>,stringSearch:string):Array<string>{
    let wordsResult:Array<string>=[];
    words.forEach(element => {
        if(element.match(stringSearch)) wordsResult.push(element);
    });
    return wordsResult;
}