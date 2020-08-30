# makeMultiFetchHappen

A (local!) package for fetching JSON from several URLs at once. Returns a promise.

## Installation

Download this repo to somewhere precious, and, more importantly, easy to remember the path to.

Once your project is initialised, you can install the package by replacing the path in angle brackets with the location of the folder:

`npm install --save <../path/to/makeMultiFetchHappen`>

## Usage

```js
makeMultiFetchHappen(urls).then((data) => {
    theMagicHappens(data);
    console.log(JSON.stringify(data, null, 2));
});
```

## Testing

Run `npm run test`. Uses Mocha.

## Module Choices

### node-fetch

- lightweight
- similar to the window.fetch we all know and love, so should be easier for others to pick up and use or adapt
- uses the MIT license

### Mocha

- most depended on library in npm, so hopefully other people working on or with the package would be familiar with it
- uses a MIT license

## Given just a little more time...

- Add an error that says which url has thrown when there is an error
- Add validation saying that an endpoint doesn't return JSON
- Add JSDoc documentation and a build step for that
- More jokes
