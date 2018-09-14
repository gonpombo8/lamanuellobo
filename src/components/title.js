import React from 'react';

const Title = ({title, className}) => {
  return (
    <div className={`col-lg-12 ${className}`}>
      <hr />
      <h2 className="intro-text text-center">{title}
      </h2>
      <hr />
    </div>
  );
};

export default Title;
