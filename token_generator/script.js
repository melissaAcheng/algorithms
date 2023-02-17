// const tokens = {
// 	$LOCATION$: "park",
// 	$ANIMAL$: "dog",
// };

const text = document.getElementById("text-input");
const resultBox = document.getElementById("result-box");
const button = document.getElementById("button");
const key1 = document.getElementById("key-1");
const value1 = document.getElementById("value-1");
const key2 = document.getElementById("key-2");
const value2 = document.getElementById("value-2");
const keyValBtn = document.getElementById("key-value-btn");

const tokens = {};

keyValBtn.onclick = () => {
	const key1Input = key1.value;
	const value1Input = value1.value;
	const key2Input = key2.value;
	const value2Input = value2.value;

	tokens[key1Input] = value1Input;
	tokens[key2Input] = value2Input;

	console.log(tokens);
};

button.onclick = displayText;

function displayText() {
	const textInput = text.value;
	console.log(textInput);
	const newText = tokenReplacer(tokens, textInput);
	console.log(newText);

	resultBox.innerHTML = `<p>${newText}</p>`;
}

function tokenReplacer(tokens, text) {
	let output = [];
	let i = 0;
	let j = 1;

	while (i < text.length) {
		if (text[i] !== "$") {
			output.push(text[i]);
			i += 1;
			j = i + 1;
		} else if (text[j] !== "$") {
			j += 1;
		} else {
			const key = text.slice(i, j + 1);
			output.push(tokens[key]);
			i = j + 1;
			j = i + 1;
		}
	}
	return output.join("");
}
