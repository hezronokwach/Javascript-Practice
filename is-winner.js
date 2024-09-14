async function isWinner(countryName) {
    try {
        const country = await db.getWinner(countryName);
        
        if (country.continent !== "Europe") {
            return `${countryName} is not what we are looking for because of the continent`;
        }
        
        const results = await db.getResults(country.id);
        
        if (results.length < 3) {
            return `${countryName} is not what we are looking for because of the number of times it was champion`;
        }
        
        const years = results.map(r => r.year).join(', ');
        const scores = results.map(r => r.score).join(', ');
        
        return `${countryName} won the FIFA World Cup in ${years} winning by ${scores}`;
    } catch (e) {
        if (e.message === "Country Not Found") {
            return `${countryName} never was a winner`;
        }
        throw e;
    }
}