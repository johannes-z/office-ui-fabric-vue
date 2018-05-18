<template>
  <div :class="customClasses" class="ms-Breadcrumb root">

    <ol class="ms-Breadcrumb-list list">
      <!-- <li class="ms-Breadcrumb-overflow overflow">
        <button class="ms-Button ms-Breadcrumb-overflowButton ms-Button--icon
        overflowButton">
          <icon icon-name="More"/>
        </button>

        <icon icon-name="ChevronRight"
              class="ms-Breadcrumb-chevron chevron" />
      </li> -->

      <li v-for="(item, index) in items"
          :key="index"
          class="ms-Breadcrumb-listItem listItem" >
        <button class="ms-Link ms-Breadcrumb-itemLink itemLink">
          {{ item.text }}
        </button>

        <icon v-if="index < items.length - 1"
              icon-name="ChevronRight"
              class="ms-Breadcrumb-chevron chevron" />
      </li>
    </ol>

  </div>
</template>

<script>
import { Icon } from '../Icon'

export default {
  components: { Icon },
  props: {
    items: {
      type: Array,
      required: true,
    },
    customClasses: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/common.scss';

$Breadcrumb-overflowButtonColor: $ms-color-themePrimary;
$Breadcrumb-overflowButtonSize: 16px;
$Breadcrumb-buttonHoverColor: $ms-color-themeDark;
$Breadcrumb-itemMaxWidth: 160px;
$Breadcrumb-itemMaxWidth-sm: 116px;
$Breadcrumb-chevron-sm: 8px;

.root {
  margin-top: 23px;
  margin-right: 0px;
  margin-bottom: 1px;
  margin-left: 0px;
}

.list {
  white-space: nowrap;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: stretch;
}

.listItem {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  align-items: center;
}

.itemLink {
  position: relative;
  color: rgb(51, 51, 51);
  cursor: pointer;
  display: inline;
  font-size: 21px;
  margin: 0;
  padding: 0 8px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 100;
  max-width: 160px;
  user-select: text;
  outline: transparent;
  background: none transparent;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  overflow: hidden;
  text-decoration: none;
  line-height: 31px;
}
.itemLink:hover {
  background-color: rgb(244, 244, 244);
  color: initial;
  cursor: pointer;
}

.chevron {
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-weight: normal;
  speak: none;
  font-family: FabricMDL2Icons;
  color: rgb(102, 102, 102);
  font-size: 12px;
}

.overflow {
  position: relative;
  display: flex;
  align-items: center;
}

.overflowButton {
  position: relative;
  font-size: 16px;
  font-weight: 400;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  vertical-align: top;
  padding-top: 0px;
  padding-right: 4px;
  padding-bottom: 0px;
  padding-left: 4px;
  width: 32px;
  height: 100%;
  background-color: transparent;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  outline: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  text-decoration: none;
  border-radius: 0px;
  overflow: hidden;
}

// .ms-Breadcrumb-root {
//   margin: 23px 0 1px;
// }

// .ms-Breadcrumb-list {
//   white-space: nowrap;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   align-items: stretch;
// }

// // .ms-Breadcrumb-chevron {
// //   // font-size: $ms-font-size-s;
// //   // color: $ms-color-neutralSecondary;
// // }

// .ms-Breadcrumb-listItem {
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   position: relative;
//   align-items: center;
//   &:last-of-type {
//     .chevron {
//       display: none;
//     }
//   }

//   .ms-Breadcrumb-item,
//   .ms-Breadcrumb-itemLink {
//     // @include ms-font-xl;
//     // color: $ms-color-neutralPrimary;
//     padding: 0 8px;
//     max-width: $Breadcrumb-itemMaxWidth;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     overflow: hidden;
//   }
// }

// .ms-Breadcrumb-overflow {
//   position: relative;
//   display: flex;
//   align-items: center;
// }

// .ms-Breadcrumb-overflowButton {
//   // font-size: $Breadcrumb-overflowButtonSize;
//   height: 100%; // override button height
//   &:hover {
//     cursor: pointer;
//     // background-color: $ms-color-neutralLighter;
//   }
// }

// .ms-Breadcrumb-item {
//   &:hover {
//     cursor: default;
//   }
// }

// .ms-Breadcrumb-root .ms-Breadcrumb-itemLink {
//   &:hover {
//     // background-color: $selectedHoverBackgroundColor;
//     color: initial;
//     cursor: pointer;
//   }

//   &:focus {
//     // color: $ms-color-neutralDark;
//   }

//   &:active {
//     outline: transparent;
//     // background-color: $selectedActiveBackgroundColor;
//     // color: $selectedActiveForegroundColor;
//   }
// }

// .ms-Breadcrumb-itemLink,
// .ms-Breadcrumb-overflowButton {
//   text-decoration: none;
//   outline: transparent;
// }

// $uhf-screen-max-mobile: 1920px;
// $ms-screen-max-sm: 800px;

// @media screen and (max-width: $uhf-screen-max-mobile) {
//   // margin: 11px 0 1px;

//   .ms-Breadcrumb-listItem .ms-Breadcrumb-itemLink {
//     // font-size: $ms-font-size-l;
//   }

//   .ms-Breadcrumb-chevron {
//     // font-size: $ms-font-size-mi;
//   }

//   .ms-Breadcrumb-overflowButton {
//     // font-size: $ms-font-size-m-plus;
//   }
// }

// @media screen and (max-width: $ms-screen-max-sm) {
//   .ms-Breadcrumb-listItem .ms-Breadcrumb-itemLink {
//     // font-size: $ms-font-size-m;
//     max-width: $Breadcrumb-itemMaxWidth-sm;
//   }

//   .ms-Breadcrumb-chevron {
//     font-size: $Breadcrumb-chevron-sm;
//   }

//   .ms-Breadcrumb-overflowButton {
//     padding: 4px 6px;
//   }
// }
</style>
