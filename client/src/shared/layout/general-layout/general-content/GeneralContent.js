import React from 'react';
import { Layout } from '../../../antd';
import './GeneralContent.css';

const { Content } = Layout;

const GeneralContent = (props) => {
  return <Content>{props.children}</Content>;
};

export default GeneralContent;
