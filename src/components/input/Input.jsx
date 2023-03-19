import PropTypes from 'prop-types';
import './Input.scss';
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => (
  <div className="form-row">
    {props.labelText && (
      <label htmlFor={props.name} className="form-label">
        {props.labelText}
      </label>
    )}
    <input
      ref={ref}
      id={props.id}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      className={`form-input ${props.className}`}
      style={props.style}
      list={props.id + 'datalist'}
      autoComplete="off"
    />
    {props.dataList && (
      <datalist id={props.id + 'datalist'}>
        {props.dataList.map((data) => (
          <option key={data} value={data} />
        ))}
      </datalist>
    )}
  </div>
));

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.object,
  dataList: PropTypes.arrayOf(PropTypes.string)
};

export default Input;
