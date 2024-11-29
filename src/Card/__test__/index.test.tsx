import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../index';

describe('Card 组件', () => {
  test('渲染卡片组件', () => {
    render(<Card className="test-class">卡片内容</Card>);
    const cardElement = screen.getByText('卡片内容');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass('hara-card test-class');
  });

  test('渲染卡片头部组件', () => {
    render(<CardHeader className="test-class">头部内容</CardHeader>);
    const headerElement = screen.getByText('头部内容');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('hara-card-header test-class');
  });

  test('渲染卡片标题组件', () => {
    render(<CardTitle className="test-class">标题内容</CardTitle>);
    const titleElement = screen.getByText('标题内容');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('hara-card-title test-class');
  });

  test('渲染卡片描述组件', () => {
    render(<CardDescription className="test-class">描述内容</CardDescription>);
    const descriptionElement = screen.getByText('描述内容');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveClass('hara-card-description test-class');
  });

  test('渲染卡片内容组件', () => {
    render(<CardContent className="test-class">内容</CardContent>);
    const contentElement = screen.getByText('内容');
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveClass('hara-card-content test-class');
  });

  test('渲染卡片底部组件', () => {
    render(<CardFooter className="test-class">底部内容</CardFooter>);
    const footerElement = screen.getByText('底部内容');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass('hara-card-footer test-class');
  });
});
