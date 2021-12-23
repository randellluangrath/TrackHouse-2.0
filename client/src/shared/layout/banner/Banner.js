import { Button } from '../../form';
import { AppTitle } from '../../typography';

const AppBanner = (props) => {
  const banner = props.banner;

  const button = {
    type: 'default',
    label: 'Randomize Artist',
    size: 'large',
    ghost: true,
  };

  return (
    <div style={banner.contentStyle}>
      <AppTitle title={banner.title} />
      <Button button={button} />
    </div>
  );
};

export default AppBanner;
