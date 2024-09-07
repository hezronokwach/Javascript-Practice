export const createCircle = (event) => {
    let div = document.createElement('div');
    div.className = 'circle';
    div.style.backgroundColor = 'white';
    div.style.position = 'absolute';
    div.style.left = `${event.clientX}px`;
    div.style.top = `${event.clientY}px`;
    document.body.appendChild(div);
    return div;

}
document.addEventListener('click',createCircle);

export const moveCircle = (event) => {
    const lastCircle = document.querySelector('.circle:last-child');
    if (lastCircle) {
        lastCircle.style.left = `${event.clientX}px`;
        lastCircle.style.top = `${event.clientY}px`;
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



