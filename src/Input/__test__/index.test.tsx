import '@testing-library/jest-dom'; // Import the jest-dom matchers
import { render } from '@testing-library/react';
import React from 'react';
import Input from '..';

describe('Input组件', () => {
  it('能够正确渲染输入框', () => {
    const { container } = render(<Input />);
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('能够正确渲染文件属性的输入框', () => {
    const { container } = render(<Input type="file" />);
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('能够正确渲染禁用的输入框', () => {
    const { container } = render(<Input disabled />);
    expect(container.querySelector('input')).toBeDisabled();
  });
});
