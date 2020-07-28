// 为了能够让 webstorm 识别 pages.json 里面配置的 easycom
// 把所有使用到的 uview-ui 组件使用Vue.component 全局导入，让IDE可以识别
// !! 这个文件不会在任何代码中被引用，也不应该被引用!!
import Vue from 'vue'

import uActionSheet from 'uview-ui/components/u-action-sheet/u-action-sheet'
Vue.component(uActionSheet.name, uActionSheet)

import uAlertTips from 'uview-ui/components/u-alert-tips/u-alert-tips'
Vue.component(uAlertTips.name, uAlertTips)

import uAvatar from 'uview-ui/components/u-avatar/u-avatar'
Vue.component(uAvatar.name, uAvatar)

import uAvatarCropper from 'uview-ui/components/u-avatar-cropper/u-avatar-cropper'
Vue.component('uAvatarCropper', uAvatarCropper)

import uBackTop from 'uview-ui/components/u-back-top/u-back-top'
Vue.component(uBackTop.name, uBackTop)

import uBadge from 'uview-ui/components/u-badge/u-badge'
Vue.component(uBadge.name, uBadge)

import uButton from 'uview-ui/components/u-button/u-button'
Vue.component(uButton.name, uButton)

import uCalendar from 'uview-ui/components/u-calendar/u-calendar'
Vue.component(uCalendar.name, uCalendar)

import uCarKeyboard from 'uview-ui/components/u-car-keyboard/u-car-keyboard'
Vue.component(uCarKeyboard.name, uCarKeyboard)

import uCard from 'uview-ui/components/u-card/u-card'
Vue.component(uCard.name, uCard)

import uCellGroup from 'uview-ui/components/u-cell-group/u-cell-group'
Vue.component(uCellGroup.name, uCellGroup)

import uCellItem from 'uview-ui/components/u-cell-item/u-cell-item'
Vue.component(uCellItem.name, uCellItem)

import uCheckbox from 'uview-ui/components/u-checkbox/u-checkbox'
Vue.component(uCheckbox.name, uCheckbox)

import uCheckboxGroup from 'uview-ui/components/u-checkbox-group/u-checkbox-group'
Vue.component(uCheckboxGroup.name, uCheckboxGroup)

import uCircleProgress from 'uview-ui/components/u-circle-progress/u-circle-progress'
Vue.component(uCircleProgress.name, uCircleProgress)

// import uCol from 'uview-ui/components/u-col/u-col'
// Vue.component(uCol.name, uCol)

import uCollapse from 'uview-ui/components/u-collapse/u-collapse'
Vue.component(uCollapse.name, uCollapse)

import uCollapseItem from 'uview-ui/components/u-collapse-item/u-collapse-item'
Vue.component(uCollapseItem.name, uCollapseItem)

import uColumnNotice from 'uview-ui/components/u-column-notice/u-column-notice'
Vue.component(uColumnNotice.name, uColumnNotice)

import uCountDown from 'uview-ui/components/u-count-down/u-count-down'
Vue.component(uCountDown.name, uCountDown)

import uCountTo from 'uview-ui/components/u-count-to/u-count-to'
Vue.component(uCountTo.name, uCountTo)

import uDivider from 'uview-ui/components/u-divider/u-divider'
Vue.component(uDivider.name, uDivider)

import uDropdownList from 'uview-ui/components/u-dropdown-list/u-dropdown-list'
Vue.component(uDropdownList.name, uDropdownList)

import uEmpty from 'uview-ui/components/u-empty/u-empty'
Vue.component(uEmpty.name, uEmpty)

import uField from 'uview-ui/components/u-field/u-field'
Vue.component(uField.name, uField)

import uForm from 'uview-ui/components/u-form/u-form'
Vue.component(uForm.name, uForm)

import uFormItem from 'uview-ui/components/u-form-item/u-form-item'
Vue.component(uFormItem.name, uFormItem)

import uFullScreen from 'uview-ui/components/u-full-screen/u-full-screen'
Vue.component('uFullScreen', uFullScreen)

import uGap from 'uview-ui/components/u-gap/u-gap'
Vue.component(uGap.name, uGap)

import uGrid from 'uview-ui/components/u-grid/u-grid'
Vue.component(uGrid.name, uGrid)

import uGridItem from 'uview-ui/components/u-grid-item/u-grid-item'
Vue.component(uGridItem.name, uGridItem)

import uIcon from 'uview-ui/components/u-icon/u-icon'
Vue.component(uIcon.name, uIcon)

import uImage from 'uview-ui/components/u-image/u-image'
Vue.component('uImage', uImage)

import uIndexAnchor from 'uview-ui/components/u-index-anchor/u-index-anchor'
Vue.component(uIndexAnchor.name, uIndexAnchor)

import uIndexList from 'uview-ui/components/u-index-list/u-index-list'
Vue.component(uIndexList.name, uIndexList)

import uInput from 'uview-ui/components/u-input/u-input'
Vue.component(uInput.name, uInput)

import uKeyboard from 'uview-ui/components/u-keyboard/u-keyboard'
Vue.component(uKeyboard.name, uKeyboard)

import uLazyLoad from 'uview-ui/components/u-lazy-load/u-lazy-load'
Vue.component(uLazyLoad.name, uLazyLoad)

import uLine from 'uview-ui/components/u-line/u-line'
Vue.component(uLine.name, uLine)

import uLineProgress from 'uview-ui/components/u-line-progress/u-line-progress'
Vue.component(uLineProgress.name, uLineProgress)

import uLink from 'uview-ui/components/u-link/u-link'
Vue.component(uLink.name, uLink)

import uLoading from 'uview-ui/components/u-loading/u-loading'
Vue.component(uLoading.name, uLoading)

import uLoadmore from 'uview-ui/components/u-loadmore/u-loadmore'
Vue.component(uLoadmore.name, uLoadmore)

import uMask from 'uview-ui/components/u-mask/u-mask'
Vue.component(uMask.name, uMask)

import uMessageInput from 'uview-ui/components/u-message-input/u-message-input'
Vue.component(uMessageInput.name, uMessageInput)

import uModal from 'uview-ui/components/u-modal/u-modal'
Vue.component(uModal.name, uModal)

import uNavbar from 'uview-ui/components/u-navbar/u-navbar'
Vue.component(uNavbar.name, uNavbar)

import uNoNetwork from 'uview-ui/components/u-no-network/u-no-network'
Vue.component(uNoNetwork.name, uNoNetwork)

import uNoticeBar from 'uview-ui/components/u-notice-bar/u-notice-bar'
Vue.component(uNoticeBar.name, uNoticeBar)

import uNumberBox from 'uview-ui/components/u-number-box/u-number-box'
Vue.component(uNumberBox.name, uNumberBox)

import uNumberKeyboard from 'uview-ui/components/u-number-keyboard/u-number-keyboard'
Vue.component(uNumberKeyboard.name, uNumberKeyboard)

import uPicker from 'uview-ui/components/u-picker/u-picker'
Vue.component(uPicker.name, uPicker)

import uPopup from 'uview-ui/components/u-popup/u-popup'
Vue.component(uPopup.name, uPopup)

import uRadio from 'uview-ui/components/u-radio/u-radio'
Vue.component(uRadio.name, uRadio)

import uRadioGroup from 'uview-ui/components/u-radio-group/u-radio-group'
Vue.component(uRadioGroup.name, uRadioGroup)

import uRate from 'uview-ui/components/u-rate/u-rate'
Vue.component(uRate.name, uRate)

import uReadMore from 'uview-ui/components/u-read-more/u-read-more'
Vue.component(uReadMore.name, uReadMore)

// import uRow from 'uview-ui/components/u-row/u-row'
// Vue.component(uRow.name, uRow)

import uRowNotice from 'uview-ui/components/u-row-notice/u-row-notice'
Vue.component(uRowNotice.name, uRowNotice)

import uSearch from 'uview-ui/components/u-search/u-search'
Vue.component(uSearch.name, uSearch)

import uSection from 'uview-ui/components/u-section/u-section'
Vue.component(uSection.name, uSection)

import uSelect from 'uview-ui/components/u-select/u-select'
Vue.component(uSelect.name, uSelect)

import uSkeleton from 'uview-ui/components/u-skeleton/u-skeleton'
Vue.component(uSkeleton.name, uSkeleton)

import uSlider from 'uview-ui/components/u-slider/u-slider'
Vue.component(uSlider.name, uSlider)

import uSteps from 'uview-ui/components/u-steps/u-steps'
Vue.component(uSteps.name, uSteps)

import uSticky from 'uview-ui/components/u-sticky/u-sticky'
Vue.component(uSticky.name, uSticky)

import uSubsection from 'uview-ui/components/u-subsection/u-subsection'
Vue.component(uSubsection.name, uSubsection)

import uSwipeAction from 'uview-ui/components/u-swipe-action/u-swipe-action'
Vue.component(uSwipeAction.name, uSwipeAction)

import uSwiper from 'uview-ui/components/u-swiper/u-swiper'
Vue.component(uSwiper.name, uSwiper)

import uSwitch from 'uview-ui/components/u-switch/u-switch'
Vue.component(uSwitch.name, uSwitch)

import uTabbar from 'uview-ui/components/u-tabbar/u-tabbar'
Vue.component(uTabbar.name, uTabbar)

import uTable from 'uview-ui/components/u-table/u-table'
Vue.component(uTable.name, uTable)

import uTabs from 'uview-ui/components/u-tabs/u-tabs'
Vue.component(uTabs.name, uTabs)

import uTabsSwiper from 'uview-ui/components/u-tabs-swiper/u-tabs-swiper'
Vue.component(uTabsSwiper.name, uTabsSwiper)

import uTag from 'uview-ui/components/u-tag/u-tag'
Vue.component(uTag.name, uTag)

import uTd from 'uview-ui/components/u-td/u-td'
Vue.component(uTd.name, uTd)

import uTh from 'uview-ui/components/u-th/u-th'
Vue.component(uTh.name, uTh)

import uTimeLine from 'uview-ui/components/u-time-line/u-time-line'
Vue.component(uTimeLine.name, uTimeLine)

import uTimeLineItem from 'uview-ui/components/u-time-line-item/u-time-line-item'
Vue.component(uTimeLineItem.name, uTimeLineItem)

import uToast from 'uview-ui/components/u-toast/u-toast'
Vue.component(uToast.name, uToast)

import uTopTips from 'uview-ui/components/u-top-tips/u-top-tips'
Vue.component(uTopTips.name, uTopTips)

import uTr from 'uview-ui/components/u-tr/u-tr'
Vue.component(uTr.name, uTr)

import uUpload from 'uview-ui/components/u-upload/u-upload'
Vue.component(uUpload.name, uUpload)

import uVerificationCode from 'uview-ui/components/u-verification-code/u-verification-code'
Vue.component(uVerificationCode.name, uVerificationCode)

import uWaterfall from 'uview-ui/components/u-waterfall/u-waterfall'
Vue.component(uWaterfall.name, uWaterfall)

// 微信自带组件声明
Vue.component('scroll-view', {
  props: {
    // 运行航行滚动
    scrollX: {
      type: Boolean,
      default: false
    },
    // 允许纵向滚动
    scrollY: {
      type: Boolean,
      default: false
    },
    // 滚动到子元素id的位置
    scrollIntoView: {
      type: String,
      default: ''
    }
  }
})
Vue.component('swiper', {

})
Vue.component('movable-area', {

})
Vue.component('movable-view', {

})
Vue.component('cover-view', {

})
Vue.component('cover-image', {

})
