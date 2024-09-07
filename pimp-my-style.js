export const pimp = (() => {
    let counter = 0;
    return () => {
        let button = document.querySelector('.button');
        if (counter < styles.length) {
            button.classList.add(styles[counter]);
            counter++;
        } else if (counter >= styles.length && counter < (2 * styles.length)) {
            button.classList.remove(styles[2 * styles.length - counter - 1]);
            counter++;
        } else {
            counter = 0;
        }

        if (counter === styles.length || counter === 2 * styles.length) {
            button.classList.toggle('unpimp');
        }
    };
})();

export const styles = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
  ]
  