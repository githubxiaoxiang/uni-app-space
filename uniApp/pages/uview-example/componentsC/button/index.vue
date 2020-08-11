<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">
				演示效果
			</view>
			<view class="u-demo-area">
				<u-button :type="type" :size="size" :shape="shape" :plain="plain" :ripple="ripple" ripple-bg-color="#909399" :loading="loading" :hairLine="hairLine">测试按钮</u-button>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">
					主题选择
				</view>
				<!-- 分段器文案显示不下  类型info暂时不加 -->
				<u-subsection vibrateShort :list="['default','primary','error','waring','success']" @change="typeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">
					尺寸大小
				</view>
				<u-subsection vibrateShort :list="['default','medium','mini']" @change="sizeChange"></u-subsection>
			</view>
			<view class='u-config-item'>
				<view class="u-item-title">
					形状
				</view>
				<u-subsection :vibrateShort="true" :list="['square','circle']" @change="shapeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">
					是否镂空
				</view>
				<u-subsection vibrateShort :current="1" :list="['是','否']" @change="plainChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<!-- 水波有问题 显示不出来 -->
				<view class="u-item-title">
					水波
				</view>
				<u-subsection :vibrateShort="true" :current="1" :list="['是','否']" @change="rippleChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<!-- 不是很明显 -->
				<view class="u-item-title">
					细边框
				</view>
				<u-subsection :vibrateShort="true" :current="1" :list="['是','否']" @change="hairLineChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">加载中</view>
				<u-subsection :vibrateShort="true" :current="1" :list="['是','否']" @change="loadingChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				type:'default',
				size:'default',
				shape:'square',
				plain:false,
				ripple:false,
				loading:false,
				hairLine:true,
				typeNames:['default','primary','error','waring','success','info'],
				sizeNames:['default','medium','mini'],
				shapeNames:['square','circle']
			}
		},
		methods:{
			typeChange(index)
			{
				this.type = this.typeNames[index];
			},
			sizeChange(index) 
			{
				this.size = this.sizeNames[index];
			},
			shapeChange(index)
			{
				this.shape = this.shapeNames[index]
			},
			plainChange(index)
			{
				this.plain = index==0?true:false;
			},
			rippleChange(index)
			{
				this.ripple = index==0?true:false;
			},
			hairLineChange(index)
			{
				this.hairLine= index==0?true:false;
			},
			loadingChange(index)
			{
				this.loading = index==0?true:false;
			}
		}
	}
</script>

<style>
</style>
