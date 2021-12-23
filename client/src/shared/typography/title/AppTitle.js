import React from 'react';
import './AppTitle.css';

const AppTitle = (props) => {
  const title = props.title;
  return (
    <span className="app-title">
      {title.level === 1 && <h1>{title.text}</h1>}
      {title.level === 2 && <h2>{title.text}</h2>}
      {title.level === 3 && <h3>{title.text}</h3>}
      {title.level > 3 && <h4>{title.text}</h4>}
    </span>
  );
};

export default AppTitle;
