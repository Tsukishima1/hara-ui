import React, { type FC, type PropsWithChildren } from 'react';
import './styles/index.css';
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /* 自定义样式 */
  style?: React.CSSProperties;
  /* 自定义类名 */
  className?: string;
}
const Input: FC<PropsWithChildren<InputProps>> = (props) => {
  const { style, className, ...rest } = props;
  return (
    <input
      className={`hara-input ${className !== undefined ? className : ''}`}
      style={style}
      {...rest}
    />
  );
};

export default Input;
