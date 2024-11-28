import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import './styles/index.css';

interface RadioGroupProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

interface RadioGroupItemProps {
  id?: string;
  disabled?: boolean;
  value: string;
}

interface RadioGroupContextProps {
  groupValue: string;
  setGroupValue: (value: string) => void;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextProps | undefined>(
  undefined,
);

const RadioGroup: FC<PropsWithChildren<RadioGroupProps>> = (props) => {
  const {
    defaultValue,
    value,
    onValueChange,
    disabled=false,
    style,
    className,
    children,
  } = props;

  const [groupValue, setGroupValue] = useState(defaultValue || '');

  useEffect(()=>{
    if(value !== undefined){ // 当 value 变化时，同步更新内部状态
      setGroupValue(value);
    }
  }, [value])

  const handleValueChange = (newValue: string) => {
    if (disabled) return;
    if(value===undefined) { // 非受控模式下更新内部状态
      setGroupValue(newValue);
    }
    if(onValueChange){
      onValueChange(newValue);
    }
  }

  return (
    <RadioGroupContext.Provider
      value={{
        groupValue,
        setGroupValue: handleValueChange,
        onValueChange,
        disabled,
      }}
    >
      <div
        role="radiogroup"
        aria-disabled={disabled}
        data-disabled={disabled}
        style={style}
        className={`hara-radiogroup ${
          className === undefined ? '' : className
        }`}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

const RadioGroupItem: FC<PropsWithChildren<RadioGroupItemProps>> = (
  props,
) => {
  const { id, value, children } = props;
  let disabled = props.disabled || false;
  const context = useContext(RadioGroupContext);

  if (context === undefined) {
    throw new Error('RadioGroupItem 必须在 RadioGroup 中使用');
  }

  const { groupValue, setGroupValue } = context;

  if (context.disabled) {
    disabled = true;
  }

  const checked = groupValue === value;

  const handleClick = () => {
    if (disabled) return;
    setGroupValue(value); // 更新组件内部状态
  };

  return (
    <button
      id={id}
      type="button"
      role="radio"
      aria-checked={checked}
      aria-disabled={disabled}
      data-checked={checked}
      data-disabled={disabled}
      onClick={handleClick}
      className="hara-radiogroup-item"
    >
      {children}
    </button>
  );
};

export { RadioGroup, RadioGroupItem };
