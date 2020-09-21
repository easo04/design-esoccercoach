<template>
    <div class="header-page">
        <div class="header-div-1">
            <div class="actions">
                <a @click="showMenuLeft()" class="navicon"><i class="fa fa-navicon"></i></a>
                <a href="/"><img class="logo" src="images/logo.png"></a>
            </div>
            <div class="actions-header" :title="textTitle" v-if="showModePresentation" :class="{'mode-presentation':modePresentation}" @click="setModePresentation()">
                <i class="fa fa-desktop"></i>
            </div>
        </div>
        <div class="menu-left" :class="{'show-menu':isShowMenuLeft}">
            <div>
                <div class="imet-menu">
                    <ul>
                        <li>
                            <a href="/" class="home">Accueil</a>
                        </li>
                    </ul>
                </div>
                <div class="imet-menu">
                    <h5>NOS SERVICES</h5>
                    <ul>
                        <li><a @click="gotToExercices()">EXERCICE</a></li>
                        <li><a @click="goToSeances()">SÉANCE</a></li>
                        <li><a @click="goToAlignements()">ALIGNEMENT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
export default {
    name:"HeaderPage",
    data(){
        return{
            textTitle:'Activer le mode présentation',
            isShowMenuLeft:false,
        }
    },
    computed:{
        ...mapState(['modePresentation', 'showModePresentation'])
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
        showMenuLeft(){
            this.isShowMenuLeft = this.isShowMenuLeft ? false : true;
        },
        gotToExercices(){
            this.showMenuLeft();
            this.$router.push({path: '/create-exercice'});
        },
        goToSeances(){
            this.showMenuLeft();
            this.$router.push({path: '/create-seance'});
        },
        goToAlignements(){
            this.showMenuLeft();
            this.$router.push({path: '/create-alignement'});
        },
        ...mapMutations(['setModePresentationStore'])
    }
}
</script>
<style lang="scss">
    @import '../../public/css/header';
</style>
