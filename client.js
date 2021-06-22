console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady(){
    loadImages();
    namePrompt();
    $("#peopleImages").on("click", '.personImage', matchPerson);
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

// add divs for each person 

function loadImages(){
    for (const person of people){
        $("#peopleImages").append(
            `<img src="https://github.com/${person.githubUsername}.png?size=250" class="personImage" id="${person.name}" alt="Profile image of ${person.name}">`
        );
    }
}

// generate and place a random name

function namePrompt(){
    $("#generatedName").empty();
    let random = randomNumber(0,6);
    let randomPerson = people[random].name;
    $("#generatedName").text(randomPerson);
}


// match the person selected to the correct person

function matchPerson(){
    if($(this).attr("id") == $("#generatedName").text()){
        alert("it's a match!");
        namePrompt();
    } else {
        alert("not a match, try again!");
    }
}
