import { Size } from '@/types/globals';
import { Color } from '@/types/globals';

export type ButtonSubmitProps = {
  text: string;
  size: Size;
  color: Color;
  bgColor: Color;
};

export type ButtonClickProps = {
  text: string;
  size: Size;
  color: Color;
  bgColor: Color;
  onClick: () => void;
};