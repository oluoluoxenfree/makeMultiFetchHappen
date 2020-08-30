const fetch = require("node-fetch");

const makeMultiFetchHappen = (urls) => {
  if (Array.isArray(urls) !== true) {
    throw new Error("Please input an array");
  }
  return Promise.all(
    urls.map(async (url) => {
      try {
        if (typeof url !== "string") {
          throw new Error("Please only put strings in the array");
        }
        let rawData = await fetch(url);
        return rawData.json();
      } catch (error) {
        throw error;
      }
    })
  );
};

module.exports = makeMultiFetchHappen;
