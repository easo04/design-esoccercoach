<template>
<div id="app" class="app">
    <div class="spinner" v-if="spinner.showSpinner">
      <h2 class="spinner-title">{{ t('common.design.modal.spinner.title') }}</h2>
      <div class="spinner-load">
          <pulse-loader color="#8a2539"></pulse-loader>  
          <h4 class="texte-spinner">{{ t(spinner.textSpinner) }}</h4>
      </div>
    </div>
    <HeaderPage/>
    <router-view></router-view>
</div>
</template>
<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  import HeaderPage from './components/HeaderComponent'
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  export default {
  name:"app",
  components:{
    HeaderPage,
    PulseLoader
  },
  computed:{
    ...mapState(['spinner'])
  },
}
</script>
<style lang="scss">

    @import '../public/css/app';  
</style>
