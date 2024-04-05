import { useCallback, useEffect, useRef, useState } from 'react';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import Button from './components/Button';

function App() {
  const [amount, setAmount] = useState(0);
  const [originCurrency, setOriginCurrency] = useState('eur');
  const [destCurrency, setDestCurrency] = useState('mad');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(originCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  const formRef = useRef(null);

  const convert = useCallback(() => {
    setConvertedAmount(amount * currencyInfo[destCurrency]);
  }, [amount, currencyInfo, destCurrency]);

  const swapCurrencies = () => {
    setOriginCurrency(destCurrency);
    setDestCurrency(originCurrency);
  };

  const onAmountChange = ({ target: { value } }) => {
    const newAmount = Number(value);

    setAmount(newAmount);
  };

  const onCurrencyChange = (callback) => {
    return ({ target: { value } }) => {
      const newCurrency = value;

      callback(newCurrency);
    };
  };

  const handleSubmit = (event) => {
    event?.preventDefault();
    convert();
  };

  useEffect(() => {
    convert();
  }, [originCurrency, destCurrency, amount, convertedAmount, convert]);

  return (
    <main
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
      }}
    >
      <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1">
        <InputBox
          className="input-box"
          label="From"
          amount={Number(amount.toFixed(2))}
          onAmountChange={onAmountChange}
          currencyOptions={currencyOptions}
          selectedCurrency={originCurrency}
          onCurrencyChange={onCurrencyChange(setOriginCurrency)}
        />

        <Button
          className="flex place-self-center bg-blue-600 border-2 border-white rounded-md text-white px-2 py-2 -my-2.5 z-10"
          handleClick={swapCurrencies}
        >
          <FaLongArrowAltUp className="-mr-1.5" />
          <FaLongArrowAltDown />
        </Button>

        <InputBox
          className="input-box"
          label="To"
          amount={Number(convertedAmount.toFixed(2))}
          onAmountChange={onAmountChange}
          currencyOptions={currencyOptions}
          selectedCurrency={destCurrency}
          onCurrencyChange={onCurrencyChange(setDestCurrency)}
          amountDisabled
        />
      </form>
    </main>
  );
}

export default App;
