import { render } from '@testing-library/react';
import React from 'react';

import { colors } from '../../../core';
import { Divider } from './component';

describe('atoms/Divider', () => {
  it('should be default', () => {
    expect.assertions(1);
    render(<Divider id="divider" />);

    const divider = document.getElementById('divider');
    const dividerStyles = window.getComputedStyle(divider as Element);

    expect(dividerStyles.borderBottom).toBe(`1px solid ${colors.Background.Grey}`);
  });

  it('should be dashed and colored', () => {
    expect.assertions(1);
    render(<Divider size={3} dashed color="#282828" id="divider" />);

    const divider = document.getElementById('divider');
    const dividerStyles = window.getComputedStyle(divider as Element);

    expect(dividerStyles.borderBottom).toBe(`3px dashed #282828`);
  });
});
