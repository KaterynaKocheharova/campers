import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import FormField from "../FormField/FormField";
import { CiCalendar } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.css";
import { registerLocale } from "react-datepicker";
import { enUS } from "date-fns/locale";
import { format } from "date-fns";
import { saveToSessionStorage } from "../../utils/sessionStorage";

const Datepicker = ({ onChange, selected }) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <FormField
      name="bookingDate"
      value={value}
      onClick={onClick}
      placeholder="Booking date*"
    />
  ));

  const customLocale = {
    ...enUS,
    options: {
      ...enUS.options,
      weekStartsOn: 1,
    },
    localize: {
      ...enUS.localize,
      day: (n) => format(new Date(2023, 0, n + 1), "EEE"),
    },
  };

  registerLocale("custom-en", customLocale);

  return (
    <DatePicker
      locale="custom-en"
      showIcon
      icon={<CiCalendar />}
      toggleCalendarOnIconClick
      selected={selected}
      onChange={(date) => {
        onChange(date);
        saveToSessionStorage("bookingDate", date);
      }}
      dateFormat="yyyy/MM/dd"
      placeholderText="Booking date*"
      customInput={<CustomInput />}
    />
  );
};

export default Datepicker;
