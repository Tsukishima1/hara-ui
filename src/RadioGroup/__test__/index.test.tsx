import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioGroup, RadioGroupItem } from '../index';

describe('RadioGroup 组件', () => {
  test('默认值测试', () => {
    const { getByRole } = render(
      <RadioGroup defaultValue="1">
        <RadioGroupItem value="1">选项1</RadioGroupItem>
        <RadioGroupItem value="2">选项2</RadioGroupItem>
      </RadioGroup>
    );
    const radio1 = getByRole('radio', { name: '选项1' });
    expect(radio1).toHaveAttribute('aria-checked', 'true');
  });

  test('受控模式测试', () => {
    const { getByRole, rerender } = render(
      <RadioGroup value="2">
        <RadioGroupItem value="1">选项1</RadioGroupItem>
        <RadioGroupItem value="2">选项2</RadioGroupItem>
      </RadioGroup>
    );
    const radio2 = getByRole('radio', { name: '选项2' });
    expect(radio2).toHaveAttribute('aria-checked', 'true');

    rerender(
      <RadioGroup value="1">
        <RadioGroupItem value="1">选项1</RadioGroupItem>
        <RadioGroupItem value="2">选项2</RadioGroupItem>
      </RadioGroup>
    );
    const radio1 = getByRole('radio', { name: '选项1' });
    expect(radio1).toHaveAttribute('aria-checked', 'true');
  });

  test('点击事件测试', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <RadioGroup onValueChange={handleChange}>
        <RadioGroupItem value="1">选项1</RadioGroupItem>
        <RadioGroupItem value="2">选项2</RadioGroupItem>
      </RadioGroup>
    );
    const radio2 = getByRole('radio', { name: '选项2' });
    fireEvent.click(radio2);
    expect(handleChange).toHaveBeenCalledWith('2');
  });

  test('禁用状态测试', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <RadioGroup disabled onValueChange={handleChange}>
        <RadioGroupItem value="1">选项1</RadioGroupItem>
        <RadioGroupItem value="2">选项2</RadioGroupItem>
      </RadioGroup>
    );
    const radio2 = getByRole('radio', { name: '选项2' });
    fireEvent.click(radio2);
    expect(handleChange).not.toHaveBeenCalled();
    expect(radio2).toHaveAttribute('aria-disabled', 'true');
  });
});
