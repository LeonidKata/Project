import type { ButtonProps } from 'antd';
import { Button as AntButton } from 'antd';

import type { FC } from 'react';

interface Props extends ButtonProps {
  type?: 'link' | 'text' | 'default' | 'primary' | 'dashed';
}

export const Button: FC<Props> = ({ type, ...props }) => {
  return <AntButton {...props} type={type} />;
};
