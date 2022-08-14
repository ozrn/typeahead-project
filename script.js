const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const getCities = async () => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return cities.push(...data);
}
getCities();
