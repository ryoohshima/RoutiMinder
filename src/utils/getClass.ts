import { Color } from '@/types/globals';
import { Size } from '@/types/globals';
import { Position } from '@/types/globals';

const getFontColor = (color: Color) => {
  switch (color) {
    case 'primary':
      return 'text-pink-900';
    case 'secondary':
      return 'text-yellow-400';
    case 'tertiary':
      return 'text-green-100';
    case 'black':
      return 'text-gray-900';
    case 'white':
      return 'text-gray-100';
    case 'red':
      return 'text-red-500';
    default:
      return '';
  }
}

const getFonSize = (size: Size) => {
  switch (size) {
    case 'small':
      return 'text-sm';
    case 'medium':
      return 'text-base';
    case 'large':
      return 'text-lg';
    default:
      return '';
  }
}

const getBackgroundColor = (color: Color) => {
  switch (color) {
    case 'primary':
      return 'bg-pink-900';
    case 'secondary':
      return 'bg-yellow-400';
    case 'tertiary':
      return 'bg-green-100';
    case 'black':
      return 'bg-gray-900';
    case 'white':
      return 'bg-gray-100';
    case 'red':
      return 'bg-red-500';
    default:
      return '';
  }
}

const getBorderColor = (color: Color, position: Position) => {
  if (position === 'all') {
    switch (color) {
      case 'primary':
        return 'border-pink-900';
      case 'secondary':
        return 'border-yellow-400';
      case 'tertiary':
        return 'border-green-100';
      case 'black':
        return 'border-gray-900';
      case 'white':
        return 'border-gray-100';
      case 'red':
        return 'border-red-500';
      default:
        return '';
    }
  }
  if (position === 'top') {
    switch (color) {
      case 'primary':
        return 'border-t-2 border-pink-900';
      case 'secondary':
        return 'border-t-2 border-yellow-400';
      case 'tertiary':
        return 'border-t-2 border-green-100';
      case 'black':
        return 'border-t-2 border-gray-900';
      case 'white':
        return 'border-t-2 border-gray-100';
      case 'red':
        return 'border-t-2 border-red-500';
      default:
        return '';
    }
  }
}

export {
  getFontColor,
  getFonSize,
  getBackgroundColor,
  getBorderColor,
};