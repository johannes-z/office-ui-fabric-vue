<template>
  <div>
    <h2 class="ms-font-l">Default ProgressIndicator</h2>

    <VProgressIndicator :percent-complete="percentComplete"
                        label="Example title"
                        description="Example description" />

    <h2 class="ms-font-l">Indeterminate ProgressIndicator</h2>

    <VProgressIndicator label="Example title"
                        description="Example description" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: -1,
      percentComplete: 0,
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  created () {
    this.timer = setInterval(() => {
      this.percentComplete += Math.random() * 5
      if (this.percentComplete >= 110) this.percentComplete = -10
    }, 200)
  },
}

</script>
