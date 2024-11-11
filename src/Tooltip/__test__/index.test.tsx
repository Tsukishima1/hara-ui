import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import Tooltip from '..';

describe('Tooltip组件', () => {
  it('能够正确渲染提示框容器', () => {
    const { container } = render(
      <Tooltip content="提示文本" placement="top">
        <span>test</span>
      </Tooltip>,
    );
    expect(
      container.querySelector('.hara-tooltip-wrapper'),
    ).toBeInTheDocument();
  });

  it('鼠标悬浮在元素上时，能够正确显示和隐藏提示框', async () => {
    const { getByText, queryByText } = render(
      <Tooltip content="提示文本" placement="top">
        <span>test</span>
      </Tooltip>,
    );
    // 获取子元素
    const spanElement = getByText('test');
    // 触发鼠标进入事件
    fireEvent.mouseEnter(spanElement);
    // 等待提示框出现
    await waitFor(() => {
      expect(queryByText('提示文本')).toBeInTheDocument();
    });
    // 触发鼠标离开事件
    fireEvent.mouseLeave(spanElement);
    // 等待提示框消失
    await waitFor(() => {
      expect(queryByText('提示文本')).not.toBeInTheDocument();
    });
  });

  it('能够正确渲染提示框的位置', async () => {
    const { container, getByText } = render(
      <Tooltip content="提示文本" placement="top">
        <span>test</span>
      </Tooltip>,
    );
    const spanElement = getByText('test');
    fireEvent.mouseEnter(spanElement);

    await waitFor(() => {
      expect(container.querySelector('.hara-tooltip-top')).toBeInTheDocument();
    });
  });
});
