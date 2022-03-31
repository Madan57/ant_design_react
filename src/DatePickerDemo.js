import React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

const DatePickerDemo = () => {
  return (
    <div>
      <Space direction='vertical'>
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker='week' />
        <DatePicker onChange={onChange} picker='month' />
        <DatePicker onChange={onChange} picker='quarter' />
        <DatePicker onChange={onChange} picker='year' />

        <RangePicker style={{ color: "green" }} picker='date' />
      </Space>
    </div>
  );
};

export default DatePickerDemo;
