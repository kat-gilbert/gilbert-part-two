let petName = prompt("Enter your pet's name")
let energy = 0
let happiness = 0

for (let i = 0; i < 6; i++){
let action = prompt("feed, pet, or walk?");

if (action == "feed"){
    energy = (energy + 2);
}

else if (action == "pet"){
    happiness = (happiness + 1);
}

else if (action == "walk"){
if (energy > 0 ){
    happiness = (happiness + 2);
    energy = (energy - 1);
    }
else {alert("Not enough energy to walk!")
}
}
}
console.log("Pet Name: " + petName);
console.log("Happiness: " + happiness);
console.log("Energy: " + energy);
console.log(petName + " has " + happiness + " happiness and " + energy + " energy.");
document.write(petName + " has " + happiness + " happiness and " + energy + " energy.");