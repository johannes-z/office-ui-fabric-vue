
export interface ICalendarStrings {
  /**
   * An array of strings for the full names of months.
   * The array is 0-based, so months[0] should be the full name of January.
   */
  months: string[];

  /**
   * An array of strings for the short names of months.
   * The array is 0-based, so shortMonths[0] should be the short name of January.
   */
  shortMonths: string[];

  /**
   * An array of strings for the full names of days of the week.
   * The array is 0-based, so days[0] should be the full name of Sunday.
   */
  days: string[];

  /**
   * An array of strings for the initials of the days of the week.
   * The array is 0-based, so days[0] should be the initial of Sunday.
   */
  shortDays: string[];

  /**
   * String to render for button to direct the user to today's date.
   */
  goToToday: string;

  /**
   * Aria-label for the "previous month" button.
   */
  prevMonthAriaLabel?: string;

  /**
   * Aria-label for the "next month" button.
   */
  nextMonthAriaLabel?: string;

  /**
   * Aria-label for the "previous year" button.
   */
  prevYearAriaLabel?: string;

  /**
   * Aria-label for the "next year" button.
   */
  nextYearAriaLabel?: string;

  /**
   * Aria-label for the "close" button.
   */
  closeButtonAriaLabel?: string;

  /**
   * Aria-label format string for the week number header. Should have 1 string param e.g. "week number \{0\}"
   */
  weekNumberFormatString?: string;
}

export interface ICalendarFormatDateCallbacks {
  /**
   * Callback to apply formatting to mmmm d, yyyy formated dates
   */
  formatMonthDayYear: (date: Date, strings: ICalendarStrings) => string;

  /**
   * Callback to apply formatting to the month and year in the Day Picker header
   */
  formatMonthYear: (date: Date, strings: ICalendarStrings) => string;

  /**
   * Callback to apply formatting to the days in the Day Picker calendar
   */
  formatDay: (date: Date) => string;

  /**
   * Callback to apply formatting to the year in the Month Picker header
   */
  formatYear: (date: Date) => string;
}
