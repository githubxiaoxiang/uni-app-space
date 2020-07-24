<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>{{msg}}</view>
		<view>{{msg+"gga"}}</view>
		<view>{{"mime".indexOf("a")!=-1?"是我":"no me"}}</view>
		<view>{{"我爱你哈阿尔高".slice(0,2)}}</view>
		<!-- <image :src="url"></image> -->
		<view :class="'box'+1">test</view>
		<!-- <view :style="{width:'100px',height:'100px',background:'red'}"></view> -->
		<view :class="{box11:true}"></view>
		<view :class="['box11','box22']"></view>
		<view 
			v-for=" (item,index) in names" 
			:key="index"
			:class="{box33:index===currentIdx}"
			@click="setIndexNum(index)"
			>
			{{item}}
		</view>
		<view :class="[{box11:true},'box22']"></view>
		<comp>aaa</comp>
		<button type="primary" @click="toPath">跳转页面</button>
	</view>
</template>

<script>
	import comp from "../../components/comp.vue"
	export default {
		data() {
			return {
				title: 'Hello uni-app',
				msg:"lli",
				url:"https://www.baidu.com/img/bd_logo1.png",
				names:["aa","bb","cc"],
				currentIdx:0
			}
		},
		components:{
			comp
		},
		onLoad() {
			console.log("页面初始化 执行一次 onload");
		},
		onReady(){
			console.log("页面加载完成 执行一次 onredady");
		},
		onShow() {
			console.log("页面显示 执行多次 onshow");
		},
		onHide() {
			console.log("页面隐藏 执行多次 onhide");
		},
		onPullDownRefresh() {
			console.log("用户执行了下拉操作");
		},
		onTabItemTap() {
			console.log(("用户点击了 tab-bar"));
		},
		onPageScroll(data) {
			console.log(data);
		},
		onShareAppMessage() {
			console.log("用户点击了分享");
			return {
				title:"测试分享",
				path:"pages/index/index",
				imageUrl:"https://www.baidu.com/img/bd_logo1.png"
			}
		},
		methods: {
			setIndexNum(index)
			{
				this.currentIdx = index;
			},
			toPath(){
				//非tabBar定义的页面 跳转时保留老页面 一般用于需要返回
				uni.navigateTo({
					url:"../one/one?userName=aaa"
				});
				//跳转pages.json tabBar定义的页面
				// uni.switchTab({
				// 	url:"../test/test"
				// });
			}
		}
	}
</script>

<style>
	.box11{
		widht:100px;
		height:100px;
		background:pink;
	}
	.box22{
		border: 1px solid #4CD964
	}
	.box33{
		background: yellow;
	}
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		/* justify-content: center; */
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
