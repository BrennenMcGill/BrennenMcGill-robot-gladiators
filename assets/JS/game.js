var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ['Roborto','Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }


    var fight = function(enemyNames) {
            // ask user if they'd liked to fight or run
            var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        
            while (playerHealth > 0 && enemyHealth > 0) {
    

            // if user picks "skip" confirm and then stop the loop
            if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "s") {
              // confirm user wants to skip
              var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
              // if yes (true), leave fight
              if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
              }
            }

             // remove enemy's health by subtracting the amount set in the playerAttack variable
             enemyHealth = enemyHealth - playerAttack;
             console.log(
             playerName + ' attacked ' + enemyNames + '. ' + enemyNames + ' now has ' + enemyHealth + ' health remaining.'
             );

             // check enemy's health
             if (enemyHealth <= 0) {
             window.alert(enemyNames + ' has died!');

             // award player money for winning
             playerMoney = playerMoney + 20;

             // leave while() loop since enemy is dead
             break;
             } else {
             window.alert(enemyNames + ' still has ' + enemyHealth + ' health left.');
             }

             // remove players's health by subtracting the amount set in the enemyAttack variable
             playerHealth = playerHealth - enemyAttack;
             console.log(
             enemyNames + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
             );

             // check player's health
             if (playerHealth <= 0) {
             window.alert(playerName + ' has died!');
             // leave while() loop if player is dead
             break;
             } else {
             window.alert(playerName + ' still has ' + playerHealth + ' health left.');
             }

         }
    };
        



var startGame =function() {
// reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;


    for(var i = 0; i < enemyNames.length ; i++) {
        if (playerHealth > 0) {
    // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
        enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);;
        }
    
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};

var endGame = function(){

    if (playerHealth > 0) {
        window.alert("Congratulations you won the game!!");
    }

    else {
        window.alert("You lose too bad... git good scrub");
    }

    var playAgianConfirm = window.confirm("Would you like to play again?");

    if (playAgianConfirm) {
        startGame();
    }

    else {
        window.alert("Thank you for playing 'Robot Gladiators!!' come back soon.");
    }
}


startGame();