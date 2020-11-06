<template>
  <div class="home" id="home-div">
    <div class="section-info">
      <div class="information">
        <h1>{{ t('common.home.title1') }} <strong>ESSoccerCoach</strong>, {{ t('common.home.title2') }}</h1>
        <div class="division"></div>
        <p>{{ t('common.home.title.message') }}</p>
        <a class="btn" href="#services">{{ t('common.home.btn-select-outils') }}</a>
      </div> 
      <div class="image-info">
          <Carousel :lst-images="lstImagesInfos" :source="sourceImageInfos"  :infos="lstTextInfos" :show-text="true"/>
      </div> 
    </div> 
    <div class="section-message message-services">    
      <div class="message">
        <h2>{{ t('common.home.message-services.title1') }} <strong>{{ t('common.home.message-services.title2') }}</strong></h2>
        <p>
          {{ t('common.home.message-services.message') }}
          <br><br><strong>ESSoccerCoach</strong> {{ t('common.home.message-services.message2') }}
          <strong>{{ t('common.home.message-services.message2.exercices') }}</strong>, {{ t('common.home.message-services.message2.vos') }} <strong>{{ t('common.home.message-services.message2.seances') }}</strong>
          {{ t('common.home.message-services.message2.et-vos') }} <strong>{{ t('common.home.message-services.message2.alignements') }}</strong>.
          <br><br>{{ t('common.home.message-services.profitez') }}
        </p>
      </div> 
    </div> 
    <div class="services" id="services">
      <div class="service-infos">
        <h2>{{ t('common.home.services-infos.title') }}</h2>
        <div class="section-btns">
          <a class="btn section" @click="gotToExercices()">
            <div class="create-exercice img-div">
              <img src="../../public/images/exercices-logo.png" alt="créer exercice">
            </div> 
            <div class="titre">{{ t('common.home.services-infos.exercice') }}</div>
          </a>
          <a class="btn section" @click="goToSeances()">
            <div class="create-seance img-div"> 
              <img src="../../public/images/seance-logo.png" alt="créer séance">
            </div>
            <div class="titre">{{ t('common.home.services-infos.seance') }}</div>
          </a> 
          <a class="btn section" @click="goToAlignements()">
            <div class="create-seance img-div"> 
              <img src="../../public/images/alignement-logo.png" alt="créer alignement">
            </div>
            <div class="titre">{{ t('common.home.services-infos.alignement') }}</div>
          </a> 
        </div>
      </div>
    </div> 
    <div class="section-outil-design">
      <div class="outil-design">
        <div class="text-section">
          <div class="text">     
            <h2>{{ t('common.home.section-outil-design.exercices.title') }}</h2>
            <p>{{ t('common.home.section-outil-design.exercices.message1.part1') }}<strong>{{ t('common.home.section-outil-design.exercices.message1.part2') }}</strong>{{ t('common.home.section-outil-design.exercices.message1.part3') }}
            <br><br>{{ t('common.home.section-outil-design.exercices.message1.part4') }}<strong>{{ t('common.home.section-outil-design.exercices.message1.part5') }}</strong>{{ t('common.home.section-outil-design.exercices.message1.part6') }}</p>
            <a class="btn" @click="gotToExercices()">{{ t('common.home.section-outil-design.exercices.btn-create-exercice') }}</a>
          </div> 
        </div> 
        <div class="image-section">
          <img src="../../public/images/infos/outil-design-custom.png" alt="essoccercoach-outil-design">
        </div> 
      </div> 
      <div class="outil-design left">
        <div class="image-section">
          <img src="../../public/images/infos/outil-seance-custom.png" alt="essoccercoach-outil-design">
        </div> 
        <div class="text-section">
          <div class="text">     
            <h2>{{ t('common.home.section-outil-design.seances.title') }}</h2>
            <p>{{ t('common.home.section-outil-design.seances.message1.part1') }}<br><br> {{ t('common.home.section-outil-design.seances.message1.part2') }}
            <strong>{{ t('common.home.section-outil-design.seances.message1.part3') }}</strong>{{ t('common.home.section-outil-design.seances.message1.part4') }}</p>
            <a class="btn" @click="goToSeances()">{{ t('common.home.section-outil-design.seances.btn-create-seances') }}</a>
          </div> 
        </div>
      </div> 
      <div class="outil-design">
        <div class="text-section">
          <div class="text">     
            <h2>{{ t('common.home.section-outil-design.alignements.title') }}</h2>
            <p>{{ t('common.home.section-outil-design.alignements.message1.part1') }}<strong>{{ t('common.home.section-outil-design.alignements.message1.part2') }}</strong>
            {{ t('common.home.section-outil-design.alignements.message1.part3') }}<strong>{{ t('common.home.section-outil-design.alignements.message1.part4') }}</strong>
            <br><br>{{ t('common.home.section-outil-design.alignements.message1.part5') }}</p>
            <a class="btn" @click="goToAlignements()">{{ t('common.home.section-outil-design.alignements.btn-create-alignements') }}</a>
          </div> 
        </div>
        <div class="image-section">
          <img src="../../public/images/infos/outil-alignement-custom.png" alt="essoccercoach-outil-design">
        </div> 
      </div> 
    </div>
    <div class="section-message">    
      <div class="message">
        <h2>{{ t('common.home.message-section.title.part1') }}<br><span>{{ t('common.home.message-section.title.part2') }}</span> {{ t('common.home.message-section.title.part3') }}</h2>
        <p>
          {{ t('common.home.message-section.message1') }}<br><br>
          {{ t('common.home.message-section.message2.part1') }}<strong>{{ t('common.home.message-section.message2.part2') }}</strong>{{ t('common.home.message-section.message2.part3') }}
        </p>
        <div class="compteur">
          <div class="exercices-compteur">      
            <span class="number">+ 200</span><br>
            <span>{{ t('common.home.message-section.exercices-outil') }}</span>
          </div> 
        </div> 
        <div class="message-btn">    
          <a class="btn" @click="gotToExercices()">{{ t('common.home.section-outil-design.exercices.btn-create-exercice') }}</a>
        </div> 
      </div> 
    </div> 
    <div class="contact" id=contactUs>    
      <h2>{{ t('common.home.contact-us') }}</h2>
      <span>{{ t('common.home.contact-us.message') }} <span class="email"><a href="mailto:essoccercoach@gmail.com">essoccercoach@gmail.com</a></span></span>
      <div class="reseaux-sociaux">
        {{ t('common.home.contact-us.instagram') }}<br>
        <a href="https://www.instagram.com/essoccercoach/" target="_blanc"><i class="fab fa-instagram"></i></a>
      </div> 
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import {mapState, mapMutations} from 'vuex';
import {analytic} from '@/main'

export default {
  name: 'Home',
  components: {
    Carousel
  },
  data(){
    return{
      lstImagesInfos:['exercice.png', 'seance.png', 'alignement.png'],
      lstTextInfos:['common.carrousel.exercice', 'common.carrousel.seance',
                  'common.carrousel.alignement'],
      sourceImageInfos:'/images/infos/',
    }
  },
  methods:{
    gotToExercices(){
        analytic.logEvent('go_to_exercice');
        this.$router.push({path: '/create-exercice'});
    },
    goToSeances(){
      analytic.logEvent('go_to_seances');
      this.$router.push({path: '/create-seance'});
    },
    goToAlignements(){
      analytic.logEvent('go_to_alignements');
      this.$router.push({path: '/create-alignement'});
    },
    ...mapMutations(['setShowMenuLeft'])
  },
  mounted(){
    let globalThis = this;
    $('#home-div').click(event =>{
        if(event.target.id !== 'menu-left'){
            globalThis.setShowMenuLeft(false);  
        }
    });
    this.$translate.setLang('fr');
  }
}
</script>
<style lang="scss" scoped>
  @import '../../public/css/home';
</style>
