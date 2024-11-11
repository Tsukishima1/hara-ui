import React, { useState, type FC, type PropsWithChildren } from 'react';
import './styles/index.css';

export interface TooltipProps {
  /* 提示文字 */
  content: string;
  /* 提示框显示位置 */
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: FC<PropsWithChildren<TooltipProps>> = (props) => {
  const { children, content, placement = 'top' } = props;
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  // 根据 position 设置 tooltip 位置的类名
  const positionClass = `hara-tooltip-${placement}`;

  return (
    <div
      className="hara-tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div className={`hara-tooltip ${positionClass}`}>{content}</div>
      )}
    </div>
  );
};

export default Tooltip;
