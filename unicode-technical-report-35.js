const format = (date, formatString) => {
    let result = '';
    let buffer = '';

    for (let i = 0; i < formatString.length; i++) {
        const char = formatString[i];

        if (i > 0 && char === formatString[i - 1]) {
            buffer += char;
        } else {
            if (buffer) {
                // Process the buffer if it's not empty
                result += processFormatSpecifier(date, buffer);
                buffer = '';
            }

            buffer = char;
        }
    }
    if (buffer) {
        result += processFormatSpecifier(date, buffer);
    }

    return result;
};

function processFormatSpecifier(date, specifier) {
    switch (specifier) {
        case 'y':
            if (date.getFullYear() < 0) {
                return Math.abs(date.getFullYear()).toString();
            } else {
                return date.getFullYear().toString();
            }
        case 'yyyy':
            if (date.getFullYear() < 0) {
                return Math.abs(date.getFullYear()).toString().padStart(4 , '0');
            } else {
                return date.getFullYear().toString();
            }
        case 'G':
            return date.getFullYear() < 0 ? 'BC' : 'AD';
        case 'GGGG':
            return date.getFullYear() < 0 ? 'Before Christ' : 'Anno Domini';
        case 'M':
            return (date.getMonth() + 1).toString();
        case 'MM':
            return (date.getMonth() + 1).toString().padStart(2, '0');
        case 'MMM':
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return monthNames[date.getMonth()];
        case 'MMMMM':
            const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return monthNamesShort[date.getMonth()];
        case 'E':
            const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return dayNames[date.getDay()];
        case 'EEEE':
            const dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            return dayNamesShort[date.getDay()];
        case 'd':
            return date.getDate().toString();
        case 'dd':
            return date.getDate().toString().padStart(2, '0');
        case 'H':
            return date.getHours().toString();
        case 'HH':
            return  date.getHours().toString().padStart(2, '0');
        case 'h' :
            return (date.getHours() % 12).toString();
        case 'hh':
            return (date.getHours() % 12).toString().padStart(2, '0');        
        case 'm':
            return date.getMinutes().toString();
        case 'mm':
            return date.getMinutes().toString().padStart(2, '0');
        case 's':
            return date.getSeconds().toString();
        case 'ss':
            return date.getSeconds().toString().padStart(2, '0');
        case 'a':
            return date.getHours() >= 12 ? 'PM' : 'AM';
        default:
            return specifier; 
    }
}

// Example usage
const d = new Date(-585, 4, 28)
console.log(format(d, 'yyyy'));