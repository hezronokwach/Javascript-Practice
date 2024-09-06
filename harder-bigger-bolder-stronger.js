export const generateLetters = () => {
    let body = document.querySelector('body')
    let count = 0;
    const addLetters = () => {
        if (count <= 120) {
            count++;
            let letters = document.createElement('div');
            letters.textContent = createRandomString();
            letters.style.fontSize = `${11 + count}px`;
            if (count <= 40) {
                letters.style.fontWeight = '300';
            } else if (count > 40 && count <= 80) {
                letters.style.fontWeight = '400';
            } else {
                letters.style.fontWeight = '600';
            }
            body.appendChild(letters);
            setTimeout(addLetters, 0);
        }
    };

    addLetters();

}
function createRandomString() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    result = chars.charAt(Math.floor(Math.random() * chars.length));
    return result;
}


