# validate-email-hostname [![npm version](https://img.shields.io/npm/v/validate-email-hostname.svg)](https://www.npmjs.com/package/validate-email-hostname) [![Build status](https://img.shields.io/travis/mvila/validate-email-hostname.svg)](https://travis-ci.org/mvila/validate-email-hostname)

Check if the hostname of an email has a MX or A record.

## Installation

```
npm install --save validate-email-hostname
```

## Usage

```javascript
import validateEmailHostname from 'validate-email-hostname';

async function example() {
  let test1 = await validateEmailHostname('steve@apple.com');
  console.log(test1); // => true

  let test2 = await validateEmailHostname('nobody@ynvhunb87cjd.fr');
  console.log(test2); // => false
}
```

## License

MIT
