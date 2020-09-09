import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  readonly columns: number;
  readonly rowColumns?: number;
};
