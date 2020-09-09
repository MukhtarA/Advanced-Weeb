/** @jsx jsx */
import { jsx } from '@emotion/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, Fragment } from 'react';

import { colors } from '../../../core';
import { Container } from '../../atoms/Container';
import { Heading } from '../../atoms/Heading';
import { Card } from '../Card';
import { Tooltip } from './component';

export default {
  title: 'molecules/Tooltip',
};

export const Basic: FC = () => (
  <Fragment>
    <Container mini>
      <Heading as="h2" className="p-3 mb-2">
        Tooltip
      </Heading>
      <Card className="p-3 mb-2">
        <Tooltip content="Ezekiel 25:17, Pulp Fiction (1994)">
          <span>
            The path of the righteous man is beset on all sides by the inequities of the selfish and
            the tyranny of evil men. Blessed is he who, in the name of charity and good will,
            shepherds the weak through the valley of the darkness, for he is truly his brother’s
            keeper and the finder of lost children. And I will strike down upon thee with great
            vengeance and furious anger those who attempt to poison and destroy My brothers. And you
            will know I am the Lord when I lay My vengeance upon you
          </span>
        </Tooltip>
      </Card>

      <Card className="p-3 mb-2">
        <span>
          The path of the righteous man is beset on all sides by the inequities of the selfish and
          the tyranny of evil men. Blessed is he who, in the name of charity and good will,
          shepherds the weak through the valley of the darkness, for he is truly his brother’s
          keeper and the finder of lost children. And I will strike down upon thee with great
          vengeance and furious anger those who attempt to{' '}
        </span>
        <Tooltip content={<FontAwesomeIcon icon={faCoffee} />}>
          <span css={{ color: colors.Brand.Primary }}>poison</span>
        </Tooltip>
        <span>
          {' '}
          and destroy My brothers. And you will know I am the
          <Tooltip content="*God himself">
            <span css={{ color: colors.Brand.Primary }}> Lord </span>
          </Tooltip>
          when I lay My vengeance upon you
        </span>
      </Card>

      <Card className="p-3 mb-2">
        <Tooltip
          content={
            <Fragment>
              <p className="d-flex">
                <img
                  className="mr-3 flex-fill"
                  src="https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg"
                />
                Pulp Fiction is a 1994 American neo-noir black comedy crime film written and
                directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John
                Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman,
                it tells several stories of criminal Los Angeles.
              </p>
            </Fragment>
          }
        >
          <span>
            The path of the righteous man is beset on all sides by the inequities of the selfish and
            the tyranny of evil men. Blessed is he who, in the name of charity and good will,
            shepherds the weak through the valley of the darkness, for he is truly his brother’s
            keeper and the finder of lost children. And I will strike down upon thee with great
            vengeance and furious anger those who attempt to poison and destroy My brothers. And you
            will know I am the Lord when I lay My vengeance upon you
          </span>
        </Tooltip>
      </Card>
    </Container>
  </Fragment>
);
