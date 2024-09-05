export const build = (num) => {
    let body = document.querySelector('body');
    let count = 0;
    
    const addBrick = () => {
        if (count < num) {
            count++;
            let brick = document.createElement('div');
            brick.id = `brick-${count}`;
            if (count % 3 === 2) {
                brick.dataset.foundation = 'true';
            }
            body.appendChild(brick);
            setTimeout(addBrick, 100);
        }
    };
    
    addBrick();

}

export const repair = (...ids) => {
    for (let id of ids) {
        let brick = document.getElementById(id);
        if (brick) {
            if ((id.slice(6) +1 )% 3 === 0) {
                brick.dataset.repaired = 'in progress';
            } else {
                brick.dataset.repaired = 'true';
            }
        }
    }
}

export const destroy = () => {
    let bricks = document.querySelectorAll('[id^="brick-"]');
    if (bricks.length > 0) {
        bricks[bricks.length - 1].remove();
    }
}


