<script>
	export default {
		onLaunch: function(option) {
			console.log('App Launch')
			// console.log(option);
		},
		onShow: function() {
			console.log('App Show')
			uni.setTabBarBadge({
				index:0,
				text:"1"
			})
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style lang="scss" scoped>
    /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
    @import "uview-ui/index.scss";
</style>
