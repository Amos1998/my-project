<template>
	<div class="tabbarWrap">
		<Item txt="首页" mark="home" :sel="curr" @change="getVal">
			<img src="../assets/images/ic_tab_home_active.png" slot="activeImg" alt="" />
			<img src="../assets/images/ic_tab_home_normal.png" slot="nomalImg" alt="" />
		</Item>
		<Item txt="书影音" mark="audio" :sel="curr"  @change="getVal">
				<img src="../assets/images/ic_tab_subject_active.png" slot="activeImg" alt="" />
			<img src="../assets/images/ic_tab_subject_normal.png" slot="nomalImg" alt="" />
		</Item>
		<Item txt="广播" mark="broadcast" :sel="curr"  @change="getVal">
				<img src="../assets/images/ic_tab_status_active.png" slot="activeImg" alt="" />
			<img src="../assets/images/ic_tab_status_normal.png" slot="nomalImg" alt="" />
		</Item>
		<Item txt="小组"  mark="group" :sel="curr"  @change="getVal">
				<img src="../assets/images/ic_tab_group_active.png" slot="activeImg" alt="" />
			<img src="../assets/images/ic_tab_group_normal.png" slot="nomalImg" alt="" />
		</Item>
		<Item txt="我的"  mark="mine" :sel="curr"  @change="getVal">
				<img src="../assets/images/ic_tab_profile_female_active.png" slot="activeImg" alt="" />
			<img src="../assets/images/ic_tab_profile_female_normal.png" slot="nomalImg" alt="" />
		</Item>

	</div>
</template>

<script>
	import Item from './item'
	export default {
		data() {
				return {
					//当前选中项 (与mark对应)
					curr:"home"
				}
			},
			components: {
				Item
			},
			methods:{
				getVal(val){
					this.curr = val;
				}
			}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.tabbarWrap {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1rem;
		border: 1px solid #CCCCCC;
		text-align: center;
		display: flex;
	}
</style>