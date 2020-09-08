<template>
    <div class="header-page">
        <a href="/"><img class="logo" src="images/logo.png"></a>
        <div class="actions-header" :title="textTitle" :class="{'mode-presentation':modePresentation}" @click="setModePresentation()">
            <i class="fa fa-desktop"></i>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
export default {
    name:"HeaderPage",
    data(){
        return{
            textTitle:'Activer le mode présentation'
        }
    },
    computed:{
        ...mapState(['modePresentation'])
    },
    methods:{
        setModePresentation(){
            if(this.modePresentation){
                
                this.textTitle = 'Activer le mode présentation';
                this.setModePresentationStore(false);
            }else{
                
                this.textTitle = 'Désactiver le mode présentation';
                this.setModePresentationStore(true);
            }
        },
        ...mapMutations(['setModePresentationStore'])
    }
}
</script>
<style lang="scss">
    @import '../../public/css/header';
</style>
