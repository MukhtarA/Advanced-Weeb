/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  faArrowRight,
  faBatteryQuarter,
  faChessKnight,
  faCog,
  faEraser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, Fragment, useState } from 'react';

import { colors } from '../../../core';
import { Container } from '../../atoms/Container';
import { Divider } from '../../atoms/Divider';
import { Heading } from '../../atoms/Heading';
import { Paragraph } from '../../atoms/Paragraph';
import { Card } from '../../molecules/Card';
import { Sidebar } from './component';
import { SidebarItem, SidebarItemsType } from './index';

export default {
  title: 'organisms/Sidebar',
};

export const Basic: FC = () => {
  const [activeItems, setActiveItems] = useState<ReadonlyArray<string>>([]);
  const items: SidebarItemsType = [
    {
      icon: <FontAwesomeIcon icon={faBatteryQuarter} />,
      label: 'Long-term batteries',
      link: '/batteries',
    },
    {
      icon: <FontAwesomeIcon icon={faEraser} />,
      label: 'Erasers',
      link: '/eraser',
    },
    {
      icon: <FontAwesomeIcon icon={faCog} />,
      label: 'Settings',
      link: '/settings',
    },
    {
      icon: <FontAwesomeIcon icon={faChessKnight} />,
      label: 'Chess',
      link: '/chess',
    },
  ];

  const toggleActiveItems = (url: string): void => {
    setActiveItems(activeItems.concat(url));
  };

  return (
    <Fragment>
      <Container className="row my-3">
        <div className="col-sm-12 col-md-3">
          <Sidebar
            className="p-2"
            items={items}
            handler={toggleActiveItems}
            moreButton="Expand"
            header={
              <Fragment>
                <Heading className="mb-3 mt-2 mx-3" as="h2">
                  Optional title
                </Heading>
                <Divider className="mb-2" />
              </Fragment>
            }
          />
        </div>
        <div className="col-sm-12 col-md-9">
          <h1>This sidebar is controlled by items and handler props</h1>
          <h2>Event log:</h2>
          <Card className="mt-2 p-4">
            {activeItems.map((n, i) => (
              <Card className="mb-2 p-2" key={i}>
                Clicked on item with url: {n}
              </Card>
            ))}
            {activeItems.length === 0 && (
              <Paragraph color={colors.Text.Grey}>Empty. Click on items.</Paragraph>
            )}
          </Card>
        </div>
      </Container>
    </Fragment>
  );
};

export const NonExpandable: FC = () => {
  const [activeItems, setActiveItems] = useState<ReadonlyArray<string>>([]);
  const items: SidebarItemsType = [
    {
      icon: <FontAwesomeIcon icon={faBatteryQuarter} />,
      label: 'Long-term batteries',
      link: '/batteries',
    },
    {
      icon: <FontAwesomeIcon icon={faEraser} />,
      label: 'Erasers',
      link: '/eraser',
    },
    {
      icon: <FontAwesomeIcon icon={faCog} />,
      label: 'Settings',
      link: '/settings',
    },
    {
      icon: <FontAwesomeIcon icon={faChessKnight} />,
      label: 'Chess',
      link: '/chess',
    },
  ];

  const toggleActiveItems = (url: string): void => {
    setActiveItems(activeItems.concat(url));
  };

  return (
    <Fragment>
      <Container className="row my-3">
        <div className="col-sm-12 col-md-3">
          <Sidebar
            className="p-2"
            items={items}
            handler={toggleActiveItems}
            moreButton="Expand"
            header={
              <Fragment>
                <Heading className="mb-3 mt-2 mx-3" as="h2">
                  Optional title
                </Heading>
                <Divider className="mb-2" />
              </Fragment>
            }
            nonExpandable
          />
        </div>
        <div className="col-sm-12 col-md-9">
          <h1>This sidebar is controlled by items and handler props</h1>
          <h2>Event log:</h2>
          <Card className="mt-2 p-4">
            {activeItems.map((n, i) => (
              <Card className="mb-2 p-2" key={i}>
                Clicked on item with url: {n}
              </Card>
            ))}
            {activeItems.length === 0 && (
              <Paragraph color={colors.Text.Grey}>Empty. Click on items.</Paragraph>
            )}
          </Card>
        </div>
      </Container>
    </Fragment>
  );
};

export const ManualChildren: FC = () => {
  const [activeItems, setActiveItems] = useState<ReadonlyArray<string>>([]);
  const toggleActiveItems = (url: string): void => {
    setActiveItems(activeItems.concat(url));
  };

  return (
    <Fragment>
      <Container className="row my-3">
        <div className="col-sm-12 col-md-3">
          <Sidebar
            className="p-2"
            moreButton="Expand"
            header={
              <Fragment>
                <Heading className="mb-3 mt-2 mx-3" as="h2">
                  Optional title
                </Heading>
                <Divider className="mb-2" />
              </Fragment>
            }
            collapsedChildren={
              <Fragment>
                <SidebarItem
                  className="d-flex align-items-center"
                  onClick={() => toggleActiveItems('/battery')}
                >
                  <Heading className="mr-auto" as="span" color={colors.Brand.Primary}>
                    Battery
                  </Heading>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    css={{ fontSize: 20, color: colors.Brand.Secondary }}
                  />
                </SidebarItem>
                <SidebarItem
                  className="d-flex align-items-center"
                  onClick={() => toggleActiveItems('/chess')}
                >
                  <Heading className="mr-auto" as="span" color={colors.Brand.Primary}>
                    Chess
                  </Heading>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    css={{ fontSize: 20, color: colors.Brand.Secondary }}
                  />
                </SidebarItem>
                <SidebarItem
                  className="d-flex align-items-center"
                  onClick={() => toggleActiveItems('/settings')}
                >
                  <Heading className="mr-auto" as="span" color={colors.Brand.Primary}>
                    Settings
                  </Heading>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    css={{ fontSize: 20, color: colors.Brand.Secondary }}
                  />
                </SidebarItem>
              </Fragment>
            }
          >
            <SidebarItem
              className="d-flex align-items-center"
              onClick={() => toggleActiveItems('/battery')}
            >
              <Heading className="mr-auto" as="span" color={colors.Brand.Primary}>
                Battery
              </Heading>
              <FontAwesomeIcon
                icon={faArrowRight}
                css={{ fontSize: 20, color: colors.Brand.Secondary }}
              />
            </SidebarItem>
            <SidebarItem
              className="d-flex align-items-center"
              onClick={() => toggleActiveItems('/chess')}
            >
              <Heading className="mr-auto" as="span" color={colors.Brand.Primary}>
                Chess
              </Heading>
              <FontAwesomeIcon
                icon={faArrowRight}
                css={{ fontSize: 20, color: colors.Brand.Secondary }}
              />
            </SidebarItem>
            <SidebarItem
              className="d-flex align-items-center"
              onClick={() => toggleActiveItems('/settings')}
            >
              <Heading className="mr-auto" as="span" color={colors.Brand.Primary}>
                Settings
              </Heading>
              <FontAwesomeIcon
                icon={faArrowRight}
                css={{ fontSize: 20, color: colors.Brand.Secondary }}
              />
            </SidebarItem>
            <SidebarItem
              className="d-flex align-items-center"
              onClick={() => toggleActiveItems('/profile')}
            >
              <Heading className="mr-auto" as="span" color={colors.Brand.Primary}>
                Profile
              </Heading>
              <FontAwesomeIcon
                icon={faArrowRight}
                css={{ fontSize: 20, color: colors.Brand.Secondary }}
              />
            </SidebarItem>
            <SidebarItem
              className="d-flex align-items-center"
              onClick={() => toggleActiveItems('/logout')}
            >
              <Heading className="mr-auto" as="span" color={colors.Brand.Primary}>
                Log out
              </Heading>
              <FontAwesomeIcon
                icon={faArrowRight}
                css={{ fontSize: 20, color: colors.Brand.Secondary }}
              />
            </SidebarItem>
          </Sidebar>
        </div>
        <div className="col-sm-12 col-md-9">
          <h1>This sidebar is controlled manually by children and collapsedChildren props</h1>
          <h2>Event log:</h2>
          <Card className="mt-2 p-4">
            {activeItems.map((n, i) => (
              <Card className="mb-2 p-2" key={i}>
                Clicked on item with url: {n}
              </Card>
            ))}
            {activeItems.length === 0 && (
              <Paragraph color={colors.Text.Grey}>Empty. Click on items.</Paragraph>
            )}
          </Card>
        </div>
      </Container>
    </Fragment>
  );
};
