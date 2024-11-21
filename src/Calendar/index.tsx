import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronProps, DayPicker } from 'react-day-picker';
import './styles/index.css';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({
  style,
  className,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      mode='single'
      style={style}
      className={'hara-calendar' + (className ? ' ' + className : '')}
      showOutsideDays={showOutsideDays}
      components={{
        Chevron: (props: ChevronProps) => {
          if (props.orientation === 'left') {
            return <ChevronLeft {...props} className='hara-calendar-chev'/>;
          } else if (props.orientation === 'right') {
            return <ChevronRight {...props} className='hara-calendar-chev'/>;
          }
          return <ChevronLeft {...props} className='hara-calendar-chev'/>; // Default return value
        },
      }}
      {...props}
    />
  );
};

export default Calendar;
