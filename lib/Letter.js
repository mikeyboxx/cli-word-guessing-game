// The Letter constructor is responsible for managing the visible state of the char.
// All non alphanumeric chars are always visible, including spaces
// Char becomes visible only if letter is guessed.
class Letter {
    constructor(ltr){
        this.char = ltr.toLowerCase();;
        this.visible =   !/\w/gi.test(ltr);   // hide only alphanumeric chars 
    }

    // return true if char was guessed and make char visible, else return false
    guess(ltr){
        if (ltr.toLowerCase() === this.char) {
            this.visible = true;  // make visible = true, if char was guessed
            return this.visible;
        } else return false;
    }

    // if char is visible then return it, otherwise return '_'
    toString(){
        return this.visible ? this.char : '_';
    }

    getSolution(){
        return this.char;
    }
}

module.exports = Letter;
