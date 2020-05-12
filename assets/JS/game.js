var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to Fight or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to  choose.");

    // If player decides to fight then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log (
        playerName + " Attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining!"
    );

    // check enemys health
    if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health remaining!");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log (
        enemyName + " Attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining!"
    );
    // check players health
    if (playerHealth <= 0) {
        window.alert(playerName + " has DIED!!!");
    }

    else {
        window.alert(playerName + " has " + playerHealth + " health remaining!" );
    }

    }

    // If Player chooses to skip skip
    else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip this fight!");
        // Confirm User wants to skip
        var confirmSkip = window.confirm("Are you sure you want to skip this battle??")
        // If yes
        if (confirmSkip) {
            window.alert(playerName + " has chose to skip this battle. Goodbye!");
            // Subtract players money
            playerMoney = playerMoney - 2;
        }

        // If no (false)
        else {
            fight();
        }
    }
    else {
        window.alert("You chose an unvaid option! CHOOSE AGAIN!!!")
    }
};

fight();