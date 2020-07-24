<template>
	<view>
		<text>我是组件</text>
		<button type="primary" @click="test">event</button>
	</view>
</template>

<script>
	export default
	{
		data(){
			return {
				say:"mine"
			};
		},
		props:['msg'],
		beforeMount() {
			console.log("在挂载之前被调用");
		},
		mounted() {
			console.log("挂载到实例之后调用");
			this.$nextTick(function(){
				console.log("渲染完毕");
			})
		},
		methods:{
			test(){
				uni.$emit("testEmit",{name:"lucy"});
			}
		}
	}
</script>

<style>
</style>
