import PropTypes from 'prop-types';
import { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions,
  selectedCurrency,
  onCurrencyChange,
  amountDisabled,
  className,
}) {
  const currencyId = useId();
  const amountId = useId();

  return (
    <section
      className={`bg-white py-3 px-3 rounded-lg text-sm grid grid-cols-2 justify-between ${className}`}
    >
      <section className="grid grid-rows-2 grid-cols-1 justify-start">
        <label htmlFor={`amount-${amountId}`} className="text-black/40">
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent"
          type="number"
          name="amount"
          id={`amount-${amountId}`}
          placeholder="Amount"
          value={amount}
          onChange={onAmountChange}
          disabled={amountDisabled}
          min={0}
        />
      </section>

      <section className="text-right">
        <label
          htmlFor={`currency-${currencyId}`}
          className="text-black/40 grid grid-rows-2 justify-end w-full"
        >
          Currency
          <select
            id={`currency-${currencyId}`}
            name="currency"
            className="rounded-lg px-2 py-1 bg-gray-100 text-black/65 cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={onCurrencyChange}
          >
            {currencyOptions.map((curr) => (
              <option value={curr} key={curr}>
                {curr}
              </option>
            ))}
          </select>
        </label>
      </section>
    </section>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(PropTypes.string),
  selectedCurrency: PropTypes.string,
  onCurrencyChange: PropTypes.func.isRequired,
  amountDisabled: PropTypes.bool,
  className: PropTypes.string,
};

InputBox.defaultProps = {
  currencyOptions: [],
  selectedCurrency: '',
  amountDisabled: false,
  className: '',
};

export default InputBox;
