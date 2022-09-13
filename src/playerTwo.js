class Computer {

    options = ["rock","paper","scissor"]; 

    computer() {
        const random = Math.floor(Math.random() * this.options.length);

        // math floor google

        return this.options[random]
    }
}
export default Computer;