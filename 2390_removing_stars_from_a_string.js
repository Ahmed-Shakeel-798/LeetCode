function removeStars(inputString) {
    const stack = [];

    for (const letter of inputString) {
        if(letter === "*") {
            stack.pop();
        }else{
            stack.push(letter);
        }
    }

    return stack.join('');
}

console.log(removeStars("leet**cod*e"));