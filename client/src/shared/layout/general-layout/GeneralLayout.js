import React from 'react';
import { Layout } from '../../antd';
import Banner from '../banner/Banner';
import GeneralContent from './general-content/GeneralContent';
import GeneralFooter from './general-footer/GeneralFooter';

const GeneralLayout = (props) => {
  const layout = props.layout;
  return (
    <Layout>
      <Banner banner={layout.banner}></Banner>
      <GeneralContent>{props.children}</GeneralContent>
      <GeneralFooter footer={layout.footer} />
    </Layout>
  );
};

export default GeneralLayout;
