import React from 'react';
import { Layout } from 'antd';
import './GeneralContent.css';

const { Content } = Layout;

const GeneralContent = (props) => {
  console.log(props);
  return <Content>Content</Content>;
};

export default GeneralContent;