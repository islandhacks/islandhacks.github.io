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

function parseDateToMinutes(date) {
  return date.getHours() * 60 + date.getMinutes();
}

function formatCountdown(totalSeconds) {
  if (totalSeconds <= 0) {
    return "Now";
  }

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const parts = [];

  if (hours > 0) {
    parts.push(`${hours}h`);
  }

  if (minutes > 0 || hours > 0) {
    parts.push(`${minutes}m`);
  }

  parts.push(`${seconds}s`);

  return `${parts.join(" ")}`;
}

function getNextActivity(now = new Date()) {
  const nowMinutes = parseDateToMinutes(now);
  const nextEvent =
    SCHEDULE.find((event) => parseTimeToMinutes(event.time) > nowMinutes) ??
    null;

  if (!nextEvent) {
    return {
      status: "Finished",
      event: SCHEDULE[SCHEDULE.length - 1],
      countdown: "Event complete",
    };
  }

  const nextEventMinutes = parseTimeToMinutes(nextEvent.time);
  const totalSecondsUntilNext =
    nextEventMinutes * 60 +
    0 -
    (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds());

  return {
    status: totalSecondsUntilNext <= 60 ? "Starting soon" : "Next up",
    event: nextEvent,
    countdown: formatCountdown(Math.max(0, totalSecondsUntilNext)),
  };
}

export default function LiveScheduleBanner() {
  const [nextActivity, setNextActivity] = useState(() => getNextActivity());

  useEffect(() => {
    const updateNextActivity = () => {
      setNextActivity(getNextActivity(new Date()));
    };

    updateNextActivity();
    const intervalId = setInterval(updateNextActivity, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const labelStyles = {
    "Next up": "bg-amber-100 text-amber-700",
    "Starting soon": "bg-emerald-100 text-emerald-700",
    Finished: "bg-slate-200 text-slate-700",
  };

  return (
    <div className="px-4 py-6">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/60">
        <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${labelStyles[nextActivity.status]}`}
            >
              {nextActivity.status}
            </span>
            <div>
              <p className="text-sm font-medium text-slate-500">
                Next activity
              </p>
              <p className="text-lg font-bold text-slate-900">
                {nextActivity.event.activity}
              </p>
            </div>
          </div>

          <div className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-600">
            {nextActivity.countdown}
          </div>
        </div>
      </div>
    </div>
  );
}
