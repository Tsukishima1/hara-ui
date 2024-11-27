import React, { FC, useEffect, useState } from 'react';
import './styles/index.css';

interface SwitchProps {
  id?: string; // id，用于关联 label
  defaultChecked?: boolean; // 默认是否选中
  checked?: boolean; // 是否选中
  onCheckedChange?: (checked: boolean) => void; // 状态改变回调
  disabled?: boolean; // 是否禁用
  style?: React.CSSProperties; // 样式
  className?: string; // 类名
}

const Switch: FC<SwitchProps> = (props) => {
  const { id, style, className, onCheckedChange, defaultChecked, checked, disabled } = props;

  const [internalChecked, setInternalChecked] = useState(defaultChecked || false);

  // 监听 checked 变化，同步更新内部状态
  useEffect(()=>{
    if (checked !== undefined){
      setInternalChecked(checked);
    }
  }, [checked]);

  const handleClick = () => {
    if(disabled) return;
    const newChecked = !internalChecked;
    if(checked === undefined){ // 如果没有传入 checked 属性，则内部状态随之改变
      setInternalChecked(newChecked);
    }
    if(onCheckedChange) {
      onCheckedChange(newChecked);
    }
  }

  return (
    <button
      id={id}
      type="button"
      role="switch"
      value="on"
      className={`hara-switch ${className !== undefined ? className : ''}`}
      style={style}
      aria-checked={internalChecked}
      data-state={internalChecked ? 'checked' : 'unchecked'}
      data-disabled={disabled}
      onClick={handleClick}
    >
      <span
        className="hara-switch-thumb"
        data-state={internalChecked ? 'checked' : 'unchecked'}
      ></span>
    </button>
  );
};

export default Switch;
