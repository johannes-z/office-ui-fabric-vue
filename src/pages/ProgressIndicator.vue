<template>
  <div>
    <h1 class="ms-font-xxl">
      ProgressIndicator
    </h1>

    <h2 class="ms-font-l">
      Default ProgressIndicator
    </h2>

    <VProgressIndicator :percent-complete="percentComplete"
                        label="Example title"
                        description="Example description" />

    <h2 class="ms-font-l">
      Indeterminate ProgressIndicator
    </h2>

    <VProgressIndicator label="Example title"
                        description="Example description" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      percentComplete: 0,
    }
  },
  created () {
    setInterval(() => {
      this.percentComplete += 1
      if (this.percentComplete >= 110) this.percentComplete = -10
    }, 200)
  },
}

</script>
