<template>

  <VCalendar />

</template>

<script>

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
  data () {
    return {
      strings: DEFAULT_STRINGS,
    }
  },
}
</script>

<style lang="scss">
.ms-DatePicker {
  box-sizing: border-box;
  box-shadow: none;
  margin: 0;
  padding: 0;

  .ms-DatePicker-picker {
    text-align: left;

    &.isOpen {
      position: relative;

      > .ms-DatePicker-holder {
        box-sizing: border-box;
        display: inline-block;

        .ms-DatePicker-frame {
          position: relative;
          outline: transparent;

          .ms-DatePicker-wrap {
            padding: 12px;
            min-height: 228px;

            .ms-DatePicker-dayPicker {
              width: auto;
              box-sizing: border-box;
              min-height: 200px;
              margin: -10px 0;
              padding: 10px 0;
              display: block;

              .ms-DatePicker-header {
                height: 28px;
                line-height: 28px;
                width: 100%;
                position: relative;
                display: inline-flex;
              }
            }

            .ms-DatePicker-divider {
              border-right: 1px solid #eaeaea;
              top: 0;
              margin-top: -12px;
              margin-bottom: -12px;
              outline: transparent;
            }
          }
        }
      }
    }
  }
}
</style>
