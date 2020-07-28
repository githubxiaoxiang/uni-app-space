<template>
	<view>
		<view>
			<view class="container">我是一个测试文本</view>
			<view class="container1">另一个测试文本</view>
			<view class="scss-parent">
				<view class="item1">嵌套规则1</view>
				<view class="item2">嵌套规则2</view>
				<view class="item3">嵌套规则3</view>
			</view>
			<view class="scss-attr">嵌套属性AAA</view>
			<view class="seletor">mixin seletor</view>
			<view class="danger">mixin danger</view>
			<view class="special">mixin 混入包含混入</view>
			<view class="boder-style">mixin 传递变量</view>
			<view class="myBox">transform rotate</view>
			<view class="shadow">shadow 可变参数</view>
			<button class="button-basic">基础按钮</button>
			<button class="button-sumit">提交按钮</button>
			<button class="button-cancel">取消按钮</button>
			<text class="txt1">测试控制指令@if</text>
			<view v-for="(item,index) in colList" :key="item" :class="setClass(item)">
				item222
			</view>
			<view v-for="(item,index) in user" :key="item" class="item">
				each for {{item}}
			</view>
			<view v-for="(item,index) in userList" :key="item" :class="setUsrClass(item)">
				each for key {{item}}
			</view>
			<!-- :class="`mytxt-`+item"  :class="'mytxt-'+item" -->
			<view v-for="(item,index) in txtList" :key="'mytxt-'+item" :class="`mytxt-`+item">
				while {{item}}
			</view>
			<view class="btn-state">and or not哈哈哈</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				colList:[1,2,3,4],
				user:["bob","mike","jorn"],
				userList:[5,6,7,8],
				txtList:[1,2,3,4,5]
			}
		},
		methods:{
			setClass(value){
				return "col-"+value;
				// return "col-"+`${value}`;
			},
			setUsrClass(value){
				return "usr"+value;
			}
		}
	}
</script>

<style lang="scss" scoped>
	// Sass 导入文件 CSS @import 指令在每次调用时，都会创建一个额外的 HTTP 请求。但，Sass @import 指令将文件包含在 CSS 中，不需要额外的 HTTP 请求。
	// 包含文件时不需要指定文件后缀，Sass 会自动添加后缀 .scss。
	@import  "css/study"
	// @import "css/study.scss";
</style>
