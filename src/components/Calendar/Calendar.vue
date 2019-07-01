<template>
  <div>
    <div class="ms-DatePicker root">
      <div class="ms-DatePicker-picker ms-DatePicker-picker--opened ms-DatePicker-picker--focused picker pickerIsOpened pickerIsFocused">
        <div class="ms-DatePicker-holder ms-slideDownIn10 holder">
          <div class="ms-DatePicker-frame frame">
            <CalendarDay :today="today"
                         :selected-date="value"
                         :navigated-date.sync="navigatedDate"
                         :first-day-of-week="firstDayOfWeek"
                         :first-week-of-year="firstWeekOfYear"
                         :min-date="minDate"
                         :max-date="maxDate"
                         @update:selectedDate="$emit('input', $event)">
              <!-- Pass on all named slots -->
              <slot v-for="slot in Object.keys($slots)"
                    :slot="slot"
                    :name="slot" />

              <!-- Pass on all scoped slots -->
              <template v-for="slot in Object.keys($scopedSlots)"
                        slot-scope="scope"
                        :slot="slot">
                <slot :name="slot"
                      v-bind="scope" />
              </template>
            </CalendarDay>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDay from './CalendarDay.vue'
import { FirstWeekOfYear, DayOfWeek } from '../../utilities/dateValues/DateValues'

export default {
  components: {
    CalendarDay,
  },
  props: {
    value: {
      type: Date,
      default () {
        return new Date()
      },
    },
    firstDayOfWeek: {
      validator: value => Object.values(DayOfWeek)[value] >= 0,
      default: DayOfWeek.Sunday,
    },
    firstWeekOfYear: {
      validator: value => Object.values(FirstWeekOfYear)[value] >= 0,
      default: FirstWeekOfYear.FirstDay,
    },
    minDate: {
      type: Date,
      default: null,
    },
    maxDate: {
      type: Date,
      default: null,
    },
    today: {
      type: Date,
      default () {
        return new Date()
      },
    },
    workWeekDays: {
      validator: value => {
        if (!(value instanceof Array)) return false
        return !value.some(val => !Object.values(DayOfWeek)[val])
      },
      default () {
        return [
          DayOfWeek.Monday,
          DayOfWeek.Tuesday,
          DayOfWeek.Wednesday,
          DayOfWeek.Thursday,
          DayOfWeek.Friday,
        ]
      },
    },
  },
  data () {
    return {
      navigatedDate: new Date(),
    }
  },
}
</script>

<style lang="scss">
@import "./Calendar.scss";
</style>
