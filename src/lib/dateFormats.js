import dayjs from "dayjs";

/** Date format constants — use these instead of raw Date/string manipulation */
export const DATE_FORMAT = {
  /** ISO date only: 2025-02-22 */
  ISO_DATE: "YYYY-MM-DD",
  /** ISO datetime: 2025-02-22T14:30:00 */
  ISO_DATETIME: "YYYY-MM-DDTHH:mm:ss",
  /** ISO full: 2025-02-22T14:30:00.000Z */
  ISO_FULL: "YYYY-MM-DDTHH:mm:ss.SSSZ",
  /** Display short: 22/02/2025 */
  DISPLAY_SHORT: "DD/MM/YYYY",
  /** Display long: 22 Feb 2025 */
  DISPLAY_LONG: "DD MMM YYYY",
  /** Display with time: 22 Feb 2025, 14:30 */
  DISPLAY_DATETIME: "DD MMM YYYY, HH:mm",
};

/**
 * Format the current date (or given date) with the specified format constant.
 * @param {string} formatKey - Key from DATE_FORMAT (e.g. 'ISO_DATE')
 * @param {dayjs.Dayjs | Date | string | undefined} [date] - Optional date; defaults to now
 * @returns {string}
 */
export function formatDate(formatKey, date = undefined) {
  const d = date == null ? dayjs() : dayjs(date);
  const pattern = DATE_FORMAT[formatKey];
  return pattern ? d.format(pattern) : d.format(formatKey);
}
