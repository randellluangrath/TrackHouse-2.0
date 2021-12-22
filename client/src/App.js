import React from 'react';
import './App.css';
import { Card, Row, Col } from './shared/antd';
import { GeneralLayout } from './shared/layout';

const App = () => {
  const layout = {
    header: {
      title: 'Header',
    },
    footer: {
      text: 'Footer',
    },
  };

  return (
    <GeneralLayout layout={layout}>
      <Row>
        <Col span={12}>
          <Card title='Card title'>Card content</Card>
        </Col>
        <Col span={12}>
          <Card title='Card title'>Card content</Card>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Card title='Card title'>Card content</Card>
        </Col>
        <Col span={12}>
          <Card title='Card title'>Card content</Card>
        </Col>
      </Row>
    </GeneralLayout>
  );
};

export default App;
