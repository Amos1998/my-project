<template>
	<div class="listWrap">
		<div class="left">
			<slot name="leftlist"></slot>
		</div>
		<div class="right">
			<img :src="url" alt="" />
		</div>
	</div>
</template>

<script>
	export default{
		props:['url']
	}
</script>

<style scoped lang="less">
	.listWrap{
		padding: 20px;
		overflow: hidden;
		border: 1px solid red;
		.left{
			width: 65%;
			float: left;
		}
		.right{
			width: 32%;
			float: left;
			img{
				width: 100px;
				height: 100px;
			}
		}
	}
</style>