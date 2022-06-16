import React, { useEffect, useState } from "react";
import {
  startOfToday,
  format,
  eachDayOfInterval,
  endOfMonth,
  parse,
  parseISO,
  add,
  startOfWeek,
  endOfWeek,
  isToday,
  isEqual,
  isSameMonth,
  getDay,
  isSameDay,
} from "date-fns";

const colStartClass = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
const weeks = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const meetings = [
  {
    id: Math.floor(Math.random() * 10),
    time: "2022-06-16T13:03:34.018Z",
    title: "Zoom call with design team",
    desc: "Discussion on Ux sprint and Wireframe review",
  },
  {
    id: Math.floor(Math.random() * 10),
    time: "2022-06-20T13:03:34.018Z",
    title: "Zoom call with design team",
    desc: "Discussion on Ux sprint and Wireframe review",
  },
  {
    id: Math.floor(Math.random() * 10),
    time: "2022-06-16T13:03:34.018Z",
    title: "Zoom call with programmer team",
    desc: "Discussion on React and Wireframe review",
  },
];

function IndexPage() {
  const today = startOfToday();

  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM yyyy"));
  const firstDayOfTheMonth = parse(currentMonth, "MMM yyyy", new Date());

  function nextMonth() {
    const firstDayOfNextMonth = add(firstDayOfTheMonth, { months: 1 });
    setCurrentMonth(format(firstDayOfNextMonth, "MMM yyyy"));
  }
  function prevMonth() {
    const firstDayOfNextMonth = add(firstDayOfTheMonth, { months: -1 });
    setCurrentMonth(format(firstDayOfNextMonth, "MMM yyyy"));
  }
  const days = eachDayOfInterval({
    start: startOfWeek(firstDayOfTheMonth),
    end: endOfWeek(endOfMonth(firstDayOfTheMonth)),
  });
  const meetingDays = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.time), selectedDay)
  );
  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="2xl:w-1/3 xl:w-1/2 lg:w-3/5 sm:w-4/5 w-full shadow-lg">
          <div className="md:p-16 md:pb-12 p-5 dark:bg-gray-800 bg-white rounded-t">
            <div className="px-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold dark:text-gray-100 text-gray-800">
                {format(firstDayOfTheMonth, "MMM yyyy")}
              </h1>
              <div className="flex items-center text-gray-800 dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left cursor-pointer"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={prevMonth}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler ml-3 icon-tabler-chevron-right cursor-pointer"
                  width={24}
                  height={24}
                  onClick={nextMonth}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between pt-12 overflow-x-auto">
              <div className="grid grid-cols-7 w-full ">
                {weeks.map((e) => (
                  <div className="flex justify-center" key={e}>
                    <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                      {e}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 w-full mt-2">
                <Dates
                  selectedDay={selectedDay}
                  setSelectedDay={setSelectedDay}
                  days={days}
                  firstDayOfTheMonth={firstDayOfTheMonth}
                />
              </div>
            </div>
          </div>
          <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
            <div className="px-4">
              {meetingDays.map((meeting, index) => (
                <MeetingCards meeting={meeting} index={index} />
              ))}
              {meetingDays.length === 0 && (
                <p className="text-black border-b pb-4 border-gray-400 border-dashed  ">
                  No Event {format(selectedDay, "MMM-d")}.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default IndexPage;

const Dates = ({ days, selectedDay, setSelectedDay, firstDayOfTheMonth }) =>
  days.map((e, index) => {
    return (
      <div
        className={classNames(
          index === 0 && colStartClass[getDay(e)],
          "px-4 py-4 "
        )}
        key={e.toString()}
      >
        <button
          onClick={() => setSelectedDay(e)}
          className={classNames(
            "mx-auto  flex h-8 w-8 rounded-full items-center justify-center hover:bg-gray500 hover:text-white",
            !isEqual(e, selectedDay) && !isToday(e) && "text-gray500",
            isEqual(e, selectedDay) && isToday(e) && "text-white bg-black ",
            !isEqual(e, selectedDay) && isToday(e) && "text-gray500",
            !isEqual(e, selectedDay) &&
              !isToday(e) &&
              isSameMonth(e, firstDayOfTheMonth) &&
              "text-black",
            isEqual(e, selectedDay) && !isToday(e) && "text-white bg-gray500 "
          )}
        >
          <time dateTime={format(e, "yyy-MMM-dd")}>{format(e, "d")}</time>
        </button>
        <div className="h-1 w-1  mx-auto mt-1">
          {meetings.some((meeting) => isSameDay(parseISO(meeting.time), e)) && (
            <div className="h-1 w-1 rounded-full bg-black"></div>
          )}
        </div>
      </div>
    );
  });

const MeetingCards = ({ meeting, index }) => {
  return (
    <div
      className={classNames(
        "border-b pb-4 border-gray-400 border-dashed",
        index > 0 && "pt-5"
      )}
      key={meeting.id}
    >
      <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
        <time dateTime={format(parseISO(meeting.time), "yyyy-MMM-dd")}>
          {format(parseISO(meeting.time), "h:mm a")}
        </time>
      </p>
      <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">
        {meeting.title}
      </p>
      <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
        {meeting.desc}
      </p>
    </div>
  );
};
