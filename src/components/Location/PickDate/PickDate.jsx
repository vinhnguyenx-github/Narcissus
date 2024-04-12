import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./PickDate.css";

const PickDate = ({ selectedRange }) => {
  const [range, setRange] = useState(
    selectedRange || [
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 3),
        key: "selection",
      },
    ]
  );

  const [open, setOpen] = useState(true);

  const refOne = useRef(null);

  useEffect(() => {
    if (selectedRange) {
      setRange(selectedRange);
    }
  }, [selectedRange]);

  return (
    <div className="calendarWrap">
      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
            rangeColors={["#606160"]}
            showSelectionPreview={true}
            minDate={new Date()}
          />
        )}
      </div>
    </div>
  );
};

export default PickDate;
