import { Carousel } from '../../antd';

const Banner = (props) => {
  const banner = props.banner;
  return (
    <Carousel>
      <div>
        <h1 style={contentStyle}>{banner.title}</h1>
      </div>
    </Carousel>
  );
};

const contentStyle = {
  fontWeight: '900',
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  paddingLeft: '50px',
  background: '#e28743',
};

export default Banner;
