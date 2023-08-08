import * as React from 'react';
import { View } from 'react-native';

interface ChildWrapperProps {
  children: React.ReactNode;
  layoutHandler: (event: any) => void;
}

const ChildWrapper: React.FC<ChildWrapperProps> = ({
  children,
  layoutHandler,
}) => {
  return <View onLayout={layoutHandler}>{children}</View>;
};

export default ChildWrapper;
