import styled from '@emotion/styled';
import classNames from 'classnames';
import React, { FC } from 'react';

import { Item } from './libs/Item';
import { Props } from './props';

const PaginationWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  font-family: 'Noto Serif', sans-serif;
  text-align: left;
`;

export const Pagination: FC<Props> = ({
  perPage,
  count,
  basePath,
  active,
  onClick,
  className,
  ...rest
}: Props) => {
  const pages = Array.from(Array(Math.ceil(count / perPage)));

  const itemOnClick = (path: string, handler: typeof onClick) => () => handler(path);

  return (
    <div className={classNames(className, 'text-center')} {...rest}>
      <PaginationWrapper>
        {pages.map((_, i) => (
          <Item
            className={classNames({ 'mr-2': i !== pages.length - 1 })}
            active={active === i + 1}
            onClick={itemOnClick(`${basePath}/${i + 1}`, onClick)}
            key={i}
          >
            {i + 1}
          </Item>
        ))}
      </PaginationWrapper>
    </div>
  );
};
