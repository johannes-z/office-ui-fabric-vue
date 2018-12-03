<template>

  <div class="ms-DatePicker-wrap goTodaySpacing">
    <div id="DatePickerDay-dayPicker26"
         class="ms-DatePicker-dayPicker dayPicker">

      <div class="ms-DatePicker-header header">

        <div id="DatePickerDay-monthAndYear27"
             class="monthAndYear">

          <div class="ms-DatePicker-monthAndYear monthAndYear">
            <slot :value="navigatedDate"
                  name="monthAndYear">
              {{ monthAndYear }}
            </slot>
          </div>

        </div>

        <div class="ms-DatePicker-monthComponents monthComponents">

          <div class="ms-DatePicker-navContainer">
            <button class="ms-DatePicker-prevMonth js-prevMonth prevMonth"
                    @click.prevent.stop="$emit('update:navigatedDate', addMonths(navigatedDate, -1))">
              <v-icon icon-name="Up" />
            </button>
            <button class="ms-DatePicker-nextMonth js-nextMonth nextMonth"
                    @click.prevent.stop="$emit('update:navigatedDate', addMonths(navigatedDate, 1))">
              <v-icon icon-name="Down" />
            </button>
          </div>

        </div>

      </div>

      <div class="ms-FocusZone">

        <table class="ms-DatePicker-table table">
          <thead>
            <tr>
              <!-- <th class="ms-DatePicker-weekday" /> -->

              <th v-for="(val, index) in strings.shortDays"
                  :key="index"
                  :title="strings.days[(index + firstDayOfWeek) % DAYS_IN_WEEK]"
                  class="ms-DatePicker-weekday weekday">
                {{ strings.shortDays[(index + firstDayOfWeek) % DAYS_IN_WEEK] }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(week, weekIndex) in weeks"
                :key="week.key">

              <td v-for="(day, dayIndex) in week"
                  :key="day.key"
                  :class="{ ['dayIsHighlighted']: day.isSelected }"
                  class="dayWrapper ms-DatePicker-day ms-DatePicker-dayBackground dayBackground ms-DatePicker-day--outfocus dayIsUnfocused daySelection"
                  @click.prevent.stop="$emit('update:selectedDate', day.originalDate)">
                <button :class="{ ['dayIsToday']: day.isToday }"
                        class="day ms-DatePicker-day-button">
                  <span>
                    {{ day.originalDate.getDate() }}
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
    <button :disabled="goTodayEnabled"
            :class="{ goToTodayIsDisabled: goTodayEnabled }"
            class="ms-DatePicker-goToday"
            @click="$emit('update:navigatedDate', new Date(today))">
      <slot name="todayLabel">Go to today</slot>
    </button>
  </div>

</template>

<script>

import {
  DayOfWeek,
  FirstWeekOfYear,
  DateRangeType,
} from '../../utilities/dateValues/DateValues'

import {
  addDays,
  addWeeks,
  addMonths,
  compareDates,
  compareDatePart,
  getDateRangeArray,
  isInDateRangeArray,
  getWeekNumber,
  getWeekNumbersInMonth,
  getMonthStart,
  getMonthEnd,
} from '../../utilities/dateMath/DateMath'

const DAYS_IN_WEEK = 7

const today = new Date()

let showWeekNumbers = true

const DEFAULT_STRINGS = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
}

export default {
  props: {
    selectedDate: {
      type: Date,
      required: true,
    },
    navigatedDate: {
      type: Date,
      required: true,
    },
    firstDayOfWeek: {
      type: Number,
      required: true,
    },
    firstWeekOfYear: {
      type: Number,
      required: true,
    },
  },
  data () {
    return {
      DAYS_IN_WEEK,
      today,
      strings: DEFAULT_STRINGS,
    }
  },
  computed: {
    goTodayEnabled () {
      let showGoToToday = true
      let goTodayEnabled = showGoToToday

      if (goTodayEnabled && today) {
        goTodayEnabled =
          this.navigatedDate.getFullYear() !== today.getFullYear() ||
          this.navigatedDate.getMonth() !== today.getMonth() ||
          this.navigatedDate.getFullYear() !== today.getFullYear() ||
          this.navigatedDate.getMonth() !== today.getMonth()
      }
      return !goTodayEnabled
    },
    monthAndYear () {
      let month = DEFAULT_STRINGS.months[this.navigatedDate.getMonth()]
      let year = this.navigatedDate.getFullYear()
      return `${month} ${year}`
    },
    weekNumbers () {
      return showWeekNumbers
        ? getWeekNumbersInMonth(this.weeks.length, this.firstDayOfWeek, this.firstWeekOfYear, this.navigatedDate)
        : null
    },
    weeks () {
      let showSixWeeksByDefault = false
      let selectedDate = this.selectedDate
      let navigatedDate = this.navigatedDate
      let dateRangeType = DateRangeType.Day
      let minDate = null
      let maxDate = null
      let workWeekDays = [
        DayOfWeek.Monday,
        DayOfWeek.Tuesday,
        DayOfWeek.Wednesday,
        DayOfWeek.Thursday,
        DayOfWeek.Friday,
      ]

      const date = new Date(navigatedDate.getFullYear(), navigatedDate.getMonth(), 1)
      const todaysDate = today
      const weeks = []

      // Cycle the date backwards to get to the first day of the week.
      while (date.getDay() !== this.firstDayOfWeek) {
        date.setDate(date.getDate() - 1)
      }

      // a flag to indicate whether all days of the week are in the month
      let isAllDaysOfWeekOutOfMonth = false

      // in work week view we want to select the whole week
      const selectedDateRangeType = dateRangeType === DateRangeType.WorkWeek ? DateRangeType.Week : dateRangeType
      let selectedDates = getDateRangeArray(selectedDate, selectedDateRangeType, this.firstDayOfWeek, workWeekDays)
      if (dateRangeType !== DateRangeType.Day) {
        selectedDates = this.getBoundedDateRange(selectedDates, minDate, maxDate)
      }

      let shouldGetWeeks = true

      for (let weekIndex = 0; shouldGetWeeks; weekIndex++) {
        const week = []

        isAllDaysOfWeekOutOfMonth = true

        for (let dayIndex = 0; dayIndex < DAYS_IN_WEEK; dayIndex++) {
          const originalDate = new Date(date.toString())
          const dayInfo = {
            key: date.toString(),
            date: date.getDate().toString(),
            originalDate: originalDate,
            isInMonth: date.getMonth() === navigatedDate.getMonth(),
            isToday: compareDates(todaysDate, date),
            isSelected: isInDateRangeArray(date, selectedDates),
            isInBounds: (minDate ? compareDatePart(minDate, date) < 1 : true) && (maxDate ? compareDatePart(date, maxDate) < 1 : true),
          }

          week.push(dayInfo)

          if (dayInfo.isInMonth) {
            isAllDaysOfWeekOutOfMonth = false
          }

          date.setDate(date.getDate() + 1)
        }

        // We append the condition of the loop depending upon the showSixWeeksByDefault prop.
        shouldGetWeeks = showSixWeeksByDefault ? !isAllDaysOfWeekOutOfMonth || weekIndex <= 5 : !isAllDaysOfWeekOutOfMonth
        if (shouldGetWeeks) {
          weeks.push(week)
        }
      }

      return weeks
    },
  },
  created () {

  },
  methods: {
    addMonths (date, months) {
      return new Date(date.setMonth(date.getMonth() + months))
    },
    getBoundedDateRange (dateRange, minDate, maxDate) {
      let boundedDateRange = [...dateRange]
      if (minDate) {
        boundedDateRange = boundedDateRange.filter(date => compareDatePart(date, minDate) >= 0)
      }
      if (maxDate) {
        boundedDateRange = boundedDateRange.filter(date => compareDatePart(date, maxDate) <= 0)
      }
      return boundedDateRange
    },
  },

}
</script>

<style>
</style>
