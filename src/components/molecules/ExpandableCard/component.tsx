/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import { cloneElement, FC, MouseEventHandler, useState } from 'react';

import { colors } from '../../../core';
import { Button } from '../../atoms/Button';
import { Card } from '../Card';
import { Props } from './props';

export const ExpandableCard: FC<Props> = ({ className, children, moreButton, ...rest }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const moreButtonHandler = (
    onClick?: MouseEventHandler<HTMLButtonElement>,
  ): MouseEventHandler<HTMLButtonElement> => (event) => {
    setIsExpanded(!isExpanded);
    onClick ? onClick(event) : void 0;
  };

  return (
    <Card
      className={classNames(className, 'd-flex', 'flex-column', 'justify-content-between')}
      {...rest}
    >
      <div
        className={classNames('col', 'p-0', { 'mb-3': !isExpanded && !('nonExpandable' in rest) })}
      >
        {!isExpanded && 'collapsedChildren' in rest ? rest.collapsedChildren : children}
      </div>
      {!('nonExpandable' in rest) &&
        !isExpanded &&
        (typeof moreButton === 'string' ? (
          <Button
            onClick={moreButtonHandler()}
            background={colors.Background.Secondary}
            color={colors.Text.Light}
          >
            {moreButton}
          </Button>
        ) : (
          cloneElement(moreButton, { onClick: moreButtonHandler(moreButton.props.onClick) })
        ))}
    </Card>
  );
};
