import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./PickDate.css";

const PickDate = () => {
  const refOne = useRef(null);
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    // Update the selected date range when the user makes a selection
    setSelectedDateRange([ranges.selection]);
  };

  return (
    <div className="calendarWrap">
      <div ref={refOne} className="">
        <DateRange
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          direction="horizontal"
          className="calendarElement"
          ranges={selectedDateRange}
          onChange={handleSelect}
          rangeColors={["#606160"]}
          showSelectionPreview={true}
          minDate={new Date()}
        />
      </div>
    </div>
  );
};

export default PickDate;
