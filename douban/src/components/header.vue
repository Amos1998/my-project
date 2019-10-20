<template>
	<div class="headertop " :class="{bggreen:hasbg}" >
		<span>{{title}}</span>
		<slot name="imgleft"></slot>
		<slot name="imgright"></slot>
		<slot name="search"></slot>
	</div> 
</template>

<script>
	export default {
		props: ['title','hasbg']
	}
</script> 
<style scoped lang="less">
	.headertop {
		height: 50/100rem;
		background: #f7f7f7;
		border-bottom: 1px solid gray;
		text-align: center;
		line-height: 50/100rem;
		position: relative;
		img{
			position: absolute; width: 25/100rem;
			top: 13/100rem; right: 50/100rem;
		}
	} 
	 
	.headertop .imgright { right: 10/100rem; }
	/*搜索样式*/
	.headertop .search input{
		width: 88%; height: 30/100rem;
		border: none;
		position: absolute;
		left: 5/100rem; top: 8/100rem;
		border-radius: 5px;
		text-indent: 25px;
	}
	.headertop .search  img{
		position: absolute; top:10/100rem; width: 20/100rem;
	}
	.headertop .search .searchimg{ left: 10/100rem;
	}
	.headertop .search .scanimg{ right: 50/100rem;
	}
	.bggreen{ background-color:#48bd5a ; }
</style>