export const generateClasses = () => {
    let head = document.querySelector('head');
    let style = document.createElement('style');
    let styleContent = '';

    for (let color of colors) {
        styleContent += `.${color} {
            background: ${color};
        }\n`;
    }

    style.textContent = styleContent;
    head.appendChild(style);
    console.log()
}

export const generateColdShades = () => {
    let body = document.querySelector('body');
    for (let color of colors) {
        if (color.includes('aqua') || color.includes('blue') || 
            color.includes('turquoise') || color.includes('green') || 
            color.includes('cyan') || color.includes('navy') || 
            color.includes('purple')) {
            let div = document.createElement('div');
            div.className = color;
            div.textContent = color;
            body.appendChild(div);
        }
    }
}

export const choseShade = (shade) => {
    let div = document.querySelectorAll('div');
    for (let divElement of div){
        divElement.className = '';
        divElement.classList.add(shade)
    }
}

export const colors = [
    'indianred',
    'lightcoral',
    'salmon',
    'darksalmon',
    'lightsalmon',
    'crimson',
    'red',
    'firebrick',
    'darkred',
    'pink',
    'lightpink',
    'hotpink',
    'deeppink',
    'mediumvioletred',
    'palevioletred',
    'orange',
    'coral',
    'tomato',
    'orangered',
    'darkorange',
    'yellow',
    'gold',
    'lightyellow',
    'lemonchiffon',
    'lightgoldenrodyellow',
    'papayawhip',
    'moccasin',
    'peachpuff',
    'palegoldenrod',
    'khaki',
    'darkkhaki',
    'lavender',
    'thistle',
    'plum',
    'violet',
    'orchid',
    'fuchsia',
    'magenta',
    'mediumorchid',
    'mediumpurple',
    'rebeccapurple',
    'blueviolet',
    'darkviolet',
    'darkorchid',
    'darkmagenta',
    'purple',
    'indigo',
    'slateblue',
    'darkslateblue',
    'green',
    'greenyellow',
    'chartreuse',
    'lawngreen',
    'lime',
    'limegreen',
    'palegreen',
    'lightgreen',
    'mediumspringgreen',
    'springgreen',
    'mediumseagreen',
    'seagreen',
    'forestgreen',
    'darkgreen',
    'yellowgreen',
    'olivedrab',
    'olive',
    'darkolivegreen',
    'mediumaquamarine',
    'darkseagreen',
    'lightseagreen',
    'darkcyan',
    'teal',
    'aqua',
    'cyan',
    'lightcyan',
    'paleturquoise',
    'aquamarine',
    'turquoise',
    'mediumturquoise',
    'darkturquoise',
    'cadetblue',
    'steelblue',
    'lightsteelblue',
    'powderblue',
    'lightblue',
    'skyblue',
    'lightskyblue',
    'deepskyblue',
    'dodgerblue',
    'cornflowerblue',
    'mediumslateblue',
    'royalblue',
    'blue',
    'mediumblue',
    'darkblue',
    'navy',
    'midnightblue',
    'brown',
    'cornsilk',
    'blanchedalmond',
    'bisque',
    'navajowhite',
    'wheat',
    'burlywood',
    'tan',
    'rosybrown',
    'sandybrown',
    'goldenrod',
    'darkgoldenrod',
    'peru',
    'chocolate',
    'saddlebrown',
    'sienna',
    'maroon',
    'white',
    'snow',
    'honeydew',
    'mintcream',
    'azure',
    'aliceblue',
    'ghostwhite',
    'whitesmoke',
    'seashell',
    'beige',
    'oldlace',
    'floralwhite',
    'ivory',
    'antiquewhite',
    'linen',
    'lavenderblush',
    'mistyrose',
    'gainsboro',
    'lightgray',
    'silver',
    'darkgray',
    'gray',
    'dimgray',
    'lightslategray',
    'slategray',
    'darkslategray',
    'black',
]
