import { DateRange as DateRangeType } from "@/app/types";
import { formatMonthYear } from "@/utils/date";

interface DateRangeProps {
  dateRange: DateRangeType;
}

export function DateRange({ dateRange }: DateRangeProps) {
  const { start_date, end_date } = dateRange;

  const getInnerText = () => {
    const end = end_date ? formatMonthYear(end_date) : "current";
    return `${formatMonthYear(start_date)} - ${end}`;
  };

  return <div>{getInnerText()}</div>;
}
