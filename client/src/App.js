import React from 'react';
import './App.css';
import GeneralLayout from './shared/layout/general-layout/GeneralLayout';

const App = () => {
  const layout = {
    header: {
      title: 'Header',
    },
    footer: {
      text: 'Footer',
    },
  };

  return (
    <GeneralLayout props={layout}><p>Project Me</p></GeneralLayout>
  );
}

export default App;
