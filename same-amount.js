const sameAmount = (value, regex1 ,regex2) => {
    regex1 = new RegExp(regex1,g);
    regex1 = new RegExp(regex2,g);
    let match1 = (value.match(regex1) || []).length;
    let match2 = (value.match(regex2) || []).length;
    return match1 === match2;
}