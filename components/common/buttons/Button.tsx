import { ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface IProps extends TouchableOpacityProps {
  rightIcon?: ReactElement;
  children?: ReactElement | string;
  leftIcon?: ReactElement;
}

export default function Button({
  style,
  leftIcon,
  rightIcon,
  children,
}: IProps) {
  return (
    <TouchableOpacity style={style}>
      {leftIcon}
      {children}
      {rightIcon}
    </TouchableOpacity>
  );
}
