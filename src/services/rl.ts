import * as readline from "node:readline"; // <-- O segredo está no "* as"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export default rl;