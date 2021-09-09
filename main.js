
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
  //Declares a function that selects random words from an array.
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
/*Declares the storyText variable which holds the initial string with no changes.*/

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY =['the soup kitchen', 'Disneyland', 'The White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
//Created 3 arrays with 3 strings each.

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);
/*Declared 3 variables and their values will be a random string from its corresponding array.*/

var newStory = storyText;
//Declares a new variable called newStory that holds the same value as storyText

newStory = newStory.replace(':inserty:',yItem);
newStory = newStory.replace(':insertz:',zItem);
newStory = newStory.replace(':insertx:',xItem);
newStory = newStory.replace(':insertx:',xItem);
/*These all replace the respective values in the original text with the random strings.*/


randomize.addEventListener('click', result);
//When the button is clicked it will generate a random story
function result() {

  if(customName.value !== '') {
    let name = customName.value;

    newStory= newStory.replace('Bob', name);
    /*This function lets a person type something into an input field and replaces "Bob" in the story with that input.*/
  }


  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 * 0.0714286) + 'Stone';
    let temperature =  Math.round((94-32)*5/9) + 'Celsius';
    /*If the UK field is clicked, this converts the US measurements to UK measurements*/

    newStory= newStory.replace('300 pounds', weight);
    newStory= newStory.replace('94 fahrenheit', temperature);
    //Replaces the US measurements with UK measurements when UK is clicked.

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
  //This prints the story on the screen.
}