<template>
  <v-calendar v-model="value"
              :first-day-of-week="firstDayOfWeek"
              :min-date="minDate">

    <div slot="monthAndYear"
         slot-scope="{ value }">
      {{ value.getMonth() + 1 }}.{{ value.getFullYear() }}
    </div>

    <template slot="todayLabel">Gehe zu Heute</template>
  </v-calendar>
</template>

<script>
import { DayOfWeek } from '../../../../../src/utilities/dateValues/DateValues'

var today = new Date()

export default {
  data () {
    return {
      value: new Date(),
      firstDayOfWeek: DayOfWeek.Monday,
      minDate: new Date(today),
    }
  },
}
</script>

<style>
</style>
