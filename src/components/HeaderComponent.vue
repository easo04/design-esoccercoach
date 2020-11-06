<template>
    <div class="header-page">
        <div class="header-div-1">
            <div class="actions">
                <a @click="canShowMenuLeft()" class="navicon"><i class="fa fa-navicon"></i></a>
                <a href="/"><img class="logo" src="images/logo.png"></a>
                
                <div class="actions-header">
                    <div class="action-langues" id="select-langues">
                        <a class="langue language" @click="setShowLangue()"><i class="fa fa-globe"></i> Language ({{langueSelected}})</a>
                        <div class="options-langue" v-if="showLstLangues">
                            <ul>
                                <li :class="{'langue-selected' : langueSelected === 'fr'}"><a class="langue" @click="setLangue('fr')">Français</a></li>
                                <li :class="{'langue-selected' : langueSelected === 'en'}"><a class="langue" @click="setLangue('en')">English</a></li>
                                <li :class="{'langue-selected' : langueSelected === 'es'}"><a class="langue" @click="setLangue('es')">Español</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="action-presentation" :title="textTitle" v-if="showModePresentation" :class="{'mode-presentation':modePresentation}" @click="setModePresentation()">
                        <i class="fa fa-desktop"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu-left" :class="{'show-menu':isShowMenuLeft}" id="menu-left">
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
                <div class="imet-menu informations">
                    <h5>INFORMATIONS</h5>
                    <ul>
                        <li>
                            <a href="/#contactUs" @click="canShowMenuLeft()">Contactez-nous</a>
                        </li>
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
            showLstLangues:false,
            langueSelected:'fr'
        }
    },
    computed:{
        ...mapState(['modePresentation', 'showModePresentation', 'showMenuLeft'])
    },
    watch:{
        showMenuLeft(){
            this.isShowMenuLeft = this.showMenuLeft;
        }
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
        canShowMenuLeft(){
            this.isShowMenuLeft = this.isShowMenuLeft ? false : true;
            
            //set store object
            this.setShowMenuLeft(this.isShowMenuLeft);
        },
        gotToExercices(){
            this.canShowMenuLeft();
            this.$router.push({path: '/create-exercice'});
        },
        goToSeances(){
            this.canShowMenuLeft();
            this.$router.push({path: '/create-seance'});
        },
        goToAlignements(){
            this.canShowMenuLeft();
            this.$router.push({path: '/create-alignement'});
        },
        goToHelp(){
            this.canShowMenuLeft();
            this.$router.push({path: '/help'});
        },
        setShowLangue(){
            this.showLstLangues = this.showLstLangues ? false : true;
        },
        setLangue(lang){
            switch (lang) {
                case 'fr':
                    this.langueSelected = 'fr';
                    break;
                case 'en':
                    this.langueSelected = 'en';
                    break;
                case 'es':
                    this.langueSelected = 'es';
                    break;
                default:
                    this.langueSelected = 'fr';
                    break;
            }
            this.$translate.setLang(this.langueSelected);
            this.setShowLangue();
        },
        ...mapMutations(['setModePresentationStore', 'setShowMenuLeft'])
    },
    mounted(){
        // let globalThis = this;
        // $('#home-div').click(event =>{
        //     if(event.target.id !== 'select-langues'){
        //         globalThis.setShowLangue(); 
        //     }
        // });
    }
}
</script>
<style lang="scss">
    @import '../../public/css/header';
</style>
