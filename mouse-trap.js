export const createCircle = (event) => {
    let div = document.createElement('div');
    div.className = 'circle';
    div.style.backgroundColor = 'white';
    div.style.position = 'absolute';
    div.style.left = `${event.clientX - 25}px`;
    div.style.top = `${event.clientY - 25}px`;
    document.body.appendChild(div);
}
document.addEventListener('click', createCircle);

export const moveCircle = (event) => {
    const lastCircle = document.querySelector('.circle:last-child');
    const box = document.querySelector('.box');
    if (lastCircle && box) {
        const boxRect = box.getBoundingClientRect();
        let newX = event.clientX - 25;
        let newY = event.clientY - 25;
        
        // Constrain the circle within the box
        newX = Math.max(boxRect.left, Math.min(newX, boxRect.right - 50));
        newY = Math.max(boxRect.top, Math.min(newY, boxRect.bottom - 50));
        
        lastCircle.style.left = `${newX}px`;
        lastCircle.style.top = `${newY}px`;

        if (newX >= boxRect.left && newX + 50 <= boxRect.right &&
            newY >= boxRect.top && newY + 50 <= boxRect.bottom) {
            lastCircle.style.background = 'var(--purple)';
        } else {
            lastCircle.style.background = 'white';
        }
    }
}

document.addEventListener('mousemove', moveCircle);

export const setBox = () => {
    let div = document.createElement('div');
    div.className = 'box';
    div.style.position = 'fixed';
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.top = '50%';
    div.style.left = '50%';
    div.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(div);

    const checkCircles = () => {
        const box = document.querySelector('.box');
        const circles = document.querySelectorAll('.circle');
        const boxRect = box.getBoundingClientRect();

        circles.forEach(circle => {
            const circleRect = circle.getBoundingClientRect();
            if (circleRect.left >= boxRect.left &&
                circleRect.right <= boxRect.right &&
                circleRect.top >= boxRect.top &&
                circleRect.bottom <= boxRect.bottom) {
                circle.style.backgroundColor = 'var(--purple)';
            } else {
                circle.style.backgroundColor = 'white';
            }
        });
    };

    document.addEventListener('mousemove', checkCircles);
}



