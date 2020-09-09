import hexRgb from 'hex-rgb';

export const hexToRgb = (hex: string): string =>
  `rgb(${hexRgb(hex, { format: 'array' }).slice(0, 3).join(', ')})`;
