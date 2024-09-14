async function getJSON(path, params = {}) {
    const url = path + '?' + new URLSearchParams(params);
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    if (data.error) throw new Error(data.error);
    return data.data;
}