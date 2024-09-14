function queryServers(serverName, q) {
    const url1 = `/${serverName}?q=${encodeURIComponent(q)}`;
    const url2 = `/${serverName}_backup?q=${encodeURIComponent(q)}`;
    
    return Promise.race([getJSON(url1), getJSON(url2)]);
}

async function gougleSearch(q) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 80);

    try {
        const [web, image, video] = await Promise.all([
            queryServers('web', q),
            queryServers('image', q),
            queryServers('video', q)
        ]);

        clearTimeout(timeout);
        return { web, image, video };
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('timeout');
        }
        throw error;
    }
}