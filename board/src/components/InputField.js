import React from 'react';

function InputField({ label, name, type, value, onChange, placeholder, onKeyUp }) {
    return (
    <div>
      <label>{label}</label>
      {type === "text" ? (
        <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
      ) : (
        <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        rows="10"
        cols="50"
        onChange={onChange}
        onKeyUp={onKeyUp}
      ></textarea>
      )}
    </div>
  );
}

export default InputField;
