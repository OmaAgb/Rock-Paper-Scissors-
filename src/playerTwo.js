class Computer {

    options = ["rock","paper","scissors"]; 

    computer() {
        const random = Math.floor(Math.random() * this.options.length);
        return this.options[random]
    }
}
export default Computer;