<template>
  <div class="banner">
    <Header></Header>
		<Tab></Tab>
  </div>
</template>

<script>
import Header from '../components/Header'
import Tab from '../views/Tab'
export default {
	name: 'Banner',
	  components: {
			Header,
			Tab
    }
}
</script>

<style>
.banner {
  position: fixed;
}
</style>
