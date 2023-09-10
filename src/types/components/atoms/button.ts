import { Size } from '@/types/globals';
import { Color } from '@/types/globals';

export type ButtonProps = {
  text: string;
  size: Size;
  color: Color;
  bgColor: Color;
  type: 'button' | 'submit';
};