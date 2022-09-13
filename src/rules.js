//rock beat scissors
//paper beats rock
//scissors beats paper

import Player from "./playerOne.js";
import Computer from "./playerTwo.js";
class Rules{

    person;
    bot = new Computer();
    computerChoice = this.bot.computer()

    constructor(name, choice) {
        this.person = new Player(name, choice);
    }

    results() {
        if (this.person.choice === "rock" && this.computerChoice=== "scissors")
            return "You win!";

        if (this.person.choice === "paper" && this.computerChoice === "rock")
            return "You win!";

        if (this.person.choice === "scissor" && this.computerChoice === "paper")
            return "You win!";

        if (this.person.choice === this.computerChoice)
            return "It's a tie!";
    }
  
// add computer ifs  x3 - computer wins-
}


export default Rules