function getURL(dataSet) {
    const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/gi;
    return dataSet.match(urlRegex) || [];
  }
  
  function greedyQuery(dataSet) {
    const greedyRegex = /https?:\/\/[^\s/$.?#].[^\s]*\?[^&\s]+(?:&[^&\s]+){2,}/gi;
    return dataSet.match(greedyRegex) || [];
  }
  
  function notSoGreedy(dataSet) {
    const notSoGreedyRegex = /https?:\/\/[^\s/$.?#].[^\s]*\?[^&\s]+(?:&[^&\s]+){1,2}(?!&)/gi;
    return dataSet.match(notSoGreedyRegex) || [];
  }
  
  // Example usage
  // const dataSet = `qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you`;
  
  // console.log(getURL(dataSet));
  // console.log(greedyQuery(dataSet));
  // console.log(notSoGreedy(dataSet));