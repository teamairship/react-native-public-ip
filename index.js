export default async endpoint => {
  const response = await fetch(endpoint || 'https://api.ipify.org');
  const ip = response.text();
  return ip;
};
