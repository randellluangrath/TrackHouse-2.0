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
    <GeneralLayout layout={layout}><p>Project Me</p></GeneralLayout>
  );
}

export default App;
