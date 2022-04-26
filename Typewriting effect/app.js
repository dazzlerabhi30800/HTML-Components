// const texts = ['websites', 'illustrations', 'animations'];
const texts = ['FrontEnd', 'Developer'];
let count = 0;  // Counts for words in texts
let index = 0;  // Index is for individual letters in texts
let currentText = '';
let letter = '';

(function typeOf(){
    if(count >= texts.length){
        count = 0;

    }
    currentText = texts[count];
    // console.log(currentText);
    letter = currentText.slice(0,index++);
    // console.log(letter);

    document.querySelector('.typing').textContent = letter;
    if(letter.length == currentText.length){
        count++;
        index = 0;

    }

    setTimeout(typeOf,150)

}());


