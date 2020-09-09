import { render } from '@testing-library/react';
import React from 'react';

import { Container } from './component';
import { Sizes } from './types/Sizes';

describe('atoms/Container', () => {
  it('should match small size', () => {
    expect.assertions(1);
    render(<Container mini id="miniContainer" />);
    const container = document.getElementById('miniContainer');
    const containerStyles = window.getComputedStyle(container as Element);

    expect(containerStyles.maxWidth).toBe(`${Sizes.small}px`);
  });

  it('should match large size', () => {
    expect.assertions(1);
    render(<Container id="largeContainer" />);
    const container = document.getElementById('largeContainer');
    const containerStyles = window.getComputedStyle(container as Element);

    expect(containerStyles.maxWidth).toBe(`${Sizes.large}px`);
  });
});
