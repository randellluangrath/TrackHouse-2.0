import { Button } from '../../antd';

const AppButton = (props) => {
  const button = props.button;
  // size: small or large, small by default
  return (
    <Button
      onClick={props.onClick}
      ghost={button.ghost}
      size={button.size ?? 'small'}
      type={button.type}>
      {button.label}
    </Button>
  );
};

export default AppButton;
