<template>
  <div class="ms-ActivityItem">
    <div class="ms-ActivityItem-actitityTypeIcon">
      <slot name="icon">
        <div v-if="activityPersonas.length > 0"
             class="ms-ActivityItem-personaContainer">
          <VPersonaCoin v-for="(persona, index) in activityPersonas.slice(0, 4)"
                        :key="index"
                        v-bind="persona"
                        :size="personaSize" />
        </div>
      </slot>
    </div>

    <div class="ms-ActivityItem-actitityContent">
      <div class="ms-ActivityItem-activityText">
        <slot name="description" />
      </div>

      <div class="ms-ActivityItem-commentText">
        <slot name="comment" />
      </div>

      <div class="ms-ActivityItem-timeStamp">
        <slot name="timestamp" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activityPersonas: {
      type: Array,
      default () {
        return []
      },
    },
  },
  computed: {
    personaSize () {
      let activityPersonas = this.activityPersonas
      if (!activityPersonas) return 0
      if (activityPersonas.length === 1) return 10
      return 8
    },
  },
}
</script>

<style lang="scss">
.ms-ActivityItem {
  margin-top: 20px;
  font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  color: rgb(102, 102, 102);
}

.ms-ActivityItem-actitityTypeIcon {
  height: 32px;
  font-size: 16px;
  line-height: 16px;
  margin-top: 3px;
}

.ms-ActivityItem-personaContainer {
  display: flex;
  flex-wrap: wrap;
  min-width: 32px;
  width: 32px;
  height: 32px;
}

.ms-ActivityItem-actitityContent {
  padding-top: 0px;
  padding-right: 8px;
  padding-bottom: 0px;
  padding-left: 8px;
}

.ms-ActivityItem-activityText {
  display: inline;
}

.ms-ActivityItem-commentText {
  color: rgb(51, 51, 51);
}

.ms-ActivityItem-timeStamp {
  font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 10px;
  font-weight: 400;
  color: rgb(102, 102, 102);
}
</style>
