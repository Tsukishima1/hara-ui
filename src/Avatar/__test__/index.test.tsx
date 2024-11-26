import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Avatar, AvatarImg, AvatarFallback } from '../index';

describe('Avatar组件', () => {
  test('能够渲染所有组件内容', () => {
    render(
    <Avatar>
      <AvatarImg src="test.jpg" alt="test image" />
      <AvatarFallback>Fallback</AvatarFallback>
    </Avatar>);
    const imgElement = screen.getByAltText('test image');
    const fallbackElement = screen.getByText('Fallback');
    expect(imgElement).toBeInTheDocument();
    expect(fallbackElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'test.jpg');
  });

  test('能够在加载失败时显示文本', () => {
    render(
      <Avatar>
        <AvatarImg src="test.jpg" alt="test image" />
        <AvatarFallback>Fallback</AvatarFallback>
      </Avatar>
    );
    const imgElement = screen.getByAltText('test image');
    const fallbackElement = screen.getByText('Fallback');
    expect(fallbackElement).toBeVisible();
    imgElement.dispatchEvent(new Event('error'));
    expect(fallbackElement).toBeVisible();
  });
});
