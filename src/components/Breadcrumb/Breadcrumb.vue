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

<style lang="scss">
// $Breadcrumb-overflowButtonColor: $ms-color-themePrimary;
$Breadcrumb-overflowButtonSize: 16px;
// $Breadcrumb-buttonHoverColor: $ms-color-themeDark;
$Breadcrumb-itemMaxWidth: 160px;
$Breadcrumb-itemMaxWidth-sm: 116px;
$Breadcrumb-chevron-sm: 8px;

.ms-Breadcrumb-root {
  margin: 23px 0 1px;
}

.ms-Breadcrumb-list {
  white-space: nowrap;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: stretch;
}

// .ms-Breadcrumb-chevron {
//   // font-size: $ms-font-size-s;
//   // color: $ms-color-neutralSecondary;
// }

.ms-Breadcrumb-listItem {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  align-items: center;
  &:last-of-type {
    .chevron {
      display: none;
    }
  }
  

  .ms-Breadcrumb-item,
  .ms-Breadcrumb-itemLink {
    // @include ms-font-xl;
    // color: $ms-color-neutralPrimary;
    padding: 0 8px;
    max-width: $Breadcrumb-itemMaxWidth;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.ms-Breadcrumb-overflow {
  position: relative;
  display: flex;
  align-items: center;
}

.ms-Breadcrumb-overflowButton {
  // font-size: $Breadcrumb-overflowButtonSize;
  height: 100%; // override button height
  &:hover {
    cursor: pointer;
    // background-color: $ms-color-neutralLighter;
  }
}

.ms-Breadcrumb-item {
  &:hover {
    cursor: default;
  }
}


.ms-Breadcrumb-root .ms-Breadcrumb-itemLink {
  &:hover {
    // background-color: $selectedHoverBackgroundColor;
    color: initial;
    cursor: pointer;
  }

  &:focus {
    // color: $ms-color-neutralDark;
  }

  &:active {
    outline: transparent;
    // background-color: $selectedActiveBackgroundColor;
    // color: $selectedActiveForegroundColor;
  }
}


.ms-Breadcrumb-itemLink,
.ms-Breadcrumb-overflowButton {
  text-decoration: none;
  outline: transparent;
}

$uhf-screen-max-mobile: 1920px;
$ms-screen-max-sm: 800px;

@media screen and (max-width: $uhf-screen-max-mobile) {
  // margin: 11px 0 1px;

  .ms-Breadcrumb-listItem .ms-Breadcrumb-itemLink {
    // font-size: $ms-font-size-l;
  }

  .ms-Breadcrumb-chevron {
    // font-size: $ms-font-size-mi;
  }

  .ms-Breadcrumb-overflowButton {
    // font-size: $ms-font-size-m-plus;
  }
}

@media screen and (max-width: $ms-screen-max-sm) {
  .ms-Breadcrumb-listItem .ms-Breadcrumb-itemLink {
    // font-size: $ms-font-size-m;
    max-width: $Breadcrumb-itemMaxWidth-sm;
  }

  .ms-Breadcrumb-chevron {
    font-size: $Breadcrumb-chevron-sm;
  }

  .ms-Breadcrumb-overflowButton {
    padding: 4px 6px;
  }
}
</style>
