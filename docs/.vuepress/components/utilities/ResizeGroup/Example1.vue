<template>
  <VResizeGroup :data.sync="data"
                :onReduceData="onReduceData"
                :onGrowData="onGrowData"
                @reduceData="onReduceData"
                @growData="onGrowData">
    <VOverflowSet slot-scope="props"
                  :items="data.primary"
                  :overflow-items="data.overflow.length ? data.overflow : null" />
  </VResizeGroup>
</template>

<script>

function generateData(count, cachingEnabled, checked) {
  const icons = ['Add', 'Share', 'Upload'];
  const dataItems = [];
  let cacheKey = '';
  for (let index = 0; index < count; index++) {
    const item = {
      key: `item${index}`,
      name: `Item ${index}`,
      icon: icons[index % icons.length],
      checked: checked
    };

    cacheKey = cacheKey + item.key;
    dataItems.push(item);
  }

  let result = {
    primary: dataItems,
    overflow: []
  };

  if (cachingEnabled) {
    result = { ...result, cacheKey };
  }

  return result;
}

export default {
  data () {
    return {
      data: generateData(20, false, false),
    }
  },
  methods: {
    onReduceData () {
      let currentData = this.data
      if (currentData.primary.length === 0) {
        return undefined;
      }

      const overflow = [...currentData.primary.slice(-1), ...currentData.overflow];
      const primary = currentData.primary.slice(0, -1);

      return { primary, overflow };
    },
    onGrowData () {
      let currentData = this.data
      if (currentData.overflow.length === 0) {
        return undefined;
      }

      const overflow = currentData.overflow.slice(1);
      const primary = [...currentData.primary, ...currentData.overflow.slice(0, 1)];

      return { primary, overflow };
    },
  }
}
</script>

<style lang="scss">
</style>
