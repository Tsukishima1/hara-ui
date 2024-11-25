import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../index';

describe('DropdownMenu', () => {
  test('能够渲染出下拉菜单', () => {
    const { getByText, queryByText } = render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(queryByText('Item 1')).not.toBeInTheDocument();
    expect(queryByText('Item 2')).not.toBeInTheDocument();

    fireEvent.click(getByText('Open Menu'));

    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();

    fireEvent.click(getByText('Open Menu'));

    expect(queryByText('Item 1')).not.toBeInTheDocument();
    expect(queryByText('Item 2')).not.toBeInTheDocument();
  });

  test('能够在点击下拉菜单的选项时执行回调', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleClick}>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    fireEvent.click(getByText('Open Menu'));
    fireEvent.click(getByText('Item 1'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
