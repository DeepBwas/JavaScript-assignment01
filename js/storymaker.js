// Assignment 1 | COMP1073 Client-Side JavaScript
// Deep Biswas | 200554124
/* Variables -------------------------------------------------- */
// Constants for main button query selectors
let buttons = document.getElementsByTagName('button');
const noun1Button = document.querySelector("#noun1");
const verbButton = document.querySelector("#verb");
const adjectiveButton = document.querySelector("#adjective");
const noun2Button = document.querySelector("#noun2");
const settingButton = document.querySelector("#setting");

// Constants for p tag to display query selectors
const stdId = document.querySelector("#studentId");
const noun1Out = document.querySelector("#choosenNoun1");
const verbOut = document.querySelector("#choosenVerb");
const adjectiveOut = document.querySelector("#choosenAdjective");
const noun2Out = document.querySelector("#choosenNoun2");
const settingOut = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const showStory = document.querySelector("#playback");
const randomStory = document.querySelector("#random");
const reset = document.querySelector("#reset");
const storyOut = document.querySelector("#story");

// Variables for pre-defined arrays
noun1Array = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
noun2Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
settingArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]; 

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions -------------------------------------------------- */
// Display student id for all buttons
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        stdId.textContent = "200554124";
    });
}

// Make the opacity 0 for all p tags when page loads
stdId.style.opacity = "0";
noun1Out.style.opacity = "0";
verbOut.style.opacity = "0";
adjectiveOut.style.opacity = "0";
noun2Out.style.opacity = "0";
settingOut.style.opacity = "0";
storyOut.style.opacity = "0";

// Make the opacity 1 for all p tags when textcontent is not 'Dummy'
if (stdId.textContent !== "Dummy"){
    // Make the opacity 1
    stdId.style.opacity = "1";
}
if (noun1Out.textContent !== "Dummy"){
    // Make the opacity 1
    noun1Out.style.opacity = "1";
}
if (verbOut.textContent !== "Dummy"){
    // Make the opacity 1
    verbOut.style.opacity = "1";
}
if (adjectiveOut.textContent !== "Dummy"){
    // Make the opacity 1
    adjectiveOut.style.opacity = "1";
}
if (noun2Out.textContent !== "Dummy"){
    // Make the opacity 1
    noun2Out.style.opacity = "1";
}
if (settingOut.textContent !== "Dummy"){
    // Make the opacity 1
    settingOut.style.opacity = "1";
}

// Variables for live array elements
let noun1Live, verbLive, adjectiveLive, noun2Live, settingLive;

function noun1_on_click(){
    // Variable to get array element and displaying it
    noun1Out.textContent = noun1Array[noun1Count];
    noun1Live = noun1Array[noun1Count];
    noun1Count++; // Incrementing count
    // if-else to change count setting
    if (noun1Count > 6) {
        noun1Count = 0;
    }
}

function verb_on_click(){
    // Variable to get array element and displaying it
    verbOut.textContent = verbArray[verbCount];
    verbLive = verbArray[verbCount];
    verbCount++; // Incrementing count
    // if-else to change count setting
    if (verbCount > 5) {
        verbCount = 0;
    }
}

function adjective_on_click(){
    // Variable to get array element and displaying it
    adjectiveOut.textContent = adjectiveArray[adjectiveCount];
    adjectiveLive = adjectiveArray[adjectiveCount];
    adjectiveCount++; // Incrementing count
    // if-else to change count setting
    if (adjectiveCount > 5) {
        adjectiveCount = 0;
    }
}

function noun2_on_click(){
    // Variable to get array element and displaying it
    noun2Out.textContent = noun2Array[noun2Count];
    noun2Live = noun2Array[noun2Count];
    noun2Count++; // Incrementing count
    // if-else to change count setting
    if (noun2Count > 6) {
        noun2Count = 0;
    }
}

function setting_on_click(){
    // Variable to get array element and displaying it
    settingOut.textContent = settingArray[settingCount];
    settingLive = settingArray[settingCount];
    settingCount++; // Incrementing count
    // if-else to change count setting
    if (settingCount > 5) {
        settingCount = 0;
    }
}

// Concatenate the user story and display
function playback_on_click(){
    if (noun1Live !== undefined && verbLive !== undefined && adjectiveLive !== undefined && noun2Live !== undefined && settingLive !== undefined){
        storyOut.textContent = noun1Live + " " + verbLive + " " + adjectiveLive + " " + noun2Live + " " + settingLive + ".";
    }
}

let nounFunctions = [noun1_on_click, noun2_on_click];
let otherFunctions = [verb_on_click, adjective_on_click, setting_on_click];

// Grabbing random element from arrays, concatenate and display
function random_on_click(){
    // Define the number of times to run the functions
    let nounTimes = 6;
    let otherTimes = 5;

    // Run the functions numTimes times
    for (let i = 0; i < nounTimes; i++){
        // Generate a random index for nounFunctions
        let index = Math.floor(Math.random() * nounFunctions.length);
        // Call the function at the random index
        nounFunctions[index]();
    }
    for (let i = 0; i < otherTimes; i++){
        // Generate a random index for otherFunctions
        let index2 = Math.floor(Math.random() * otherFunctions.length);
        // Call the function at the random index
        otherFunctions[index2]();
    }

    // Display the story
    storyOut.textContent = noun1Live + " " + verbLive + " " + adjectiveLive + " " + noun2Live + " " + settingLive + ".";
}

// Reset the story
function reset_on_click(){
    stdId.textContent = "Dummy";
    noun1Out.textContent = "Dummy";
    verbOut.textContent = "Dummy";
    adjectiveOut.textContent = "Dummy";
    noun2Out.textContent = "Dummy";
    settingOut.textContent = "Dummy";
    storyOut.textContent = "Dummy";
    noun1Count = 0;
    verbCount = 0;
    adjectiveCount = 0;
    noun2Count = 0;
    settingCount = 0;
    noun1Live = "";
    verbLive = "";
    adjectiveLive = "";
    noun2Live = "";
    settingLive = "";
}

/* Event Listeners -------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
showStory.addEventListener('click', playback_on_click);
randomStory.addEventListener('click', random_on_click);
reset.addEventListener('click', reset_on_click);

// Select the p tags
let pTags = document.getElementsByTagName('p');

// Create a MutationObserver instance
let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type == 'childList') {
            let target = mutation.target;
            if (target.textContent === "Dummy") {
                target.style.opacity = "0";
            } else {
                target.style.opacity = "1";
            }
        }
    });
});

// Options for the observer (which mutations to observe)
let config = { childList: true };

// Start observing the p tags for configured mutations
for (let i = 0; i < pTags.length; i++){
    observer.observe(pTags[i], config);
}