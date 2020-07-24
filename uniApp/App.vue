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

<style>
	/*每个页面公共css */
</style>
