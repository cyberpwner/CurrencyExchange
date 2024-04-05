import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`;

    const fetchData = async (uri) => {
      const response = await fetch(uri);
      const responseData = await response.json();
      return responseData[currency];
    };

    (async () => {
      setData(await fetchData(url));
    })();
  }, [currency]);

  // console.log(data);
  return data;
}

export default useCurrencyInfo;
