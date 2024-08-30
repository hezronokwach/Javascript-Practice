const RNA = (dna) => {
    let result = "";
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'C':
                result += 'G';
                break;
            case 'G':
                result += 'C';
                break;
            case 'A':
                result += 'U';
                break;
            case 'T':
                result += 'A';
                break;
            default:
                result = ""
        }

    }
    return result;
}

const DNA = (rna) => {
    let result = "";
    for (let i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case 'C':
                result += 'G';
                break;
            case 'G':
                result += 'C';
                break;
            case 'A':
                result += 'T';
                break;
            case 'U':
                result += 'A';
                break;
            default:
                result = ""
        }

    }
    return result;
}
 //console.log(RNA('TAGC'))