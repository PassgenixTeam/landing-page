import React from 'react';

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ title, backgroundColor, color, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor,
      }}
    >
      <span
        style={{
          color,
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default Button;
