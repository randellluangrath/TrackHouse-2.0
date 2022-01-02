import React, { useRef, useLayoutEffect } from 'react';
import './App.css';
import { Card, Row, Col } from './shared/antd';
import { GeneralLayout } from './shared/layout';

// TODO: Move amchart into own module
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

const App = () => {
  const layout = {
    header: {
      title: 'Track House',
    },
    footer: {
      text: 'Trackhouse-2.0',
    },
  };

  return (
    <GeneralLayout layout={layout}>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row>
          <Col span={12}>
            <Card title='Word Frequency' bordered={true}>
              <WordFrequencyChart />
            </Card>
          </Col>
          <Col span={12}>
            <Card title='Literary Device Frequency' bordered={true}>
              <LiteraryDeviceFrequencyChart />
            </Card>
          </Col>
        </Row>
      </div>
    </GeneralLayout>
  );
};

const WordFrequencyChart = (props) => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    const x = am4core.create(
      'word-frequency-chart',
      am4plugins_wordCloud.WordCloud
    );
    x.fontFamily = 'Courier New';
    const series = x.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;

    series.data = [
      {
        tag: 'javascript',
        count: '1765836',
      },
      {
        tag: 'java',
        count: '1517355',
      },
      {
        tag: 'c#',
        count: '1287629',
      },
      {
        tag: 'php',
        count: '1263946',
      },
      {
        tag: 'android',
        count: '1174721',
      },
      {
        tag: 'python',
        count: '1116769',
      },
      {
        tag: 'jquery',
        count: '944983',
      },
      {
        tag: 'ios',
        count: '591410',
      },
      {
        tag: 'css',
        count: '574684',
      },
      {
        tag: 'asp.net-mvc',
        count: '178291',
      },
      {
        tag: 'linux',
        count: '173278',
      },
      {
        tag: 'angular',
        count: '154447',
      },
      {
        tag: 'database',
        count: '153581',
      },
      {
        tag: 'wpf',
        count: '147538',
      },
      {
        tag: 'spring',
        count: '147456',
      },
      {
        tag: 'wordpress',
        count: '145801',
      },
      {
        tag: 'python-3.x',
        count: '145685',
      },
      {
        tag: 'vba',
        count: '139940',
      },
      {
        tag: 'string',
        count: '136649',
      },
      {
        tag: 'xcode',
        count: '130591',
      },
      {
        tag: 'windows',
        count: '127680',
      },
      {
        tag: 'reactjs',
        count: '125021',
      },
      {
        tag: 'vb.net',
        count: '122559',
      },
      {
        tag: 'html5',
        count: '118810',
      },
      {
        tag: 'laravel',
        count: '109340',
      },
      {
        tag: 'bash',
        count: '108797',
      },
      {
        tag: 'git',
        count: '108075',
      },
      {
        tag: 'oracle',
        count: '106936',
      },
      {
        tag: 'pandas',
        count: '96225',
      },
    ];

    series.dataFields.word = 'tag';
    series.dataFields.value = 'count';

    series.heatRules.push({
      target: series.labels.template,
      property: 'fill',
      min: am4core.color('#0000CC'),
      max: am4core.color('#CC00CC'),
      dataField: 'value',
    });

    series.labels.template.url =
      'https://stackoverflow.com/questions/tagged/{word}';
    series.labels.template.urlTarget = '_blank';
    series.labels.template.tooltipText = '{word}: {value}';

    const hoverState = series.labels.template.states.create('hover');
    hoverState.properties.fill = am4core.color('#FF0000');

    chart.current = x;
    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div
      id='word-frequency-chart'
      style={{ width: '100%', height: '500px' }}></div>
  );
};

const LiteraryDeviceFrequencyChart = (props) => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    var x = am4core.create(
      'literary-device-frequency-chart',
      am4charts.PieChart
    );

    x.hiddenState.properties.opacity = 0; // this creates initial fade-in

    x.data = [
      {
        country: 'Alliteration',
        value: 260,
      },
      {
        country: 'Irony',
        value: 230,
      },
      {
        country: 'Simile',
        value: 200,
      },
      {
        country: 'Metaphor',
        value: 165,
      },
      {
        country: 'Rhyme',
        value: 139,
      },
    ];

    var series = x.series.push(new am4charts.PieSeries());
    series.dataFields.value = 'value';
    series.dataFields.radiusValue = 'value';
    series.dataFields.category = 'country';
    series.slices.template.cornerRadius = 6;
    series.colors.step = 3;

    series.hiddenState.properties.endAngle = -90;
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div
      id='literary-device-frequency-chart'
      style={{ width: '100%', height: '500px' }}></div>
  );
};
export default App;
