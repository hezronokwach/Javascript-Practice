const sameAmount = (value, regex1, regex2) => {
    regex1 = new RegExp(regex1, 'g');
    regex1 = new RegExp(regex2, 'g')
    let match1 = value.match(regex1)
    let match2 = value.match(regex2)
    return ((match1 !== null && match2 !== null) && (match1.length === match2.length))
}