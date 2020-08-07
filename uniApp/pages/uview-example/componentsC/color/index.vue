<template>
	<view class="warp">
		<view class="item" v-for="(item,index) in dataList" :key="index">
			<view class="title">
				{{item.title}}
			</view>
			<view class="color-box">
				<!-- colorSpecialStyle计算属性 mcolorSpecialStyle方法  设置特殊样式 -->
				<view class="color-item"  v-for="(subItem,subIndex) in item.subList" :key="subIndex" :style="colorSpecialStyle(subItem.color,subItem.txtColor)" >
					<view class="color-title"> 
						{{subItem.subTitle}}
					</view>
					<view class="color-value">
						{{subItem.color}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				dataList:[
					{
						title:"主色调",
						subList:[
							{
								subTitle:"Primary", 
								// theme.scss中定义了这些颜色值  $u-type-primary  只能在style中引用  
								color:"#2979ff" //这里不能使用theme.scss中的值
							},
							{
								subTitle:"Dark",
								color:"#2b85e4"
							},
							{
								subTitle:"Disabled",
								color:"#a0cfff"
							},
							{
								subTitle:"Light",
								color:"#ecf5ff",
								txtColor:"#909399"
							}
						]
					},
					{
						title:"Error",
						subList:[
							{
								subTitle:"Error",
								color:"#fa3534"
							},
							{
								subTitle:"Dark",
								color:"#dd6161"
							},
							{
								subTitle:"Disabled",
								color:"#fab6b6"
							},
							{
								subTitle:"Light",
								color:"#fef0f0",
								txtColor:"#909399"
							}
						]
					},
					{
						title:"Warning",
						subList:[
							{
								subTitle:"Warning",
								color:"#ff9900"
							},
							{
								subTitle:"Dark",
								color:"#f29100"
							},
							{
								subTitle:"Disabled",
								color:"#fcbd71"
							},
							{
								subTitle:"Light",
								color:"#fdf6ec",
								txtColor:"#909399"
							}
						]
					},
					{
						title:"Info",
						subList:[
							{
								subTitle:"Info",
								color:"#909399"
							},
							{
								subTitle:"Dark",
								color:"#82848a"
							},
							{
								subTitle:"Disabled",
								color:"#c8c9cc"
							},
							{
								subTitle:"Light",
								color:"#f4f4f5",
								txtColor:"#909399"
							}
						]
					},
					{
						title:"Success",
						subList:[
							{
								subTitle:"Success",
								color:"#19be6b"
							},
							{
								subTitle:"Dark",
								color:"#18b566"
							},
							{
								subTitle:"Disabled",
								color:"#71d5a1"
							},
							{
								subTitle:"Light",
								color:"#dbf1e1",
								txtColor:"#909399"
							}
						]
					},
					{
						title:"文字颜色",
						subList:[
							{
								subTitle:"文字颜色",
								color:"#303133"
							},
							{
								subTitle:"常规文字",
								color:"#606266"
							},
							{
								subTitle:"次要文字",
								color:"#909399"
							},
							{
								subTitle:"占位文字",
								color:"#c0c4cc"
							}
						]
					},
					{
						title:"边框颜色",
						subList:[
							{
								subTitle:"一级边框",
								color:"#dcdfe6",
								txtColor:"#909399"
							},
							{
								subTitle:"二级边框",
								color:"#e4e7ed",
								txtColor:"#909399"
							},
							{
								subTitle:"三级边框",
								color:"#ebeef5",
								txtColor:"#909399"
							},
							{
								subTitle:"四级边框",
								color:"#f2f6fc",
								txtColor:"#909399"
							}
						]
					},
					{
						title:"背景颜色",
						subList:[
							{
								subTitle:"背景颜色",
								color:"#f3f4f6",
								txtColor:"#909399"
							}
						]
					}
				]
			}
		},
		computed:{
			colorSpecialStyle(){
				return (color,txtColor)=>{
					var cc = txtColor?txtColor:"#ffffff"
					return {"background-color":color,"color":cc} //background-color 需要记上""
				}
			}
		},
		methods:{
			mcolorSpecialStyle(color,txtColor){
				var cc = txtColor?txtColor:"#ffffff";
				return {"background-color":color,"color":cc} //background-color 需要记上""
			}
		}
	}
</script>

<style lang="scss" scoped>
	.warp {
		//内边距上下左右 18rpx  转成px  9px
		padding: 18rpx;
		box-sizing: border-box;
		display: block;
	}

	.item {
		//下外边距 
		margin-bottom: 30rpx;
		//上外边距
		margin-top: 44rpx;
		&:first-child{
			//第一个item 强制上外边距为0
			margin-top: 0rpx;
		}
		&:last-child{
			//最后一个item 强制下外边距为0
			margin-bottom: 0rpx;
		}
		.title {
			font-size: 30rpx;
			//父级定义position:relative定位，子级定义position:absolute绝对定位属性，并且子级使用left或right和top或bottom进行绝对定位。
			position: relative;
			line-height: 1;
			padding-left: 22rpx;
			&:before{
				width: 4px;
				height: 16px;
				border-radius: 100rpx;
				background-color: $u-content-color;
				content: ''; //需要加上这个 否则渲染不出来
				////子级定义position:absolute绝对定位属性，并且子级使用left或right和top或bottom进行绝对定位。
				// 绝对定位如果父级不使用position:relative，而直接使用position:absolute绝对定位，这个时候将会以body标签为父级
				position: absolute;
				left:6rpx;
				top:-1rpx;
			}
		}
		.color-box {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			margin-top: 20rpx;
			//所有子元素都会设置上center color-item .color-title .color-value?
			text-align: center;
			color:#fff;
			.color-item {
				// background-color: #fff;  动态设置
				display: flex;
				flex-direction: column;
				//自动大小
				flex:1;
				border-radius: 6rpx;
				margin: 0 8rpx;
				padding: 12rpx 0;
				
				.color-title {
					font-size: 28rpx;
				}
				.color-value {
					font-size: 24rpx;
				}
			}
		}
	}
</style>
