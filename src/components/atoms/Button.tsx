import React from "react";
import { ButtonProps } from "@/types/components/atoms/button";
import { getFontColor, getFonSize, getBackgroundColor, getBorderColor } from "@/utils/getClass";

const Button = (props: ButtonProps) => {
  const fontColor = getFontColor(props.color);
  const fontSize = getFonSize(props.size);
  const bgColor = getBackgroundColor(props.bgColor);
  const borderColor = getBorderColor(props.color, 'all')

  return (
    <div>
      <button className={`${fontColor} ${fontSize} ${bgColor} ${borderColor}`}>{props.text}</button>
    </div>
  )
}

export default Button;