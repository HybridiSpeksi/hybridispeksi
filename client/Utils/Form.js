import React, { Component } from 'react';
import cuid from 'cuid';

export const Text = props => (
  <div className="form-group">
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type}
      autoFocus={props.autoFocus}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      className="form-control"
      placeholder={props.placeholder}
      id={props.id}
    />
  </div>
);

export const Textarea = props => (
  <div className="form-group">
    <label htmlFor={props.id}>{props.label}</label>
    <textarea
      className="form-control"
      name={props.name}
      id={props.id}
      rows={props.rowd}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </div>
);

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
export const Dropdown = (props) => {
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
  const onChange = props.onChange ? 'onChange={props.onChange}' : '';
  return (
    <div>
      {props.label !== 'undefined' && typeof props.label !== 'undefined' ? <label htmlFor={props.id}>{props.label}</label> : ''}
      <select
        {...props.input}
        name={props.name}
        onChange={props.onChange}
        value=""
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
  const onChange = props.onChange ? 'onChange={props.onChange}' : '';
  return (
    <div>
      {props.label !== 'undefined' && typeof props.label !== 'undefined' ? <label htmlFor={props.id}>{props.label}</label> : ''}
      <select
        {...props.input}
        name={props.name}
        value=""
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
        checked={option.value == props.value}
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

class Checkbox extends Component {
  render() {
    return (
      <div />
    );
  }
}

// module.exports = {
//   Text,
//   Textarea,
//   Dropdown,
//   DropdownReduxform,
//   Radio,
//   Checkbox,
// };
