import PropTypes from 'prop-types';

function Button({ className, isTypeSubmit, handleClick, children }) {
  return (
    <button
      type={isTypeSubmit ? 'submit' : 'button'}
      className={`${className}`}
      onClick={handleClick ?? undefined}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  isTypeSubmit: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  handleClick: null,
  className: '',
  isTypeSubmit: false,
};

export default Button;
