import React, { type FC, type PropsWithChildren } from 'react';
import './styles/index.css';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /* 自定义样式 */
  style?: React.CSSProperties;
  /* 自定义类名 */
  className?: string;
}
const Input: FC<PropsWithChildren<InputProps>> = (props) => {
  const { type = 'text', placeholder, style, className, value, onChange, ...rest } = props
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`hara-input ${className}`}
      style={style}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
