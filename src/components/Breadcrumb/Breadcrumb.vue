<template>
<div class="ms-Breadcrumb" :class="customClasses">
  <div class="ms-Breadcrumb-overflow">
    <div class="ms-Breadcrumb-overflowButton ms-Icon ms-Icon--More"></div>
    <div class="ms-Breadcrumb-overflowMenu">
      <ul class="ms-ContextualMenu is-open"></ul>
    </div>
    <i class="ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight"></i>
  </div>
  <ul class="ms-Breadcrumb-list">
    <li class="ms-Breadcrumb-listItem" v-for="(item, index) in items"
                                       :key="index">
      <a class="ms-Breadcrumb-itemLink" :href="item.link">{{ item.name }}</a>
      <i class="ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight"></i>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    customClasses: {
      type: Array,
      default: () => []
    }
  }
}
</script>
