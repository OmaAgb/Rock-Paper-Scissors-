class Computer {

    options = ["rock","paper","scissor"]; 

    computer() {
        const random = Map.floor(Math.random() * this.options.length);

        // math floor google

        return this.options[random]
    }
}
module.exports = Computer;