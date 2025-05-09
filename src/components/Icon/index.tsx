import React from 'react';
import { SvgProps } from 'react-native-svg';
import { iconsMap } from './iconsMap';

type IconName = keyof typeof iconsMap;

interface IconProps extends SvgProps {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const SvgIcon = iconsMap[name];
  return <SvgIcon {...props} />;
};
