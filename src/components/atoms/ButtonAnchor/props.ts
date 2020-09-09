import { ButtonHTMLAttributes } from 'react';

import { AnchorProps } from '../Anchor';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & Pick<AnchorProps, 'color'>;
