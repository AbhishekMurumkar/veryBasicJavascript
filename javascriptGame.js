"use strict";
var outcome;
window.alert("one day you wake up and find yourself in disneyland");
var beginningScenarios = [
    "winter",
    "summer",
    "fall",
    "spring"
];

function randomNumber(range) {
    if (typeof range === "number") {
        return Math.round(Math.random() * range);
    }
}

window.alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);

var character = {
        health: 5,
        strength: 0,
        stealth: 0,
        name: window.prompt("what is your name?"),
        characterClass: window.prompt("What were you before?" (Choose from: soldier, doctor, politician)
            ").toLowerCase()
        };

        if (!character.name) {
            character.name = window.prompt("No name?");
            if (!character.name) {
                window.alert("I did try to warn");
                character.name = "Gunther Paddles";
            }
        }

        if (character.characterClass === "soldier") {
            character.strength = 5;
        }
        if (character.characterClass === "politician") {
            character.strength = 3;
        }
        if (character.characterClass === "doctor") {
            character.strength = 3;
        }

        var choice = window.prompt("The brave adventure " + character.characterClass + " " + character.name + " enter the cabin.").toLowerCase();
