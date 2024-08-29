const nasa = (N) => {
    let result = [];
    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 && i% 5 === 0) {
            result.push('NASA');
        } else if (i % 3 === 0) {
            result.push(('NA'));
        } else if (i % 5 === 0) {
            result.push('SA');
        } else {
            result.push(i)
        }
    }
    return result.join(' ');
}
//console.log(nasa(15))
// t(({ eq }) => eq(nasa(15), '1 2 NA 4 SA NA 7 8 NA SA 11 NA 13 14 NASA'))