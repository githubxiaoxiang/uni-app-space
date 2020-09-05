<script>
	export default {
		globalData:{
			name:"testName"
		},
		onLaunch: function(option) {
			console.log('App Launch')
			console.log(getApp().globalData.name)
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
<style lang="scss"> //这里不能添加作用域scope 否则index.scss其他地方无法使用
    /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
    @import "uview-ui/index.scss";
	//注意uview-example.scss内有对view title标签全局设置了boder-box包含边框 内边距 若影响了项目其他内容 得在uview-example内引入
	@import "css/uview-example.scss"
</style>
