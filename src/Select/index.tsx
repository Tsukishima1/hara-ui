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
import { createPortal } from 'react-dom';
import './styles/index.css';

interface SelectProps {
  /* 选择后的回调函数 */
  onChange?: (value: string) => void;
  /* 自定义类名 */
  className?: string;
  /* 自定义样式 */
  style?: React.CSSProperties;
}

interface SelectItemProps {
  /* 选项的值 */
  value: string;
}

interface SelectContextProps {
  /* 是否打开下拉菜单 */
  isOpen: boolean;
  /* 被选中项的标签内容 */
  selectedLabel?: React.ReactNode;
  /* 被选中项的值 */
  selectedValue?: string;
  /* 切换下拉菜单的打开状态 */
  toggleOpen: () => void;
  /* 选择某个选项时的回调函数
  参数 value: 选项的值
  参数 children: 选项的标签内容 */
  onSelect: (value: string, children: React.ReactNode) => void;

  setTriggerRef: (ref: HTMLButtonElement) => void;
  triggerRef?: HTMLButtonElement | null;
  setContentRef: (ref: HTMLDivElement) => void;
  contentRef?: HTMLDivElement | null;
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
  const [triggerRef, setTriggerRef] = useState<HTMLButtonElement | null>(null);
  const [contentRef, setContentRef] = useState<HTMLDivElement | null>(null);

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
        !selectRef.current.contains(event.target as Node) &&
        contentRef &&
        !contentRef.contains(event.target as Node)
      ) {
        setIsOpen(false);
        document.getElementById("root")?.style.setProperty("pointer-events", "auto");
        document.body.style.overflow = "auto";
        document.body.style.marginRight="0";
      }
    };

    const handleWindowBlur = () => {
      setIsOpen(false);
      document.getElementById("root")?.style.setProperty("pointer-events", "auto");
      document.body.style.overflow = "auto";
      document.body.style.marginRight="0";
    };

    if(isOpen) {
      document.getElementById("root")?.style.setProperty("pointer-events", "none");
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "15px";
    }

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('blur', handleWindowBlur);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.addEventListener('blur', handleWindowBlur);
      document.getElementById("root")?.style.setProperty("pointer-events", "auto");
      document.body.style.overflow = "auto";
      document.body.style.marginRight="0";
    };
  }, [selectRef, contentRef]);

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        toggleOpen,
        onSelect: handleSelect,
        selectedValue,
        selectedLabel,
        setTriggerRef,
        triggerRef,
        setContentRef,
        contentRef,
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

  useEffect(() => {
    if (context.isOpen && triggerRef.current) {
      context.setTriggerRef(triggerRef.current);
    }
  }, [context.isOpen]);

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
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = context?.triggerRef;

  if (!context) throw new Error('SelectContent 必须在 Select 中使用');

  useEffect(() => {
    if (context.isOpen && contentRef.current) {
      context.setContentRef(contentRef.current);
    }
  }, [context.isOpen]);

  let triggerRect = triggerRef?.getBoundingClientRect();

  // 其中 getBoundingClientRect 方法返回的是一个 DOMRect 对象，包含了元素的位置信息，如下：
  let width = triggerRect?.width;
  let height = triggerRect?.height;
  let x = triggerRect?.x;
  let y = (triggerRect?.y ?? 0) + (height ?? 0) + 10;

  return context.isOpen
    ? createPortal(
        <div
          ref={contentRef}
          className="hara-select-content"
          style={{
            transform: `translate(${x}px, ${y}px)`,
            width: `${width}px`,
          }}
        >
          {children}
        </div>,
        document.body,
      )
    : null;
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
      onClick={() => {
        context.onSelect(value, children);
        document.getElementById("root")?.style.setProperty("pointer-events", "auto");
        document.body.style.overflow = "auto";
        document.body.style.marginRight="0";
      }}
    >
      {children}
      {isSelected && <Check size={14} />}
    </div>
  );
};
