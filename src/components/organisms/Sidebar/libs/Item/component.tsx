import styled from '@emotion/styled';

import { colors } from '../../../../../core';
import { Button, ButtonProps } from '../../../../atoms/Button';

export const Item = styled(Button)<ButtonProps>`
  display: block;
  width: 100%;
  text-align: inherit;
  border-radius: 0;
`;

Item.defaultProps = {
  disableBorder: true,
  background: colors.Background.White,
};
