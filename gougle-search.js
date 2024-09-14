async function queryServers(serverName, q) {
    const url = `/${serverName}?q=${q}`;
    const backupUrl = `/${serverName}_backup?q=${q}`;
    return Promise.race([getJSON(url), getJSON(backupUrl)]);
}

async function gougleSearch(q) {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), 80)
    );
    
    const queries = Promise.all([
        queryServers('web', q),
        queryServers('image', q),
        queryServers('video', q)
    ]);

    try {
        const [web, image, video] = await Promise.race([timeout, queries]);
        return { web, image, video };
    } catch (error) {
        throw error;
    }
}