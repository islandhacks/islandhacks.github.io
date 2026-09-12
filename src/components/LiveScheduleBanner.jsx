import { useEffect, useState } from "react";

const SCHEDULE = [
  { time: "8:30 AM", activity: "Doors Open" },
  { time: "9:00 AM", activity: "Opening Ceremony" },
  { time: "9:30 AM", activity: "Theme reveal and Project time begins" },
  { time: "9:40 AM", activity: "Web (HTML/JS) workshops" },
  { time: "12:00 PM", activity: "Lunch" },
  { time: "1:30 PM", activity: "Fire side chat" },
  { time: "5:45 PM", activity: "Dinner" },
  { time: "6:00 PM", activity: "Project Submission" },
  { time: "6:30 PM", activity: "Presentations begin" },
  { time: "8:00 PM", activity: "Closing ceremony" },
  { time: "8:30 PM", activity: "Group picture, event ends" },
];

function parseTimeToMinutes(timeString) {
  const [time, meridiem] = timeString.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (meridiem === "PM" && hours !== 12) {
    hours += 12;
  }

  if (meridiem === "AM" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

function getCurrentEventStatus(now = new Date()) {
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const eventIndex = SCHEDULE.findIndex((event, index) => {
    const currentMinutes = parseTimeToMinutes(event.time);
    const nextEvent = SCHEDULE[index + 1];
    const nextMinutes = nextEvent
      ? parseTimeToMinutes(nextEvent.time)
      : Infinity;

    return nowMinutes >= currentMinutes && nowMinutes < nextMinutes;
  });

  if (eventIndex === -1) {
    const firstEventMinutes = parseTimeToMinutes(SCHEDULE[0].time);
    if (nowMinutes < firstEventMinutes) {
      return {
        status: "Upcoming",
        event: SCHEDULE[0],
      };
    }

    return {
      status: "Finished",
      event: SCHEDULE[SCHEDULE.length - 1],
    };
  }

  return {
    status: "Live",
    event: SCHEDULE[eventIndex],
  };
}

export default function LiveScheduleBanner() {
  const [currentEvent, setCurrentEvent] = useState(() =>
    getCurrentEventStatus(),
  );

  useEffect(() => {
    const updateCurrentEvent = () => {
      setCurrentEvent(getCurrentEventStatus(new Date()));
    };

    updateCurrentEvent();
    const intervalId = setInterval(updateCurrentEvent, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const labelStyles = {
    Live: "bg-emerald-100 text-emerald-700",
    Upcoming: "bg-amber-100 text-amber-700",
    Finished: "bg-slate-200 text-slate-700",
  };

  return (
    <div className="px-4 py-6">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/60">
        <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${labelStyles[currentEvent.status]}`}
            >
              {currentEvent.status}
            </span>
            <div>
              <p className="text-sm font-medium text-slate-500">
                Current activity
              </p>
              <p className="text-lg font-bold text-slate-900">
                {currentEvent.event.activity}
              </p>
            </div>
          </div>

          <div className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-600">
            {currentEvent.event.time}
          </div>
        </div>
      </div>
    </div>
  );
}
