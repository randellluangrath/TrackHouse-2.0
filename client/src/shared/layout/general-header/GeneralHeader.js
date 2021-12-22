import React from 'react';
import { Layout } from 'antd';
import './GeneralHeader.css';
import AppTitle from '../../typography/title/AppTitle';

const { Header } = Layout;

const GeneralHeader = (props) => {
  const header = props.header;
  return <Header><AppTitle>{header.title}</AppTitle></Header>;
};

export default GeneralHeader;