import React from 'react';
import { Layout } from 'antd';
import AppText from '../../typography/text/AppText';

const { Footer } = Layout;

const GeneralFooter = (props) => {
  const footer = props.footer;
  return <Footer><AppText>{footer.text}</AppText></Footer>;
};

export default GeneralFooter;
