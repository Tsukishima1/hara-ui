import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from 'hara-ui/Select';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { ChevronProps, DayPicker, DropdownProps } from 'react-day-picker';
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
  const finalCaptionLayout =
    captionLayout ?? (withDropdown ? 'dropdown' : 'label');

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
        Dropdown(props: DropdownProps) {
          return (
            <Select
              value={props.value?.toString()}
              onValueChange={(value: string) =>
                props.onChange?.({
                  target: { value: value },
                } as React.ChangeEvent<HTMLSelectElement>)
              }
              style={{width: '100%', minWidth: 'auto'}}
            >
              <SelectTrigger style={{fontWeight:'bold',padding:'5px 12px'}}>
                {props.options?.find((option) => option.value === props.value)
                  ?.label ?? 'Select an option'}
              </SelectTrigger>
              <SelectContent>
                {props.options?.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value.toString()}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        },
      }}
      {...props}
    />
  );
};

export default Calendar;
