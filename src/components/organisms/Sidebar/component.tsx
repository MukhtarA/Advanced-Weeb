/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import _ from 'lodash';
import { cloneElement, FC, Fragment } from 'react';

import { colors } from '../../../core';
import { ExpandableCard } from '../../molecules/ExpandableCard';
import { Item } from './libs/Item';
import { Props } from './props';

export const Sidebar: FC<Props> = ({ header, ...rest }: Props) => {
  const newChildren =
    'children' in rest
      ? rest.children
      : (() => {
          const itemHandler = (link: string) => () => rest.handler(link);
          return rest.items.map((n, i) => (
            <Item
              className="d-flex align-items-center"
              key={i}
              onClick={itemHandler(n.link)}
              background={colors.Background.Transparent}
              disableBorder
            >
              {n.icon && (
                <div css={{ flex: '0 0 50px', textAlign: 'center' }}>
                  {cloneElement(n.icon, {
                    className: classNames(n.icon.props.className, 'mr-3'),
                    style: { fontSize: '1.5em', color: colors.Brand.Primary },
                  })}
                </div>
              )}
              {n.label}
            </Item>
          ));
        })();

  return (
    <ExpandableCard
      {...('nonExpandable' in rest
        ? rest.nonExpandable
        : {
            collapsedChildren:
              'collapsedChildren' in rest ? (
                'children' in rest && (
                  <Fragment>
                    {header}
                    {rest.collapsedChildren}
                  </Fragment>
                )
              ) : (
                <Fragment>
                  {header}
                  {newChildren.slice(0, 3)}
                </Fragment>
              ),
          })}
      {..._.omit(rest, 'collapsedChildren')}
    >
      {header}
      {newChildren}
    </ExpandableCard>
  );
};
