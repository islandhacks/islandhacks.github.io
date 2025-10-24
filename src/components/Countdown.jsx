import React, { useEffect, useState } from 'react'

// Minimal, reusable countdown component.
// Props:
// - target: string | Date - target date/time (defaults to Nov 15, 2025 08:30 local)
// - className: optional wrapper className
// Usage: <Countdown target="2025-11-15T08:30:00" />
const Countdown = ({ target = '2025-11-15T08:30:00', className = '' }) => {
  const parseTarget = (t) => (t instanceof Date ? t : new Date(t))
  const targetDate = parseTarget(target)

  const calculate = () => {
    const now = new Date()
    const diff = Math.max(0, targetDate - now)
    const seconds = Math.floor(diff / 1000)
    const days = Math.floor(seconds / (3600 * 24))
    const hours = Math.floor((seconds % (3600 * 24)) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return { days, hours, minutes, seconds: secs, totalMs: diff }
  }

  const [time, setTime] = useState(calculate())

  useEffect(() => {
    const id = setInterval(() => setTime(calculate()), 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  const pad = (n) => String(n).padStart(2, '0')

  if (time.totalMs <= 0) {
    return (
      <div className={`text-center ${className}`} role="timer" aria-live="polite">
        <p className="text-xl font-semibold text-amber-600">Event is live</p>
      </div>
    )
  }

  return (
    <div className={`flex items-stretch justify-center md:justify-start gap-3 mt-4 ${className}`} role="timer" aria-live="polite">
      <TimeBlock label="Days" value={time.days} />
      <TimeBlock label="Hours" value={pad(time.hours)} />
      <TimeBlock label="Minutes" value={pad(time.minutes)} />
      <TimeBlock label="Seconds" value={pad(time.seconds)} />
    </div>
  )
}

const TimeBlock = ({ label, value }) => (
  <div className="flex flex-col items-center bg-white rounded-lg px-4 py-3 shadow-sm min-w-[64px]">
    <div className="text-2xl md:text-3xl font-extrabold text-gray-900">{value}</div>
    <div className="text-xs text-gray-500 mt-1">{label}</div>
  </div>
)

export default Countdown