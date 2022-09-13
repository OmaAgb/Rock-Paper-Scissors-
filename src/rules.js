import Player from "./playerOne.js";
import Computer from "./playerTwo.js";
class Rules {

    person;
    bot = new Computer();
    computerChoice = this.bot.computer()

    constructor(name, choice) {
        this.person = new Player(name, choice);
    }

    results() {
        if (this.person.choice === "rock" && this.computerChoice === "scissors")
            return "You win!";

        if (this.person.choice === "paper" && this.computerChoice === "rock")
            return "You win!";

        if (this.person.choice === "scissors" && this.computerChoice === "paper")
            return "You win!";

        if (this.person.choice === this.computerChoice)
            return "It's a tie!";
        if (this.computerChoice === "rock" && this.person.choice === "scissors")
            return "Computer wins - unlucky!";

        if (this.computerChoice === "paper" && this.person.choice === "rock")
            return "Computer wins - unlucky!";

        if (this.computerChoice === "scissors" && this.person.choice === "paper")
            return "Computer wins - unlucky!";

    }
}


export default Rules;