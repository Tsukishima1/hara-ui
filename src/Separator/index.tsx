import React from 'react';
import './styles/index.css';

export interface SeparatorProps {
  /* 分割线方向 */
  orientation?: 'horizontal' | 'vertical';
  /* 自定义类名 */
  className?: string;
  /* 自定义样式 */
  style?: React.CSSProperties;
}

const Separator: React.FC<SeparatorProps> = (props) => {
  const { orientation = 'horizontal',className, style } = props;
  return <div
    style={style}
    className={`hara-separator hara-separator-${orientation} ${className !== undefined ? className : ''}`}
  />;
}

export default Separator;
