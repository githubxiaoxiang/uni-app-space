<template>
	<view>
		<view>我的一个非注册在tabBar的路由页面</view>
		<button type="primary" @click="toPath">toOne</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toPath()
			{
				uni.redirectTo({
					url:"../one/one"
				})
			}
		},
		onLoad(option) {
			//获取路由参数
			console.log(option);
		},
	}
</script>

<style>

</style>
