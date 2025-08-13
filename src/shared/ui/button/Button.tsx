/* eslint-disable prettier/prettier */
import type { ButtonProps } from 'antd';
import { Button as AntButton } from 'antd';

import type { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends ButtonProps {}

export const Button: FC<Props> = ({ ...props }) => {
  return <AntButton {...props} />;
};
