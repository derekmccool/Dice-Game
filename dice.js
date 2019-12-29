function rollDice(numSides){
    return Math.floor(Math.random() * numSides) + Math.floor(Math.random() * numSides)
}

function resetForm(){
    document.getElementById("results").style.display ="none";
    document.getElementById("userBet").innerText = "";
    document.getElementById("userBet").focus();
}

function diceGame() {
    var startingBet = document.getElementById("userBet").value;
    var betCounter = startingBet;
    var totalRolls = 0;
    var amountWonMax = startingBet;
    var rollsAtMax = 0;
    if (startingBet == ""||isNaN(startingBet) || startingBet < 0 || startingBet % 1 != 0){
        alert("Must bet a whole number grater than 0.");
        document.forms["diceForm"]["num2"].parentElement.className ="form-group has-error";
        document.forms["numberFun"]["num2"].focus();
        return false;
    }
    while (betCounter > 0){
        totalRolls += 1;
        if (rollDice(6) == 7){
            betCounter+= 4;
            if (betCounter > amountWonMax){
                amountWonMax = betCounter;
                rollsAtMax = totalRolls;
                console.log( `Win!!! Number of Rolls: ${totalRolls}, Starting Bet: ${startingBet}, Max: ${amountWonMax}, Rolls at Max: ${rollsAtMax}`)

            }
        }else{
            betCounter-= 1;
            console.log( `Loss!!! Number of Rolls: ${totalRolls}, Starting Bet: ${startingBet}, Max: ${amountWonMax}, Rolls at Max: ${rollsAtMax}`)

        }


    }
    document.getElementById("results").style.display ="block";
    document.getElementById("startingBet").innerText = "$" + startingBet + ".00";
    document.getElementById("totalRolls").innerText = totalRolls;
    document.getElementById("amountWonMax").innerText = "$" + amountWonMax + ".00";
    document.getElementById("rollsAtMax").innerText = rollsAtMax;
    return false;
}

