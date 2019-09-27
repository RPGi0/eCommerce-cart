import React from 'react';

const Input = (props) => (
  <div className="input">
    <label>{props.label}</label>
    <div className="input-field">
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        pattern={props.pattern}
        onChange={props.onChange}
      />
      <img src={props.imgSrc} />
    </div>
  </div>
);

export default Input;