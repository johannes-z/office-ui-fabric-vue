<template>
  <div class="ms-IconContainer">
    <h2 class="ms-font-xl">Icon</h2>
    <VIcon icon-name="CompassNW" class="ms-IconExample" />
    <VIcon icon-name="Dictionary" class="ms-IconExample" />
    <VIcon icon-name="TrainSolid" class="ms-IconExample" />

    <h2 class="ms-font-xl">Icon with custom color</h2>
    <VIcon icon-name="CompassNW" class="ms-IconExample ms-IconColorExample-deepSkyBlue" />
    <VIcon icon-name="Dictionary" class="ms-IconExample ms-IconColorExample-greenYellow" />
    <VIcon icon-name="TrainSolid" class="ms-IconExample ms-IconColorExample-salmon" />

  </div>
</template>

<script>
export default {

}
</script>

<style>
.ms-IconExample {
  font-size: 50px;
  height: 50px;
  width: 50px;
  margin: 0 25px;
}
.ms-IconColorExample-deepSkyBlue {
  color: #00bfff;
}
.ms-IconColorExample-greenYellow {
  color: #adff2f;
}
.ms-IconColorExample-salmon {
  color: #fa8072;
}
</style>
