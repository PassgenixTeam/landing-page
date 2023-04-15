import React from 'react';

interface H5Props {
  color?: string;
  children?: React.ReactNode;
}

const H5 = ({ color = '#718096', children }: H5Props) => {
  return (
    <h5
      className="font-semibold text-base"
      style={{
        color: color,
      }}
    >
      {children}
    </h5>
  );
};

export default H5;
