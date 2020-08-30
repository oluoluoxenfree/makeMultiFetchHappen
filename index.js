const fetch = require("node-fetch");

const makeMultiFetchHappen = (urls) => {
  return Promise.all(
    urls.map(async (url) => {
      try {
        let rawData = await fetch(url);
        return rawData.json();
      } catch (error) {
        console.log(error);
        throw error;
      }
    })
  );
};

module.exports = makeMultiFetchHappen;
