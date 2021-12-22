import React from 'react';
import { Layout } from 'antd';
import GeneralHeader from '../general-header/GeneralHeader';
import GeneralFooter from '../general-footer/GeneralFooter';

const GeneralLayout = (props) => {
  console.log(props.layout);
  const layout = props.layout;
  return (
    <Layout>
      <GeneralHeader header={layout.header} />
      {props.children}
      <GeneralFooter footer={layout.footer} />
    </Layout>
  );
};

export default GeneralLayout;
