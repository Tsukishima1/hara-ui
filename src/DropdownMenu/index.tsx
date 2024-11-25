import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import './styles/index.css';

interface DropdownMenuContextProps {
  isOpen: boolean;
  toggleOpen: () => void;

  setTriggerRef: (ref: HTMLButtonElement) => void;
  triggerRef?: HTMLButtonElement | null;
  setContentRef: (ref: HTMLDivElement) => void;
  contentRef?: HTMLDivElement | null;
}

interface DropdownMenuTriggerProps {
  className?: string;
  style?: React.CSSProperties;
}

interface DropdownMenuContentProps {
  className?: string;
  style?: React.CSSProperties;
}

interface DropdownMenuItemProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const DropdownMenuContext = createContext<DropdownMenuContextProps | undefined>(
  undefined,
);

const DropdownMenu: FC<PropsWithChildren> = ({ children }) => {
  const dropdownmenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [triggerRef, setTriggerRef] = useState<HTMLButtonElement | null>(null);
  const [contentRef, setContentRef] = useState<HTMLDivElement | null>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    document.getElementById("root")?.style.setProperty("pointer-events", "auto");
    document.body.style.overflow = "auto";
    document.body.style.marginRight="0";
  }

  const getScrollbarWidth = () => {
    // 创建一个隐藏的 div 元素
    const scrollDiv = document.createElement('div');
    scrollDiv.style.visibility = 'hidden';
    scrollDiv.style.overflow = 'scroll'; // 强制显示滚动条
    scrollDiv.style.width = '50px';
    scrollDiv.style.height = '50px';
    document.body.appendChild(scrollDiv);

    // 创建一个子 div 元素
    const innerDiv = document.createElement('div');
    innerDiv.style.width = '100%';
    scrollDiv.appendChild(innerDiv);

    // 计算滚动条宽度
    const scrollbarWidth = scrollDiv.offsetWidth - innerDiv.offsetWidth;

    // 移除创建的 div 元素
    document.body.removeChild(scrollDiv);

    return scrollbarWidth;
  };

  // 点击别处关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownmenuRef.current &&
        !dropdownmenuRef.current.contains(e.target as Node) &&
        contentRef &&
        !contentRef.contains(e.target as Node)
      ) {
        setIsOpen(false);
        handleClose();
      }
    };

    if(isOpen) {
      const scrollbarWidth = getScrollbarWidth();
      document.getElementById("root")?.style.setProperty("pointer-events", "none");
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scrollbarWidth}px`;
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      handleClose();
    }

  }, [contentRef, dropdownmenuRef]);

  return (
    <DropdownMenuContext.Provider
      value={{
        isOpen,
        toggleOpen,
        triggerRef,
        setTriggerRef,
        contentRef,
        setContentRef,
      }}
    >
      <div className="hara-dropdownmenu" ref={dropdownmenuRef}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
};

const DropdownMenuTrigger: FC<PropsWithChildren<DropdownMenuTriggerProps>> = (
  props,
) => {
  const context = useContext(DropdownMenuContext);
  const triggerRef = useRef<HTMLButtonElement>(null);

  if (!context)
    throw new Error('DropdownMenuTrigger 必须在 DropdownMenu 中使用');
  const { children, className, style } = props;

  const handleClick = () => {
    context.toggleOpen();
  };

  useEffect(() => {
    if (context.isOpen && triggerRef.current) {
      context.setTriggerRef(triggerRef.current);
    }
  }, [context.isOpen]);

  return (
    <button
      type="button"
      className={
        'hara-dropdownmenu-trigger' + (className ? ' ' + className : '')
      }
      style={style}
      onClick={handleClick}
      ref={triggerRef}
    >
      {children}
    </button>
  );
};

const DropdownMenuContent: FC<PropsWithChildren<DropdownMenuContentProps>> = (props) => {
  const { children, className, style } = props;
  const context = useContext(DropdownMenuContext);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = context?.triggerRef;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVisible, setIsVisible] = useState(false); // 控制是否显示到 DOM
  const [isAnimating, setIsAnimating] = useState(false); // 控制动画状态

  if (!context)
    throw new Error('DropdownMenuContent 必须在 DropdownMenu 中使用');

  useEffect(() => {
    if (context.isOpen && contentRef.current) {
      context.setContentRef(contentRef.current);
    }
    if (context.isOpen) {
      setIsVisible(true); // 打开时立即显示
      setTimeout(() => setIsAnimating(true), 0); // 延迟触发动画，确保 `open` 类生效
    } else {
      setIsAnimating(false); // 关闭动画开始
      const timer = setTimeout(() => setIsVisible(false), 50); // 动画结束后卸载
      return () => clearTimeout(timer);
    }
  }, [context.isOpen]);

  let triggerRect = triggerRef?.getBoundingClientRect();
  let width = triggerRect?.width;
  let height = triggerRect?.height;
  let x = (triggerRect?.x ?? 0) + (width ?? 0) / 2;
  let y = (triggerRect?.y ?? 0) + (height ?? 0) + 5;

  return context.isOpen
    ? createPortal(
        <div
          ref={contentRef}
          className={`hara-dropdownmenu-content ${isAnimating ? 'open' : ''}` + (className ? ' ' + className : '')}
          style={{
            transform: `translate(${x}px, ${y}px) translateX(-50%)`,
            ...style,
          }}
        >
          {children}
        </div>,
        document.body,
      )
    : null;
};

const DropdownMenuItem: FC<PropsWithChildren<DropdownMenuItemProps>> = (
  props,
) => {
  const { children, className, style, onClick } = props;
  const context = useContext(DropdownMenuContext);
  if (!context) throw new Error('DropdownMenuItem 必须在 DropdownMenu 中使用');

  return (
    <div
      className={'hara-dropdownmenu-item' + (className ? ' ' + className : '')}
      style={style}
      onClick={() => {
        context?.toggleOpen();
        document.getElementById("root")?.style.setProperty("pointer-events", "auto");
        document.body.style.overflow = "auto";
        document.body.style.marginRight="0";
        onClick?.();
      }}
    >
      {children}
    </div>
  );
};

const DropdownMenuSeparator: FC = () => {
  return <div className="hara-dropdownmenu-separator" />;
}

const DropdownMenuLabel: FC<PropsWithChildren> = ({children}) => {
  return <div className="hara-dropdownmenu-label">{children}</div>
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
};
