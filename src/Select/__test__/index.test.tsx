import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../index';

describe('Select Component', () => {
  test('能够渲染出Select组件', () => {
    const { getByText } = render(
      <Select>
        <SelectTrigger>Select an option</SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(getByText('Select an option')).toBeInTheDocument();
  });

  test('能够正确打开和关闭下拉菜单', () => {
    const { getByText, queryByText } = render(
      <Select>
        <SelectTrigger>Select an option</SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = getByText('Select an option');
    fireEvent.click(trigger);
    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(queryByText('Option 1')).not.toBeInTheDocument();
    expect(queryByText('Option 2')).not.toBeInTheDocument();
  });

  test('能够成功选择一个选项', () => {
    const handleChange = jest.fn();
    const { getByText } = render(
      <Select onChange={handleChange}>
        <SelectTrigger>Select an option</SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = getByText('Select an option');
    fireEvent.click(trigger);
    const option = getByText('Option 1');
    fireEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith('1');
    expect(trigger).toHaveTextContent('Option 1');
  });

  test('点击组件外部时能关闭选项框', () => {
    const { getByText, queryByText } = render(
      <div>
        <Select>
          <SelectTrigger>Select an option</SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
        <div>Outside Element</div>
      </div>,
    );

    const trigger = getByText('Select an option');
    fireEvent.click(trigger);
    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();

    const outsideElement = getByText('Outside Element');
    fireEvent.mouseDown(outsideElement);

    expect(queryByText('Option 1')).not.toBeInTheDocument();
    expect(queryByText('Option 2')).not.toBeInTheDocument();
  });
});
