<template>
  <div class="home" id="home-div">
    <div class="section-info">
      <div class="information">
        <h1>Bienvenue à <strong>ESSoccerCoach</strong>, le créateur d'exercices gratuit pour les entraîneurs de soccer.</h1>
        <div class="division"></div>
        <p>Vous pouvez créer vos exercices, vos séances et votre alignement en utilisant un de nos outils.</p>
        <a class="btn" href="#services">CHOISIR UN DE NOS OUTILS</a>
      </div> 
      <div class="image-info">
          <Carousel :lst-images="lstImagesInfos" :source="sourceImageInfos"  :infos="lstTextInfos" :show-text="true"/>
      </div> 
    </div> 
    <div class="section-message message-services">    
      <div class="message">
        <h2>PROFITEZ DE NOS OUTILS <strong>100% GRATUITS</strong></h2>
        <p>
          Souvent, les entraîneurs ne disposons pas des outils nécessaires pour bien préparer nos 
          séances d'entraînement. Le papier et le crayon deviennent rapidement nos meilleurs amis 
          lorsque nous voulons planifier
          nos entraînements ou nos exercices.
          <br><br><strong>ESSoccerCoach</strong> vous offre plusieurs outils pour vous permettre de 
          créer de façon très simple vos <strong>exercices</strong>, vos <strong>séances d'entraînement</strong>
          et vos <strong>alignements</strong>.
          <br><br>Profitez-en bien!
        </p>
      </div> 
    </div> 
    <div class="services" id="services">
      <div class="service-infos">
        <h2>NOS OUTILS</h2>
        <div class="section-btns">
          <a class="btn section" @click="gotToExercices()">
            <div class="create-exercice img-div">
              <img src="../../public/images/exercices-logo.png" alt="créer exercice">
            </div> 
            <div class="titre">Exercice</div>
          </a>
          <a class="btn section" @click="goToSeances()">
            <div class="create-seance img-div"> 
              <img src="../../public/images/seance-logo.png" alt="créer séance">
            </div>
            <div class="titre">Séance</div>
          </a> 
          <a class="btn section" @click="goToAlignements()">
            <div class="create-seance img-div"> 
              <img src="../../public/images/alignement-logo.png" alt="créer alignement">
            </div>
            <div class="titre">Alignement</div>
          </a> 
        </div>
      </div>
    </div> 
    <div class="section-outil-design">
      <div class="outil-design">
        <div class="text-section">
          <div class="text">     
            <h2>EXERCICES</h2>
            <p>La préparation des exercices est très importante dans la <strong>planification</strong> d'une séance d'entraînement. <br><br>Avec notre <strong>créateur d'exercices</strong>, vous pouvez créer vos exercices de façon très simple et les télécharger en image.</p>
            <a class="btn" @click="gotToExercices()">CRÉEZ VOTRE EXERCICE</a>
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
            <h2>SÉANCES</h2>
            <p>Avez-vous un entraînement aujourd'hui?<br><br> Planifiez votre <strong>séance d'entraînement</strong> avec notre créateur de séances.</p>
            <a class="btn" @click="goToSeances()">CRÉEZ VOTRE SÉANCE</a>
          </div> 
        </div>
      </div> 
      <div class="outil-design">
        <div class="text-section">
          <div class="text">     
            <h2>ALIGNEMENTS</h2>
            <p>Faites l'alignement de votre équipe de façon <strong>simple</strong> et <strong>rapide</strong> <br><br> Choisissez votre système, ajoutez vos joueurs et téléchargez votre alignement.</p>
            <a class="btn" @click="goToAlignements()">CRÉEZ VOTRE ALIGNEMENT</a>
          </div> 
        </div>
        <div class="image-section">
          <img src="../../public/images/infos/outil-alignement-custom.png" alt="essoccercoach-outil-design">
        </div> 
      </div> 
    </div>
    <div class="section-message">    
      <div class="message">
        <h2>UN OUTIL OFFERT À DES <br><span>ENTRAÎNEURS DE SOCCER</span> PASSIONÉS!</h2>
        <p>
          Nous vous offrons un outil conçu par un entrâineur de soccer pour aider tous 
          les entraîneurs qui ont besoin de créer leurs exercices de façon simple et rapide.<br><br>
          Profitez de notre outil <strong>100% gratuit</strong> pour commencer à créer les exercices de votre prochaine 
          séance d'entraînement.
        </p>
        <div class="compteur">
          <div class="exercices-compteur">      
            <span class="number">+ 200</span><br>
            <span>Exercices créés avec notre outil</span>
          </div> 
        </div> 
        <div class="message-btn">    
          <a class="btn" @click="gotToExercices()">CRÉEZ VOTRE EXERCICE</a>
        </div> 
      </div> 
    </div> 
    <div class="contact" id=contactUs>    
      <h2>CONTACTEZ-NOUS</h2>
      <span>Écrivez-nous à l'adresse courriel <span class="email"><a href="mailto:essoccercoach@gmail.com">essoccercoach@gmail.com</a></span></span>
      <div class="reseaux-sociaux">
        Suivez-nous sur instagram<br>
        <a href="https://www.instagram.com/essoccercoach/" target="_blanc"><i class="fab fa-instagram"></i></a>
      </div> 
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
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
      lstTextInfos:['Créez vos exercices d\'une façon rapide ...', 'Télécharger votre séance en format pdf ...',
                  'Créez l\'alignement de votre prochain match ...'],
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
  },
}
</script>
<style lang="scss" scoped>
  @import '../../public/css/home';
</style>
