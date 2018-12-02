<template>

  <div>
    <div>{{ selectedDate }}</div>
    <div>{{ navigatedDate }}</div>

    <div class="ms-DatePicker root">
      <div class="ms-DatePicker-picker ms-DatePicker-picker--opened ms-DatePicker-picker--focused picker pickerIsOpened pickerIsFocused">
        <div class="ms-DatePicker-holder ms-slideDownIn10 holder">
          <div class="ms-DatePicker-frame frame">
            <CalendarDay :today="today"
                         :selected-date.sync="selectedDate"
                         :navigated-date.sync="navigatedDate" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import CalendarDay from './CalendarDay.vue'

export default {
  components: {
    CalendarDay,
  },
  data () {
    return {
      today: new Date(),
      selectedDate: new Date(),
      navigatedDate: new Date(),
    }
  },
}
</script>

<style lang="scss">
@import "./Calendar.scss";
</style>
