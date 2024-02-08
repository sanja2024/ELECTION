import React from 'react';

const OTPinput = ({ value, onChange, onFocus, onBlur }) => {
  return (
    <input
      className="otp p-1 me-1"
      type="text"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      maxLength={1}
    />
  );
};

export default OTPinput;
