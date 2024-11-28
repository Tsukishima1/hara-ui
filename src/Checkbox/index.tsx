import React, { FC, useEffect, useState } from 'react';
import "./styles/index.css";
import { Check } from 'lucide-react';

export interface CheckboxProps {
  id?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const Checkbox: FC<CheckboxProps> = (props) => {
  const { id, defaultChecked, checked, onCheckedChange, disabled, style, className } = props;

  const [internalChecked, setInternalChecked] = useState(
    defaultChecked || false,
  );

  // 监听 checked 变化，同步更新内部状态
  useEffect(() => {
    if (checked !== undefined) {
      setInternalChecked(checked);
    }
  }, [checked]);

  const handleClick = () => {
    if (disabled) return;
    const newChecked = !internalChecked;
    if (checked === undefined) {
      // 如果没有传入 checked 属性，则内部状态随之改变
      setInternalChecked(newChecked);
    }
    if (onCheckedChange) {
      onCheckedChange(newChecked);
    }
  };

  return (
    <button
      id={id}
      type="button"
      role="checkbox"
      value="on"
      style={style}
      className={`hara-checkbox ${className !== undefined ? className : ''}`}
      onClick={handleClick}
      aria-checked={internalChecked}
      data-state={internalChecked ? 'checked' : 'unchecked'}
      data-disabled={disabled}
    >
      {
        internalChecked? (
          <span className="hara-checkbox-checked-icon">
            <Check />
          </span>
        ): null
      }
    </button>
  );
};

export default Checkbox;

