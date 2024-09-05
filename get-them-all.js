export const getArchitects = () => {
    const architects = Array.from(document.getElementsByTagName('a'));
    const nonArchitects = Array.from(document.getElementsByTagName('span'));
    return [architects, nonArchitects];
}

export const getClassical = () => {
    const classical = Array.from(document.getElementsByClassName('classical'));
    const nonClassical = Array.from(document.querySelectorAll('.modern, .baroque'));
    return [classical, nonClassical];
}

export const getActive = () => {
    const active = Array.from(document.getElementsByClassName('active'));
    const nonActive = Array.from(document.querySelectorAll('a:not(.active), span:not(.active)'));
    return [active, nonActive];
}

export const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano');
    const otherActiveClassical = Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'));
    return [bonannoPisano, otherActiveClassical];
}