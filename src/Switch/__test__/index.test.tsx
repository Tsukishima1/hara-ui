import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from '../index';

describe('Switch 组件', () => {
  it('能够正确渲染默认的属性', () => {
    const { getByRole } = render(<Switch />);
    const button = getByRole('switch');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-checked', 'false');
  });

  it('能够正确渲染指定的 defaultChecked', () => {
    const { getByRole } = render(<Switch defaultChecked={true} />);
    const button = getByRole('switch');
    expect(button).toHaveAttribute('aria-checked', 'true');
  });

  it('能够在点击时执行回调函数', () => {
    const onCheckedChange = jest.fn();
    const { getByRole } = render(<Switch onCheckedChange={onCheckedChange} />);
    const button = getByRole('switch');
    fireEvent.click(button);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('在提供 checked 属性时不会改变内部状态', () => {
    const { getByRole } = render(<Switch checked={true} />);
    const button = getByRole('switch');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-checked', 'true');
  });

  it('应用自定义的 className 和 style', () => {
    const { getByRole } = render(<Switch className="custom-class" style={{ color: 'red' }} />);
    const button = getByRole('switch');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveStyle('color: red');
  });

  it('在 disabled 属性为 true 时禁用', () => {
    const { getByRole } = render(<Switch disabled={true} />);
    const button = getByRole('switch');
    expect(button).toHaveAttribute('data-disabled', 'true');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-checked', 'false');
  });
});
