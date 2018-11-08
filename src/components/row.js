import React from 'react';

const Row = ({ className = '', children }) => {
  return (
    <div className={`row ${className}`}>
      <div className="box">
        {children}
      </div>
    </div>
  );
};

export default Row;
