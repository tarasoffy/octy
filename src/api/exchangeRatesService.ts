import { API_KEY } from '@env';

export const getExchangeRates = async () => {
  try {
    const res = await fetch(`https://swop.cx/rest/rates?api-key=${API_KEY}`);
    return res.json();
  } catch (error) {
    console.log('error get data', error);
  }
};
