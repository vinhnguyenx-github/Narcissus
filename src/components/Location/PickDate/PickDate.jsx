import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import { FaAngleDown } from "react-icons/fa6"; // Import the arrow down icon

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./PickDate.css"; // Import CSS for custom styling

const PickDate = () => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      <div className="inputContainer">
        <input
          value={`${format(range[0].startDate, "MMM d")} - ${format(
            range[0].endDate,
            "MMM d"
          )}`}
          readOnly
          className="inputBox"
          style={{ height: "30px", width: "130px", fontSize: "14px" }}
          onClick={() => setOpen((open) => !open)}
        />
        <FaAngleDown
          className="arrowIcon"
          onClick={() => setOpen((open) => !open)}
        />{" "}
        {/* Arrow down icon */}
      </div>

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
          />
        )}
      </div>
    </div>
  );
};

export default PickDate;
