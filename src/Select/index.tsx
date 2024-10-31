/* eslint-disable @typescript-eslint/no-unused-vars */
import { Check, ChevronsUpDown } from 'lucide-react';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import './styles/index.css';

/**
 * Select 组件的属性。
 *
 * @property {string} [value] - 选中的值。
 * @property {(value: string) => void} [onChange] - 当选中的值变化时调用的回调函数。
 * @property {string} [className] - Select 组件的附加类名。
 * @property {React.CSSProperties} [style] - Select 组件的内联样式。
 */
interface SelectProps {
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

interface SelectItemProps {
  value: string;
}

interface SelectContextProps {
  isOpen: boolean;
  selectedLabel?: React.ReactNode;
  selectedValue?: string;
  toggleOpen: () => void;
  onSelect: (value: string, children: React.ReactNode) => void;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

export const Select: React.FC<PropsWithChildren<SelectProps>> = (props) => {
  const { children, className, style, onChange } = props;

  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const [selectedLabel, setSelectedLabel] = useState<
    React.ReactNode | undefined
  >();

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (val: string, label: React.ReactNode) => {
    setSelectedValue(val);
    setSelectedLabel(label);
    setIsOpen(false);
    if (onChange) onChange(val);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        toggleOpen,
        onSelect: handleSelect,
        selectedValue,
        selectedLabel,
      }}
    >
      <div
        ref={selectRef}
        className={`hara-select ${className !== undefined ? className : ''}`}
        style={style}
      >
        {children}
      </div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const context = useContext(SelectContext);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const triggerClassName = `hara-select-trigger ${
    context?.isOpen ? 'focused' : ''
  }`;

  if (!context) throw new Error('SelectTrigger 必须在 Select 中使用');

  const handleClick = () => {
    context.toggleOpen();
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  return (
    <button
      type="button"
      className={triggerClassName}
      onClick={handleClick}
      ref={triggerRef}
    >
      {context.selectedLabel || children}
      <ChevronsUpDown size={14} className="hara-select-chevrons" />
    </button>
  );
};

export const SelectContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const context = useContext(SelectContext);
  if (!context) throw new Error('SelectContent 必须在 Select 中使用');

  return context.isOpen ? (
    <div className="hara-select-content">{children}</div>
  ) : null;
};

export const SelectItem: React.FC<PropsWithChildren<SelectItemProps>> = ({
  value,
  children,
}) => {
  const context = useContext(SelectContext);
  if (!context) throw new Error('SelectItem 必须在 Select 中使用');

  const isSelected = context.isOpen && context.selectedValue === value;

  return (
    <div
      className={`hara-select-item ${isSelected ? 'selected' : ''}`}
      onClick={() => context.onSelect(value, children)}
    >
      {children}
      {isSelected && <Check size={14} />}
    </div>
  );
};
