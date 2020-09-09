import Tippy from '@tippyjs/react';
import React, { FC } from 'react';

import { Content } from './libs/Content';
import { Props } from './props';

export const Tooltip: FC<Props> = ({ content, children, ...rest }: Props) => (
  <Tippy content={<Content>{content}</Content>} {...rest}>
    {children}
  </Tippy>
);
