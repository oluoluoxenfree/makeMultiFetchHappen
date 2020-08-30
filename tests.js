const makeMultiFetchHappen = require("./index");
const assert = require("assert");

const urls = [
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json",
];

it("assertion fail", async (done) => {
  const data = await makeMultiFetchHappen(urls);
  console.log(JSON.stringify(data, null, 2));
  try {
    assert(data === 199);
  } catch (error) {
    console.log(error);
    throw error;
  }
  done();
});
