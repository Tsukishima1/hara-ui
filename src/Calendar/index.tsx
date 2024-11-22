import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronProps, DayPicker } from 'react-day-picker';
import './styles/index.css';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  withDropdown?: boolean;
};

const Calendar = ({
  style,
  className,
  captionLayout,
  showOutsideDays = true,
  withDropdown = false,
  ...props
}: CalendarProps) => {
  const finalCaptionLayout = captionLayout ?? (withDropdown ? 'dropdown' : 'label');

  return (
    <DayPicker
      mode="single"
      style={style}
      className={'hara-calendar' + (className ? ' ' + className : '')}
      showOutsideDays={showOutsideDays}
      captionLayout={finalCaptionLayout}
      components={{
        Chevron: (props: ChevronProps) => {
          if (props.orientation === 'left') {
            return <ChevronLeft {...props} className="hara-calendar-chev" />;
          } else if (props.orientation === 'right') {
            return <ChevronRight {...props} className="hara-calendar-chev" />;
          }
          return <ChevronLeft {...props} className="hara-calendar-chev" />; // Default return value
        },
      }}
      {...props}
    />
  );
};

export default Calendar;
