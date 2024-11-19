import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import Separator from '..';

describe('Separator组件', () => {
  it('能够正确渲染分割线', () => {
    const { container } = render(<Separator />);
    expect(container.querySelector('.hara-separator')).toBeInTheDocument();
  });

  it('能够正确渲染垂直分割线', () => {
    const { container } = render(<Separator orientation="vertical" />);
    expect(container.querySelector('.hara-separator-vertical')).toBeInTheDocument();
  });
});
