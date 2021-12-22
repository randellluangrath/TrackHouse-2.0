import { Carousel } from '../../antd';

const Banner = (props) => {
  return (
    <Carousel>
      <div>
        <h1 style={contentStyle}>{props.children}</h1>
      </div>
    </Carousel>
  );
};

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  paddingLeft: '50px',
  background: '#e28743',
};

export default Banner;
