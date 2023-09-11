import React from "react";
import { ButtonSubmitProps } from "@/types/components/atoms/button";
import { getFontColor, getFonSize, getBackgroundColor, getBorderColor } from "@/utils/getClass";

const ButtonSubmit = (props: ButtonSubmitProps) => {
  const fontColor = getFontColor(props.color);
  const fontSize = getFonSize(props.size);
  const bgColor = getBackgroundColor(props.bgColor);
  const borderColor = getBorderColor(props.color, 'all')

  return (
    <button className={`w-full p-2 rounded-md border ${fontColor} ${fontSize} ${bgColor} ${borderColor}`} type='submit'>{props.text}</button>
  )
}

export default ButtonSubmit;