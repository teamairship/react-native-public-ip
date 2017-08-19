# react-native-ipify

> Get public IP address in React Native

Using the [`ipify` API](https://www.ipify.org)


## Install

```
$ npm install --save react-native-ipify
```


## Usage

```js
import ipify from 'react-native-ipify';

ipify().then(ip => {
	console.log(ip);
	//=> '47.122.71.234'
});
```


## API

### ipify()

Returns a `Promise` for the IP address.

## License

MIT © Alex Hinson
