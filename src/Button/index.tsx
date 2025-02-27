import React, { type FC, type PropsWithChildren } from 'react';
// 引入样式
import './styles/index.css';
export interface ButtonProps {
  /* 按钮类型 */
  variant?: 'primary' | 'ghost' | 'outline' | 'link';
  /* 按钮尺寸 */
  size?: 'sm' | 'md' | 'lg' | 'icon';
  /* 自定义样式 */
  style?: React.CSSProperties;
  /* 自定义类名 */
  className?: string;
  /* 点击事件 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { variant = 'primary', size = 'md' , children, style, onClick, className } = props;
  return (
    <button
      type="button"
      className={`hara-btn ${variant ? 'hara-btn-' + variant : ''} ${size ? 'hara-btn-' + size : ''} ${
        className !== undefined ? className : ''
      }`}
      style={style} // 应用自定义样式
      onClick={onClick} // 应用点击事件
    >
      {children}
    </button>
  );
};

export default Button;
