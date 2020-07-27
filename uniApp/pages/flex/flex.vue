<template>
	<view>
		<!-- 筛子布局 -->
		<!-- <view class="bg box22"> -->
		<!-- <view class="itembg "></view> -->
		<!-- <view v-for="(item,index) in itemList" :key="item" class="itembg"></view> -->

		<!-- 		<view class="column20">
				<view class="itembg "></view>
				<view class="itembg "></view>
			</view>
			<view class="column20">
				<view class="itembg "></view>
				<view class="itembg "></view>
			</view> -->
		<!-- <view class="itembg "></view>
			<view class="itembg "></view>
			<view class="itembg "></view>
			<view class="itembg "></view> -->
		<!-- </view> -->

		<!-- 网格布局 -->
		<!--  基础布局-->
		<!-- <view class="box grid">
			<view class="grid-cell">1/2</view>
			<view class="grid-cell">1/2</view>
		</view>
		<view class="box grid">
			<view class="grid-cell">1/3</view>
			<view class="grid-cell">1/3</view>
			<view class="grid-cell">1/3</view>
		</view>
		<view class="box grid">
			<view class="grid-cell">1/4</view>
			<view class="grid-cell">1/4</view>
			<view class="grid-cell">1/4</view>
			<view class="grid-cell">1/4</view>
		</view> -->
		<!-- 百分比布局 -->
		<!-- <view class="box grid">
			<view class="grid-cell">auto</view>
			<view class="grid-cell u-1of3">1/3</view>
		</view>
		<view class="box grid">
			<view class="grid-cell u-1of2">1/2</view>
			<view class="grid-cell">auto</view>
			<view class="grid-cell">auto</view>
		</view>
		<view class="box grid">
			<view class="grid-cell u-1of4">1/4</view>
			<view class="grid-cell">auto</view>
			<view class="grid-cell">auto</view>
		</view> -->
		
		<!-- 圣杯布局 -->
	<!-- 	<view class="HolyGrail">
			<view class="header">header</view>
			<view class="HolyGrail-body">
				<view class="HolyGrail-nav">navigator</view>
				<view class="HolyGrail-content">content</view>
				<view class="HolyGrail-ads">ads</view>
			</view>
			<view class="footer">footer</view>
		</view> -->
		
		<!-- 输入框布局 -->
		<!-- <view class="item-input">
			<text class="name">搜索</text>
			<input class="input" placeholder="请输入要搜索的内容"/>
			<button size="mini" class="button">GO</button>
		</view> -->
		
		<!-- 悬挂式布局 -->
		<!-- <view class="media1">
			<text>头部标题</text>
		</view>
		<view class="media">
			<image class="img" src="../../static/logo.png"></image>
			<text class="media-body">mode为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数</text>
		</view> -->
		
		
		<!-- 固定的底栏 -->
		<!-- <view class="site">
			<view class="head">head</view>
			<view class="site-content">site-content</view>
			<view class="footer">footer</view>
		</view> -->
		
		<!-- 流式布局  每行的项目数固定，会自动分行。-->
		<view class="parent">
			 <view v-for="(item,index) in layerList" :key="item" class="child"></view> 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [1, 2, 3, 4, 5, 6],
				layerList:[1,2,3,4,5,6,7,8,9]
			}
		},
		methods:{
		}
	}
</script>

<style lang="scss" scoped>
	.bg {
		background-image: url('/static/bg.png');
		width: 180rpx;
		height: 180rpx;
	}

	.itembg {
		width: 60rpx;
		height: 60rpx;
		background-image: url('/static/point.png');
		background-repeat: no-repeat;
	}

	// 单项目
	.box1 {
		display: flex;
	}

	.box2 {
		display: flex;
		justify-content: center;
	}

	.box3 {
		display: flex;
		justify-content: flex-end;
	}

	.box4 {
		display: flex;
		align-items: center;
	}

	.box5 {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.box6 {
		display: flex;

		justify-content: center;
		align-items: flex-end;
	}

	.box7 {
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
	}

	// 双项目
	.box11 {
		display: flex;
		justify-content: space-between;
	}

	.box12 {
		display: flex;
		justify-content: space-around;
	}

	.box13 {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.box14 {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.box15 {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-end;
	}

	.box16 {
		display: flex;
	}

	.item16:nth-child(2) {
		align-self: center;
	}

	.box17 {
		display: flex;
		justify-content: space-between;
	}

	.item17:nth-child(2) {
		align-self: flex-end;
	}

	// 三项目
	.box18 {
		display: flex;
		justify-content: space-between;

	}

	.item18:nth-child(2) {
		align-self: center;
	}

	.item18:nth-child(3) {
		align-self: flex-end;
	}

	// 四项目
	.box19 {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-content: space-between;
	}

	.box20 {
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
	}

	.column20 {
		display: flex;
		flex-basis: 100%;
		justify-content: space-between;
	}
	
	// 6项目
	.box21 {
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
	}

	.box22 {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-content: space-between;
	}


	// 网格布局
	// 基本网格布局 最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放
	.box .grid-cell {
		border: 1px solid #ccc;
		height: 32px;
		line-height: 32px;
	}
	.box{
		background-color: #FCBD71;
	}
	.grid {
		display: flex;
	}
	.grid-cell {
		text-align: center;
		flex: 1;
	}
	.grid-cell.u-full{
		flex:0 0 100%;
	}
	.grid-cell.u-1of2{
		flex:0 0 50%;
	}
	.grid-cell.u-1of3{
		flex:0 0  33.3333%;
	}
	.grid-cell.u-1of4{
		flex:0 0 25%;
	}
	
	// 圣杯布局 页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏
	.HolyGrail
	{
		display: flex;
		flex-direction: column;
		min-height: 500rpx;
	}
	.HolyGrail view{
		border: 1px solid #FF9900;
		//.HolyGrail-content HolyGrail-nav .HolyGrail-ads 垂直高度已经被拉大了  垂直方向的控制不了居中
		text-align: center;
	}
	.header .footer{
		display: flex;
	}
	.HolyGrail-body{
		display:flex;
		flex:1;
		min-height: 100rpx;
	}
	.HolyGrail-content{
		flex:1;//自动填充
	}
	.HolyGrail-nav .HolyGrail-ads{
		/* 两个边栏的宽度设为200rpx */
		flex:0 0 20rpx
	}
	.HolyGrail-nav{
		/* 导航放到最左边 */
		order:-1;
	}
	//判断有问题  不知道什么问题
	// @media (max-width:600px) {
	// 	//如果是小屏幕，躯干的三栏自动变为垂直叠加。
	// 	.HolyGrail-body {
	// 	    flex-direction: column;
	// 	    flex: 1;
	// 	  }
	// 	  .HolyGrail-nav,
	// 	  .HolyGrail-ads,
	// 	  .HolyGrail-content {
	// 	    flex: auto;
	// 	  }
	// }
	// 输入框的布局 常常需要在输入框的前方添加提示，后方添加按钮
	.item-input{
		display: flex;
		align-items: center;
		border: #ccc solid 1px;
		background: #eee;
		height: 32px;
		margin-top: 0 10px;
	}
	.item-input .name{
		padding: 0 8px;
		color: #f00;
	}
	.item-input .input{
		flex: 1;
		align-self: stretch;
		padding: 4px 4px;
	}
	.item-input .button{
		padding: 0 10px;
	}
	
	// 悬挂式布局
	.media{
		display: flex;
		align-items:flex-start;
	}
	.media1{
		display: flex;
		justify-content: center;
	}
	.img{
		width: 40px;
		height: 40px;
	}
	.media-body{
		flex:1;
		margin:0 0 0 8px;
	}
	
	// 固定的底栏
	.site{
		display: flex;
		flex-direction: column;
		min-height: 400px;
		align-items: center;
	}
	.site{
		border:1px solid #f00;
	}
	.site-content{
		flex: 1;
	}
	
	.parent{
		display: flex;
		// flex-wrap: wrap;
		// flex-direction: row;
		flex-flow: row wrap;
		justify-content: flex-start;
		// width: 200px;
		// height: 150px;
		border: 1px solid #f00;
	}
	.child{
		box-sizing: border-box;
		border: 1px solid #eee;
		background-color: #0f0;
		flex:0 0 25%;
		height: 50px;
	}
	@import "/css/flex.css";
</style>
