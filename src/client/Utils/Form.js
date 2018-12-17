import React from 'react';
import PropTypes from 'prop-types';
import cuid from 'cuid';

export const Text = ({
  type, label, autoFocus, name, onChange, value, placeholder, id,
}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      autoFocus={autoFocus}
      name={name}
      onChange={onChange}
      value={value}
      className="form-control"
      placeholder={placeholder}
      id={id}
    />
  </div>
);

Text.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  autoFocus: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

export const Textarea = ({
  id, label, name, rows, value, placeholder, onChange,
}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <textarea
      className="form-control"
      name={name}
      id={id}
      rows={rows}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

Textarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

/**
 *
 * @param {options} props
 * @param {name} props
 * @param {onChange}
 * @param {selected}
 * @param {id}
 * @param {disabled}
 *
 */
export const Dropdown = ({
  id, options, label, name, onChange, selected, disabled,
}) => {
  if (!options) {
    options = [];
  }
  const getOptions = options.map((opt) => {
    let value = '';
    if (!opt.value) {
      value = opt._id;
    } else {
      value = opt.value;
    }
    return (
      <option key={cuid()} value={value}>{opt.name}</option>
    );
  });
  return (
    <div>
      {label !== 'undefined' && typeof label !== 'undefined' ? <label htmlFor={id}>{label}</label> : ''}
      <select
        name={name}
        onChange={onChange}
        value={selected}
        className="form-control"
        id={id}
        disabled={disabled}
      >
        {getOptions}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  id: PropTypes.string,
  options: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.string,
  disabled: PropTypes.bool,
};

export const DropdownReduxform = (props) => {
  if (!props.options) {
    props.options = [];
  }
  const options = props.options.map((opt) => {
    let value = '';
    if (!opt.value) {
      value = opt._id;
    } else {
      value = opt.value;
    }
    return (
      <option key={cuid()} value={value}>{opt.name}</option>
    );
  });
  return (
    <div>
      {props.label !== 'undefined' && typeof props.label !== 'undefined' ? <label htmlFor={props.id}>{props.label}</label> : ''}
      <select
        {...props.input}
        name={props.name}
        value={props.selected}
        className="form-control"
        id={props.id}
        disabled={props.disabled}
      >
        {options}
      </select>
    </div>
  );
};

DropdownReduxform.propTypes = {
  id: PropTypes.string,
  input: PropTypes.object,
  options: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.string,
  disabled: PropTypes.bool,
};

/**
 * @param options: label, value
 * @param value
 * @param name
 * @param onChange
 */
export const Radio = (props) => {
  const options = props.options.map(option => (
    <div key={cuid()}>
      <input
        type="radio"
        onChange={props.onChange}
        value={option.value}
        checked={option.value === props.value}
        name={props.name}
        disabled={props.disabled}
      /> &nbsp;
      {option.label}
    </div>
  ));
  return (
    <div>
      {props.legend ? <legend>{props.legend}</legend> : ''}
      {options}
    </div>
  );
};

Radio.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  legend: PropTypes.string,
};
