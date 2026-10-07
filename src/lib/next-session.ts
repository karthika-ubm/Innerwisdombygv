import { addWeeks, isBefore, format } from "date-fns";

// ============================================
// 🔧 CHANGE ONLY THESE VALUES WHEN NEEDED
// ============================================
export const SESSION_CONFIG = {
  // First session date & time (IST)
  firstSession: new Date("2026-10-17T11:00:00+05:30"), // 17 Oct 2026, 11:00 PM IST

  // How often the session repeats
  repeatEveryWeeks: 2,

  // Display values (these will be shown in the UI)
  duration: "2 Hours",
  language: "English + Hindi",
};
// ============================================

export function getNextSessionDate(): Date {
  let next = new Date(SESSION_CONFIG.firstSession);
  const now = new Date();

  while (isBefore(next, now)) {
    next = addWeeks(next, SESSION_CONFIG.repeatEveryWeeks);
  }

  return next;
}

// Formatted values for the UI
export function getSessionDisplay() {
  const next = getNextSessionDate();

  return {
    date: format(next, "d MMM yyyy"),          
    time: format(next, "h:mm a") + " IST",    
    duration: SESSION_CONFIG.duration,
    language: SESSION_CONFIG.language,
  };
}