import React from 'react';
import { Layout } from 'antd';
import GeneralHeader from '../general-header/GeneralHeader';
import GeneralFooter from '../general-footer/GeneralFooter';

const GeneralLayout = (props) => {
  const layout = {
    header: {
      title: '',
    },
    footer: {
      text: '',
    },
  };

  return (
    <Layout>
      <GeneralHeader header={layout.header} />
      {props.children}
      <GeneralFooter footer={layout.footer} />
    </Layout>
  );
};

export default GeneralLayout;
