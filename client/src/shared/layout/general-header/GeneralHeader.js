import React from 'react';
import { Layout } from 'antd';
import AppTitle from '../../typography/title/AppTitle';

const { Header } = Layout;

const GeneralHeader = (props) => {
  return <Header><AppTitle title={props.title} /></Header>;
};

export default GeneralHeader;