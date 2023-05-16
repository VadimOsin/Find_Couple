export const generateExamples = ({ setCards, size }) => {
    const newCards = [];
    const examples = generateUniqueExamples((size * size) / 2);

    examples.forEach((example) => {
        newCards.push({ type: "example", content: example });
        newCards.push({ type: "answer", content: calculateAnswer(example) });
    });

    setCards(newCards);
};


const generateUniqueExamples = (count) => {
    const examples = new Set();
    while (examples.size < count) {
        const example = generateExample();
        examples.add(example);
    }
    return Array.from(examples);
};


const generateExample = () => {
    const number1 = Math.floor(Math.random() * 10) + 1;
    const number2 = Math.floor(Math.random() * 10) + 1;
    const operator = Math.random() < 0.5 ? "+" : "-";
    return `${number1} ${operator} ${number2}`;
};


const calculateAnswer = (example) => {

    const parts = example.split(" ");
    const number1 = parseInt(parts[0]);
    const operator = parts[1];
    const number2 = parseInt(parts[2]);
    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "-") {
        return number1 - number2;
    }
};