import React from "react";
import { ParagraphProps } from "@/types/components/atoms/paragraph";
import { getFontColor, getFonSize } from "@/utils/getClass";

const Paragraph = (props: ParagraphProps) => {
  const fontColor = getFontColor(props.color);
  const fontSize = getFonSize(props.size);

  return (
    <p className={`${fontColor} ${fontSize}`}>{props.text}</p>
  )
}

export default Paragraph;