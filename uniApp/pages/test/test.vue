<template>
	<view>
		<view v-show="true">v-show</view>
		<view v-if="true">v-if</view>
		<view>aaaa</view>
		
		<!-- 类型type: primary success info warning error success-->
		<!-- 大小size:default  medium mini -->
		<!-- 形状shape ：默认square  circle-->
		<!-- 是否镂空plain：true 按钮背景为白色，边框和文字同色-->
		<!-- 水波纹 ripple:true ripple-bg-color="#ff0000"-->
		<!-- <u-button>默认按钮</u-button>
		<u-button size="medium" type="primary">主要按钮</u-button>	
		<u-button type="success">成功按钮</u-button>
		<u-button type="info">信息按钮</u-button>
		<u-button shape="circle" ripple="true" ripple-bg-color="#ff0000" type="warning">警告按钮</u-button>
		<u-button :plain="true" type="error">危险按钮</u-button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			onBtnClick:function()
			{
				uni.showModal({
					content: '按钮点击',
					showCancel: false
				});
			}
		}
	}
</script>

<style>

</style>
