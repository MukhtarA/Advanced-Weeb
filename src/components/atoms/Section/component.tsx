import classNames from 'classnames';
import React, { FC } from 'react';

import { Heading } from '../Heading';
import { Props } from './props';

export const Section: FC<Props> = ({ className, as, title, children, ...rest }: Props) => (
  <div className={classNames(className, 'py-5')} {...rest}>
    {title && <Heading as={as}>{title}</Heading>}
    {children}
  </div>
);
