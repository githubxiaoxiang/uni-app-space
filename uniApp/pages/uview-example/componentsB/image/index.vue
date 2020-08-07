<template>
	<!-- https://uviewui.com/components/image.html -->
	<!-- https://uniapp.dcloud.io/component/image -->
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">
				演示效果
			</view>
			<view class="u-demo-area u-flex u-row-center">
				<!-- border-radius 圆角值，单位任意，如果为数值，则为rpx单位 100%  8-->
				<!-- shape: square方形 circle:圆形  width：宽 height：高 mode与uni image组件一致-->
				<!-- lazy-load：是否懒加载  fade：是否淡入效果 duration:配合fade使用持续时间-->
				<!-- 定义ref  通过this.$refs.uImage可以获取该dom标签 -->
				<!-- border-radius="100%" -->
				<u-image ref="uImage"  :src="src" border-radius="8" :shape="shape" :width="width" :height="height" mode="aspectFill">
					<u-loading slot="loading" size="44" mode="flower" v-if="loadingSlot"></u-loading>
					<view slot="error" v-if="errorSlot" style="{font-size: 24rpx;}">加载失败</view>
				</u-image>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">
					状态
				</view>
				<!-- vibrateShort boolean类型 直接设置vibrateShort  不用"true" 或true -->
				<u-subsection vibrateShort :list="['加载成功','加载中','加载失败']" :current="statusCurrent" @change="statusChange" ></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">
					加载中状态
				</view>
				<u-subsection vibrateShort :list="['默认','自定义']" @change="loadingChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">
					加载失败状态
				</view>
				<u-subsection vibrateShort :list="['默认','自定义']" @change="errorChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-config-title">
					形状
				</view>
				<u-subsection vibrateShort :list="['方形','圆形']" @change="shapeChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default
	{
		data(){
			return {
				src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
				width: '200',
				height: '200',
				loadingSlot:false,
				errorSlot:false,
				statusCurrent:0,
				shape:'square'
			}
		},
		computed:{
			
		},
		methods:{
			// 此处通过ref操作组件内部状态，仅是为了演示使用，实际中无需这些操作，由内部的图片加载事件自动完成
			statusChange(index){ 
				if(index==0)
				{
					this.src = 'http://img5.imgtn.bdimg.com/it/u=2438062088,2808868405&fm=26&gp=0.jpg';
					this.$refs.uImage.loading = false;
					this.$refs.uImage.isError = false;
				}else if(index==1)
				{
					this.$refs.uImage.loading = true;
				}else{
					this.$refs.uImage.loading=false;
					this.$refs.uImage.isError=true;
				}
			},
			loadingChange(index) {
				this.statusCurrent = 1;
				this.statusChange(1);
				if (index == 0) {
					this.loadingSlot = false;
				} else {
					this.loadingSlot = true;
				}
			},
			errorChange(index) {
				this.statusCurrent = 2;
				this.statusChange(2);
				if (index == 0) {
					this.errorSlot = false;
				} else {
					this.errorSlot = true;
				}
			},
			shapeChange(index) {
				this.shape = index==0?'square':'circle';
			}
		}
	}
</script>

<style>
</style>
