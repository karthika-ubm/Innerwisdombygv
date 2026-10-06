import { addWeeks, isBefore, startOfDay } from "date-fns";

export const FIRST_SESSION = new Date("2026-10-15T19:00:00+05:30"); // 15 Oct 2026, 7:00 PM IST

export function getNextSessionDate(): Date {
  let next = new Date(FIRST_SESSION);
  const now = new Date();

  while (isBefore(next, now)) {
    next = addWeeks(next, 2);
  }
  return next;
}