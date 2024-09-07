export const compose = () => {
    let body = document.querySelector('body');
    document.addEventListener( "keydown",(event) => {
            let eventCode = event.keyCode;
            const keyName = event.key;
            let small = 'abcdefghijklmnopqrstuvwxyz';
            if (small.includes(keyName)) {
                let newDiv = document.createElement('div');
                newDiv.className = 'note';
                let color = "#" + 99 + eventCode + eventCode
                newDiv.style.background = color
                newDiv.textContent = keyName;
                body.appendChild(newDiv);
            }
            if (keyName === "Backspace") {
                let allElements = document.querySelectorAll('.note');
                allElements[allElements.length - 1]?.remove();
            }
            if (keyName === "Escape") {
                let allElements = document.querySelectorAll('.note');
                allElements.forEach(element => element.remove());
            }
        }
    );
}