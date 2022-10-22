const Letter = require("./Letter");

// The Word constructor is responsible for generating and maintaining an array of Letter objects.
class Word {
    constructor(word){
        this.letters = [];
        // convert word to an array of Letter objects
        for (const letter of word.split(''))
            this.letters.push(new Letter(letter));
    }
    
    // call guess() method for each Letter in the letters array, and return true if at least one letter was guessed correctly. 
    guessLetter(char){
        let nbrOfCorrect = 0;

        for(const letter of this.letters)
            if (letter.guess(char)) 
                nbrOfCorrect++;   // count how many times that letter appears in the word
        
        return nbrOfCorrect > 0; // return true if char is found at least once
    }

    // if every Letter in the letters array is visible, then return true
    guessedCorrectly(){
        let nbrOfCorrect = 0;

        for(const letter of this.letters)
            if (letter.visible) 
                nbrOfCorrect++;   // count how many letters were guessed correctly

        return nbrOfCorrect === this.letters.length;  // return true if all letters were guessed correctly
    }

    // returns a string of every char of the Letter object
    toString(){
        return this.letters.map(ltr => ltr.char).join('');
    }
    
    // returns a string of every char of the Letter object, but makes unguessed chars appear with a '_' char
    toStringUnguessed(){
        return this.letters.map(ltr=> ltr.toString()).join(''); 
    }

    // calls the toString method
    getSolution(){
        return this.toString();
    }
}

module.exports = Word;
