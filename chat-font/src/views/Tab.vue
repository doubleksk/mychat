<template>
  <div class="Tab">
		<el-menu
			class="el-menu-demo"
			mode="horizontal"
			background-color="#34495e"
			text-color="#b2bec3"
			active-text-color="#74b9ff">
			<el-menu-item index="1"><i class="el-icon-tickets"></i>好友</el-menu-item>
			<el-menu-item index="2"><i class="el-icon-menu"></i>群组</el-menu-item>
			<el-menu-item index="3"><i class="el-icon-phone-outline"></i>聊天室</el-menu-item>
			<el-menu-item index="4">陌生人<i class="el-icon-more-outline"></i></el-menu-item>
		</el-menu>
		<div class="line"></div>
  </div>
</template>

<script>
export default {
	name: 'Tab',
	data() {
		return {
			activeIndex: '1',
			activeIndex2: '1'
		};
  }
}
</script>

<style>
.Tab {
  position: fixed;
	width: 100vw;
  top: 6vh;
}
</style>