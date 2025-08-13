import type { ButtonProps } from 'antd';
import { Button as AntButton } from 'antd';

import type { FC } from 'react';

export const Button: FC<ButtonProps> = ({ ...props }) => {
  return <AntButton {...props} />;
};

/*interface Props extends ButtonProps {}

export const Button: FC<Props> = ({ ...props }) => {
  return <AntButton {...props} />;
};*/
