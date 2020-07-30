<template>
	<view class="wrap">
		<view class="inner-wrap u-border-left u-border-top">
			<view class="u-icon-item u-border-right u-border-bottom" v-for="(item,index) in iconList" :key="index">
				<!-- <u-icon :name="item.name" size="40" :label="item.name" label-size="22" label-color="909399" label-pos="bottom"></u-icon> -->
				<u-icon :name="item.name" size="40" color="#909399"></u-icon>
				<text class="u-icon-name">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import iconList from "./icon.config.js"
	export default
	{
		data(){
			return {
				iconList
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.warp{
		padding: 24rpx;
	}
	.inner-wrap{
		display: flex;
		flex-wrap: wrap;
	}
	.u-icon-item{
		display: flex;
		flex-direction: column;
		//方向竖向 主轴为竖向 
		justify-content: center;
		//方向竖向 交叉轴为横向 
		align-items: center;
		height: 190rpx;
		overflow: hidden;
		flex:0 0 33.33333%;
		.u-icon-name{
			color: $u-tips-color;
			font-size: 26rpx;
			// white-space 用来控制空白字符的显示的，同时还能控制是否自动换行 ：normal | nowrap 永不换行 | pre 保留空格和换行符| pre-wrap 保留空格和换行符，且可以自动换行| pre-line 
			// https://www.cnblogs.com/dfyg-xiaoxiao/p/9640422.html
			// 元素拥有默认的white-space:normal（自动换行，不换行是white-space:nowrap）
			// 这个属性也是控制单词如何被拆分换行的，实际上是作为word-break的互补
			word-wrap: break-word;
			// word-break 控制单词如何被拆分换行的 normal | break-all 所有单词碰到边界一律拆分换行 | keep-all 所有“单词”一律不拆分换行 所有“单词”一律不拆分换行
			word-break: break-all;
			//上外边距 预留16rpx  防止与icon过分贴着
			margin-top: 16rpx;
			//左右内边距 各预留14rpx  防止左右贴边
			padding: 0 14rpx;
			height: 26rpx;
		}
	}
</style>
