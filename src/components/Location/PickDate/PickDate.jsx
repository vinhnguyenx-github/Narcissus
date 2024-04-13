import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./PickDate.css";

const PickDate = ({ selectedRange, minDate, onRangeChange }) => {
  const [range, setRange] = useState(selectedRange);
  const refOne = useRef(null);

  useEffect(() => {
    if (selectedRange) {
      setRange(selectedRange);
    }
  }, [selectedRange]);

  const handleRangeChange = (newRange) => {
    setRange([newRange.selection]);
    onRangeChange(newRange.selection);
  };

  return (
    <div className="calendarWrap">
      <div ref={refOne} className="lmao">
        <DateRange
          onChange={handleRangeChange}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          direction="horizontal"
          className="calendarElement"
          rangeColors={["#606160"]}
          showSelectionPreview={true}
          minDate={minDate}
        />
      </div>
    </div>
  );
};

export default PickDate;
