import React from 'react';
import { Layout } from 'antd';
import GeneralHeader from '../general-header/GeneralHeader';
import GeneralFooter from '../general-footer/GeneralFooter';
import _ from 'lodash';

const GeneralLayout = (props) => {
  return (
    <Layout>
      <GeneralHeader props={_.get(props, 'header.title')} />
      {props.children} 
      <GeneralFooter props={_.get(props, 'footer.text')} />
    </Layout>
  );
};

export default GeneralLayout;
