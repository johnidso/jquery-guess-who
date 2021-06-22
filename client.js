console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady(){
    loadImages();

}

// add divs for each person 

function loadImages(){
    for (const person of people){
        $("#peopleImages").append(
            `<img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">`
        );
    }
}

function namePrompt(){
    $("#generatedName").empty();
    $("#generatedName").text();
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);

function matchPerson(indexNumber){
    if(indexNumber == )
}