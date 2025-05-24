"use client";

import { useState } from "react";
import { DateRange, RangeKeyDict, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (
    city: string,
    dates: { checkIn: Date; checkOut: Date },
    guests: number
  ) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>("");
  const [dates, setDates] = useState<any[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [tempDates, setTempDates] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [guests, setGuests] = useState<number>(1);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

  const handleDateChange = (ranges: RangeKeyDict) => {
    const range = ranges["selection"] as Range;
    if (range.startDate && range.endDate) {
      setTempDates([
        {
          ...range,
          startDate: range.startDate,
          endDate: range.endDate,
          key: "selection",
        },
      ]);
    }
  };

  const handleApply = () => {
    setDates(tempDates);
    setShowCalendar(false);
  };

  const handleClear = () => {
    setTempDates([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
  };

  const handleSearch = () => {
    const checkIn = dates[0].startDate || new Date();
    const checkOut = dates[0].endDate || new Date();
    onSearch(city, { checkIn, checkOut }, guests);
  };

  const formatToFullDate = (dateString: string) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "-";
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  console.log("dates:", dates);

  return (
    <div className="rounded-tr-[65px] rounded-tl-[65px] p-4 bg-white">
      <div className="rounded-[80px] flex items-center justify-between border-[1px] border-gray-600">
        {/* City Dropdown */}
        <div className="relative w-full bg-white rounded-l-[80px] paragraph-style">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="appearance-none border-none py-8 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-l-[80px] w-full px-5"
          >
            <option value="" disabled>
              Select a city
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            🔍
          </span>
        </div>

        {/* Check-in/Check-out Calendar */}
        <div className="relative w-full bg-white border-x-[1px] border-gray-400 paragraph-style">
          <div
            className="flex justify-center items-center border-none py-[32px] px-5 cursor-pointer transition"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <span className="text-lg text-gray-700">
              {dates[0].startDate
                ? `${formatToFullDate(dates[0].startDate)} → ${formatToFullDate(
                    dates[0].endDate
                  )}`
                : "Select dates"}
            </span>
          </div>

          {showCalendar && (
            <div className="absolute mt-3 z-20 bg-white border border-gray-300 rounded-2xl shadow-lg p-4">
              <DateRange
                editableDateInputs={true}
                onChange={handleDateChange}
                moveRangeOnFirstSelection={false}
                ranges={tempDates}
                months={2}
                direction="horizontal"
                minDate={new Date()}
                showMonthAndYearPickers={false}
                showDateDisplay={false}
                rangeColors={["#113a37"]}
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleClear}
                  className="text-gray-700 border border-gray-400 rounded-full px-5 py-2 hover:bg-gray-100"
                >
                  Clear
                </button>
                <button
                  onClick={handleApply}
                  className="bg-[#113a37] text-white rounded-full px-6 py-2 hover:bg-[#0e2f2d]"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Guest Counter */}
        <div className="flex justify-center items-center bg-white px-5 py-7 w-1/2 paragraph-style">
          <span className="mr-2">👥 Guests</span>
          <button
            onClick={() => setGuests(guests > 1 ? guests - 1 : 1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
          <span className="mx-2">{guests}</span>
          <button
            onClick={() => setGuests(guests + 1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-[#073937] text-white rounded-r-[80px] px-5 py-[34px] hover:bg-teal-700 w-1/2 font-gtamerica"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
