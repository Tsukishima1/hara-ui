import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Calendar from '..';

describe('Calendar 组件', () => {
  it('能够正确渲染日历组件', () => {
    render(<Calendar />);
    expect(screen.getByText('Su')).toBeInTheDocument();
  });

  it('能够正确渲染日历组件的样式', () => {
    const { container } = render(<Calendar />);
    expect(container.querySelector('.hara-calendar')).toBeInTheDocument();
  });

  it('能够正确获取选择的日期', () => {
    const onSelect = jest.fn();
    render(<Calendar mode="single" onSelect={onSelect} />);
    fireEvent.click(screen.getByText('1'));
    expect(onSelect).toBeCalled();
  });
});
