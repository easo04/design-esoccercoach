<template>
<div id="app">
    <HeaderPage/>
    <Design/>
</div>
</template>
<script>
import Design from './components/Design'
import HeaderPage from './components/HeaderComponent'
export default {
name:"app",
components:{
  Design,
  HeaderPage
},
}
</script>
<style lang="scss">
</style>
