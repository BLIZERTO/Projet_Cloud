// @ts-ignore 
import React from 'react';
import './custom.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className="my-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;