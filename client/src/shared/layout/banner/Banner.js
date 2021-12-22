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
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  paddingLeft: '50px',
  background: '#364d79',
};

export default Banner;
