type Operation = "add" | "multiply" | "divide";
type Result = number | string;

const calculator = (a: number, b: number, op: Operation): Result => {
    switch (op) {
        case 'multiply':
            return a * b;
            break;
        case 'divide':
            if (b === 0) throw new Error('Can\'t divide by 0!');
            return a / b;
            break;
        case 'add':
            return a + b;
            break;
        default:
            throw new Error('Operation is not multiply, add or divide!');
    }
}

console.log(calculator(3, 4, "add"));