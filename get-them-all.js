export const getArchitects = () => {
    let architects = [];
    let nonArchitects = [];
    const arch = document.getElementsByTagName('a');
    architects.push(arch);
    const nonArch = document.getElementsByTagName('span');
    nonArchitects.push(nonArch);
    console.log( [architects,nonArchitects])
}

export const getClassical = () => {
    let classical = [];
    let nonclassical = [];
    const classy = document.getElementsByClassName('.classical');
    classical.push(classy);
    const modern = document.getElementsByTagName('.modern');
    nonclassical.push(modern);
    const baroque = document.getElementsByTagName('.baroque');
    nonclassical.push(baroque);
    return [classical,nonclassical];    
}

export const getActive = () => {
    let active = [];
    let nonActive = [];
    const arch = document.querySelectorAll('.classicalactive');
    active.push(arch);
    const nonArch = document.getElementsByTagName('span');
    nonActive.push(nonArch);
    console.log( [active,nonActive])
}
