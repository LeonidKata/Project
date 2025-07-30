import type { FC } from 'react';
import type { ButtonProps } from 'antd';
import { Button as AntButton } from 'antd';

interface Props extends ButtonProps {
}

export const Button: FC<Props> = ({ ...props }) => {
  return (
    <AntButton {...props} />
  );
};

