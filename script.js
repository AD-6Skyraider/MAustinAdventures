// Text Adventure Game
const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const start = `The Super Freakin' Awesome Adventures of MAustin and The Legion of CuthuluDoom! `;

const q1 = `Mild mannered Matt, a coder of pretty little trees, and Austin, coffee maestro of the 12 realms are enjoying a game of Boxception when suddenly... 
They notice a flutter! A stutter! Their VSCode breaks down like butter!
An interruption in the Code and then a villainous ship floats above the city! It's John the BerryBuster and Jamie NOT the St. Aquino! Together known as the Legion of CuthuluDoom! Their ship has cause Austin to spill his coffee in the outdoor cafe!
Matt and Austin touch Power Rings and together they form, MAustin! The Dynamic Array!
1. You take flight to stop the Legion of CuthuluDoom.  
OR
2. You Wait for a coffee refill thinking "none my business.
${enter}`;

const gameOver1 = `You never get your coffee and John the BerryBuster and Jamie NOT the St. Aquino take your Macbooks and go home. ${gameOver}`;

const q2 = `Now in mid-air, you take a mighty swing at the Legion of CuthuluDoom's ship.
1. You connect! Zowie! But it only shocks the amazing ship!
OR
2. You connect! And John the BerryBuster and Jamie NOT the St. Aquino fall out a window!
${enter}`;

const gameOver2 = `John the BerryBuster uses his Force Blast from his Dinner Plate Belt Buckle and Jamie NOT the St. Aquino uses her Cat o' nine tails hair and beats you down. You go home in shame ${gameOver}`;

const q3 = `The ship turns on the 'Mazing Mighty MAustin! It shoots an energy blast at the dynamic, joined power twin superheroes! Your fate rests in their hands! Should you...
1. Pull a Michael Jackson dance move, side-step and evade the blast with ease!
OR
2. Cross your wrist bracelets and deflect the shocking blast!
${enter}`;

const gameOver3 = `KAZHOOM! You successfully evade the blast! Unfortunately, it hits the bathroom of Mayor Browning while he was indisposed and kicks you out of the city.  ${gameOver}`;

const q4 = `SHOOM! You deflect the blast and it hits the sidewalk below, narrowly missing Sheffield Dave who says "Bugger this! I'm going to go spend a penny!" Meanwhile, MAustin, hovering dynamically in mid-air, arms akimbo, sends a ray from the golden star from their headband! The glitter in the star painted around their left eye shimmers in the morning sun!
1. John the BerryBuster maneuvers the ship with deft ease and the beautiful but deadly Jamie NOT the St. Aquino fires a responding ray deflecting MAustin's attempt! She laughs maniacally!
OR
2. KKWWHEEEZZ!! The ray bounces off the force field! Jamie NOT the St. Aquino screams "I've got you now!" And fires the heat ray from the Legion of CuthuluDoom's mighty ship! 
${enter}`;

const gameOver4 = `SHHHHHZZXXX!!! The ray sizzles every strand of hair from MAustin's body. And the once beautiful painted on star, melted and gone. MAustin flies away in shame. ${gameOver}`;

const q5 = `ENOUGH! MAustin, screams, I STILL haven't had my coffee! - And with that, MAustin's arms extend outwards dramatically! The tension is more palpable than a paternity test on Springer! A Great blast emits from the MA on MAustin's chest! 
1. John the BerryBuster emerges from the ship! It's showdown!
OR
2. KRRRRAACHHH!!!! MAustin's Blast hits!
${enter}`;

const gameOver5 = `John the BerryBuster used his Dinner Plate Belt Buckle, deflecting the blast! SHWAZOO! When all of a sudden!! KA-PLOWIE!!!! Jamie NOT the St. Aquino comes out of nowhere with a mighty uppercut! MAustin is defeated!  ${gameOver}`;

const win = `the Legion of CuthuluDoom's ship has been successfully defeated and the ship limps away! The city erupts in celebration of MAustin!! Meanwhile on the sidewalk below, Maianne argues with the street vender, A taco IS a sandwich!!! The End?`;

// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// 1st Conditional Statement
// NOTE: Prompt returns the value entered as a string. That is why double equals == is used instead of triple equals === here.
if (userInput == 1) {
  userInput = prompt(q2);

  // 2nd Conditional Statement
  if (userInput == 1){
    userInput = prompt(q3);

    // 3rd Conditional Statement
    if (userInput == 2) {
      userInput = prompt(q4);

      // 4th Conditional Statement
      if (userInput == 1){
        userInput = prompt(q5);

        // 5th Conditional Statement
        if (userInput == 2) {
          alert(win);
        } else {
          alert(gameOver5);
        }

      } else {
        alert(gameOver4);
      }

    } else {
      alert(gameOver3);
    }

  } else {
    alert(gameOver2);
  }

} else {
  alert(gameOver1);
}