export default async endpoint => {
  try {
    const response = await fetch(endpoint || 'https://api.ipify.org');
    const ip = response.text();
    return ip;
  } catch (e) {
    throw 'Unable to get IP address.';
  }
};
