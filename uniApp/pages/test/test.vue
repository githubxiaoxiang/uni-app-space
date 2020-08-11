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
		<u-button type="info" @click="onLoadImage">上传图片</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			onBtnClick: function() {
				uni.showModal({
					content: '按钮点击',
					showCancel: false
				});
			},
			onLoadImage() {
				uni.chooseImage({
					success(chooseImageRes) {
						const teapFilePaths = chooseImageRes.tempFilePaths;
						// uni.uploadFile({
						// 	url:'https://www.example.com/upload',
						// 	filePath:teapFilePaths[0],
						// 	name:'file',
						// 	formData:{
						// 		'user':'test'
						// 	},
						// 	success:(upLoadFileRes)=>{
						// 		console.log(upLoadFileRes.data);
						// 	}
						// })
						// 预览图片
						uni.previewImage({
							urls: chooseImageRes.tempFilePaths,
							longPressActions: {
								itemList: ['发送给朋友', '保存图片', '收藏'],
								success: function(data) {
									console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
								},
								fail: function(err) {
									console.log(err.errMsg);
								}
							}
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
