// Vincent Kittrell
// SDI 1405
// Project 3


// Global Variables
    
var theDragon = "Tiamat",
    user = "Mantra Sinatra",
    allie = "Quinzel",
    participate = true,
    battleConfirm = false,
    currentBattle = "",
    type = "",
    depth = 0,
    time = 0,
    roll = 0,
    totalTime = 0,
    playerTurn = true,
    equipmentStatus = ["Dragon shield - 1000",
                "Dragon sword - 1000",
                "Breath cloak - 500",
                "Armor piercing crossbow - 500",
                "Potions - 20"];

// Functions & Procedures

var myProcedure = function(joinYesNo){     // Procedure
    
    if (joinYesNo === true) {     
        allie = "";
        console.log("Nice to meet you, " + user + "!");     // True action
    } else {
        console.log("Since you do not want to slay " + theDragon + " then I might throw into a village full orges to toughen you up along with" + allie + " , who is eager to fight with you. She wants to kill and loot from " + theDragon + " badly.")     // False Action
    };
};

var mybattleFunction = function (Confirm){ // While Loop with nested While Loop
    var battle ="";

    while (Confirm === false)
        {
            console.log("Too bad! Roll out!");
            Confirm = confirm("Have you checked your gear for battle?")
        };
        battle = prompt("Are you ready for battle \"yes\" or \"no\"?", "yes");
        while (battle !="yes")
            {
                console.log("This is just a game with some dice! You can always reroll another character");
                battle = prompt("Are you ready for battle \"yes\" or \"no\"?", "yes");
            };
        currentBattle = battle;
        return currentBattle
};
 
var theTurn = function(jsonCall) // For Loop - lists the content of the json file.
    {
        for (var i=0; i < jsonCall.typeOfTurn.length; i++)
            {
                var turn = jsonCall.typeOfTurn[i];
                console.log("Battle: " + turn.type + "; Steps: " + turn.depth + " steps; Duration: " + turn.time + " minutes; Repet Interval: " + (turn.repet / 5) + " minutes.");
            };
        
            return theTurn;
    };

var changeArray = function(checklist, varLength) // Array Method inside a conditional
    {
        if (varLength < 10)
            {
                checklist.pop();
                checklist.push("New gear is needed for this.");
            };
    };
var theChecklist = function() // Array Function - lists the content of the buddyChecks Array.
    {
        for (var n = 0; n < equipmentStatus.length; n++)
            {
                console.log(equipmentStatus[n]);
            }
                console.log("Equipment and skills checks completed. " + user + " and " + allie + " are now ready to battle.");
    };
// String Function - sets the values of variables to the selected json data.
var theAdventure = function(adventure, jsonCall) {
    turn = prompt("Pick a quest to level up,\nin which " + allie + " and " + user + " can loot from.\n\n\"Goblin village\" \| \"Bat cave\" \| \"Orge river\" \| \"Western Barns\"","Western Barns")
    {
        if (adventure === "Goblin village")
        {
            var turn = jsonCall.typeOfTurn[0];
            depth = turn.depth;
            time = turn.time;
            roll = turn.roll/15;
            return depth, time, roll;
        } else if (adventure === "Bat cave")
        {
            var turn = jsonCall.typeOfTurn[1];
            depth = dive.depth;
            time = dive.time;
            roll = dive.roll/20;
            return depth, time, roll;
        } else if (adventure === "Orge river")
        {
            var turn = jsonCall.typeOfTurn[2];
            depth = turn.depth;
            time = turn.time;
            roll = turn.roll/25;
            return depth, time, roll;
        } else if (adventure === "Western Barns")
        {
            var turn = jsonCall.typeOfTurn[3];
            depth = turn.depth;
            time = turn.time;
            roll = turn.roll/50;
            return depth, time, roll;
        };
    };
};

var rollFunction = function (varTime1, varRoll1) 
    {    
        totalTime = varTime1 + varTime1 + (varRoll1 * 5);
        for (var i = varRoll1; i > 0; i -= .5)
            { 
            console.log(i + " mintues until " + allie + " and " + user + " can level up some more.\n    ...loading...");
            };
    
        console.log(user + " and " + allie + " can loot some more.");
        return totalTime;
    };

var makeAnotherFunction = function(varTime, varRoll) // Boolean Function-nested conditional.
    {
        var mainAnswer = confirm("You and NPC have looted their first quest.\n\nWanna loot again?");
        var allieRequest;
        totalTime = varTime;
        
        if (mainAnswer === false)
            {
                console.log( + user + " needs to rest.");
                return totalTime;
            } else
            {
                allieRequest = confirm("Can the NPC do another quest?");
                if (allieRequest === false)
                {
                    console.log( allie + " is an NPC. If you rest then " + allie + " must rest.");
                    return totalTime;
                } else
                    {
                    rollFunction(varTime, varRoll);
                    return totalTime;
                    }
            }
    };

var player1Turn = function()
{
    var turn = 0;
    
    while (playerTurn === true)
        {
            turn = parseInt(turn)+1;
            
            participate = confirm("This is turn " + turn + " of this new adventure to slay " + theDragon + ".\n\nWould you like to take NPC " + allie + " with you?");
        
            myProcedure(participate);
        
            console.log("Both you and " + allie + " need to check your gear.");
            battleConfirm = confirm("Are you ready?");
        
            mybattleFunction(battleConfirm);
        
            console.log("Since yours and the NPC is okay, then it is adventure time.");
        
            console.log("You have chosen " + type + " for your quest you and " + user + " will happily loot from.");
        
            console.log("This quest has some details to be known:\n--the quest may have steps of "+depth+" per turn.\n--Will have turns of "+time+" minutes.\n--May take you "+roll+" rolls to complete, if not more.");
        
            changeArray(equipmentStatus, depth);
            theChecklist();
            makeAnotherFunction(time);
            if (type === "Western Barns")
                {
                    alert("After kicking some cowboy lizard's butt, you found out some new info on Tiamat.")
                };
            console.log(user + " and " + allie + " just quested for loot and XP for " + (totalTime/5) + " minutes.");
            
            player1Turn = confirm("Would you like to slay " + theDragon + " and protect the realm?")
        };
    
    alert("Thank you for reading my story " + user + ". I hope you enjoyed it.");
    return player1Turn
};

// Main Code

user = prompt("Time for an adventure! Who may you be?");
alert("Well " + user + " it is time to level up because " + theDragon + " is enslaving the world bit by bit. You need to first take out some goblins for some target practice.\nShall we get started?");
console.log(theDragon + " is looking for something to kill Bahamat. You've been choosen for this. Get over it!");

player1Turn();
