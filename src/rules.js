//rock beat scissors
//paper beats rock
//scissors beats paper

import Player from "./playerOne";
import Computer from "./playerTwo";

person = new Player();
bot = new Computer();

if (person.choice === "rock" && bot.computer() === "scissors")
    return "You win!";

if (person.choice === "paper" && bot.computer() === "rock")
    return "You win!";

if (person.choice === "scissor" && bot.computer() === "paper")
    return "You win!";

if (person.choice === bot.computer())
    return "It's a tie!";
