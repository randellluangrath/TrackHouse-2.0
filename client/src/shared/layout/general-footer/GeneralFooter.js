import React from 'react';
import { Layout } from 'antd';
import AppText from '../../typography/text/AppText';

const { Footer } = Layout;

const GeneralFooter = (props) => {
  console.log(props);
  return <Footer><AppText title={props.text} /></Footer>;
};

export default GeneralFooter;
