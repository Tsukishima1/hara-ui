import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox, { CheckboxProps } from '../index';

describe('Checkbox 组件', () => {
  const defaultProps: CheckboxProps = {
    id: 'test-checkbox',
    defaultChecked: false,
    onCheckedChange: jest.fn(),
    disabled: false,
    className: 'test-class',
  };

  it('渲染时不崩溃', () => {
    const { getByRole } = render(<Checkbox {...defaultProps} />);
    expect(getByRole('checkbox')).toBeInTheDocument();
  });

  it('正确应用 defaultChecked 属性', () => {
    const { getByRole } = render(<Checkbox {...defaultProps} defaultChecked={true} />);
    expect(getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
  });

  it('点击时调用 onCheckedChange', () => {
    const onCheckedChange = jest.fn();
    const { getByRole } = render(<Checkbox {...defaultProps} onCheckedChange={onCheckedChange} />);
    fireEvent.click(getByRole('checkbox'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('在禁用时不调用 onCheckedChange', () => {
    const onCheckedChange = jest.fn();
    const { getByRole } = render(<Checkbox {...defaultProps} onCheckedChange={onCheckedChange} disabled={true} />);
    fireEvent.click(getByRole('checkbox'));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('点击时切换内部状态', () => {
    const { getByRole } = render(<Checkbox {...defaultProps} />);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('正确应用 checked 属性', () => {
    const { getByRole, rerender } = render(<Checkbox {...defaultProps} checked={true} />);
    expect(getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
    rerender(<Checkbox {...defaultProps} checked={false} />);
    expect(getByRole('checkbox')).toHaveAttribute('aria-checked', 'false');
  });

  it('正确应用自定义类名', () => {
    const { getByRole } = render(<Checkbox {...defaultProps} className="custom-class" />);
    expect(getByRole('checkbox')).toHaveClass('hara-checkbox custom-class');
  });
});
