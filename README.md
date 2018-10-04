# react-native-public-ip

> Get public IP address in React Native

Using the [`ipify` API](https://www.ipify.org)

## Install

```
$ npm install --save react-native-public-ip
```

## Usage

```js
import publicIP from 'react-native-public-ip';

publicIP()
  .then(ip => {
    console.log(ip);
    // '47.122.71.234'
  })
  .catch(error => {
    console.log(error);
    // 'Unable to get IP address.'
  });
```

## API

### publicIP()

Returns a `Promise` for the IP address.

## License

MIT © Alex Hinson
