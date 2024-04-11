import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./PickDate.css";

const PickDate = () => {
  const handleDateRangeChange = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    const formattedStartDate = startDate
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
      .split("/")
      .reverse()
      .join("-");

    const formattedEndDate = endDate
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
      .split("/")
      .reverse()
      .join("-");

    console.log("Selected Date Range:", {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    });

    setRange([ranges.selection]);
  };

  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [isIconUp, setIsIconUp] = useState(false); // State to toggle the icon

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
      setIsIconUp(false); // Reset icon state when closing calendar
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
      setIsIconUp(false); // Reset icon state when closing calendar
    }
  };

  return (
    <div className="calendarWrap">
      <div className="inputContainer">
        <input
          value={`${format(
            range[0].startDate,
            "MMM d"
          )}         -         ${format(range[0].endDate, "MMM d")}`}
          readOnly
          className="inputBox"
          style={{ height: "30px", width: "200px", fontSize: "14px" }}
          onClick={() => {
            setOpen((open) => !open);
            setIsIconUp((isIconUp) => !isIconUp); // Toggle icon state
          }}
        />
        {isIconUp ? (
          <FaAngleUp
            className="arrowIcon"
            onClick={() => {
              setOpen(false);
              setIsIconUp(false); // Reset icon state when closing calendar
            }}
          />
        ) : (
          <FaAngleDown
            className="arrowIcon"
            onClick={() => {
              setOpen(true);
              setIsIconUp(true); // Set icon state to up when opening calendar
            }}
          />
        )}
        {/* Arrow down or up icon based on state */}
      </div>

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={handleDateRangeChange}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="calendarElement"
            rangeColors={["black"]}
            color="#606160"
            showSelectionPreview={true}
            calendarContainerStyle={{
              width: "10px", // Set the width of the dropdown here
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PickDate;
