import React from "react";
import { ButtonProps } from "@/types/components/atoms/button";
import { getFontColor, getFonSize, getBackgroundColor, getBorderColor } from "@/utils/getClass";

const Button = (props: ButtonProps) => {
  const fontColor = getFontColor(props.color);
  const fontSize = getFonSize(props.size);
  const bgColor = getBackgroundColor(props.bgColor);
  const borderColor = getBorderColor(props.color, 'all')

  return (
    <button className={`w-full p-2 rounded-md ${fontColor} ${fontSize} ${bgColor} ${borderColor}`} type={props.type}>{props.text}</button>
  )
}

export default Button;