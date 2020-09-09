import { ReactElement } from 'react';

export type Item = {
  readonly icon?: ReactElement;
  readonly label: string;
  readonly link: string;
};
