async function getJSON(path, params = null) {
    let constructedUrl = path;
    if (params !== null) {
        constructedUrl += '?' + new URLSearchParams(params).toString();
    }
    
    let response = await fetch(constructedUrl);
    
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    
    let parsedBody = await response.json();
    
    if ('error' in parsedBody) {
        throw new Error(parsedBody.error);
    } else if ('data' in parsedBody) {
        return parsedBody.data;
    } else {
        throw new Error('Invalid response format');
    }
}