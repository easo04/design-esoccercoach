<template>
  <div class="home">
    <div class="section-info">
      <div class="information">
        <h1>Bienvenue à ESSoccerCoach, le créateur d'exercices pour les entraîneurs de soccer.</h1>
        <div class="division"></div>
        <p>Vous pouvez créer vos exercices, vos séances et votre alignement en utilisant un de nos services</p>
        <a class="btn" href="#services">CHOISIR UN DE NOS SERVICES</a>
      </div> 
      <div class="image-info">
          <Carousel :lst-images="lstImagesInfos" :source="sourceImageInfos"  :infos="lstTextInfos" :show-text="true"/>
      </div> 
    </div> 
    <div class="services" id="services">
      <div class="service-infos">
        <h2>NOS SERVICES</h2>
        <div class="section-btns">
          <a class="btn section" @click="gotToExercices()">
            <div class="create-exercice img-div">
              <img src="../../public/images/exercices-logo.png" alt="créer exercice">
            </div> 
            <div>Exercice</div>
          </a>
          <a class="btn section" @click="goToSeances()">
            <div class="create-seance img-div"> 
              <img src="../../public/images/seance-logo.png" alt="créer séance">
            </div>
            <div>Séance</div>
          </a> 
          <a class="btn section" @click="goToAlignements()">
            <div class="create-seance img-div"> 
              <img src="../../public/images/alignement-logo.png" alt="créer alignement">
            </div>
            <div>Alignement</div>
          </a> 
        </div>
      </div>
    </div> 
    <div class="section-outil-design">
      <div class="outil-design">
        <div class="text-section">
          <div class="text">     
            <h2>EXERCICES</h2>
            <p>La préparation des exercices est très importante dans la <strong>planification</strong> d'une séance d'entraînement. <br><br>Avec notre <strong>créateur d'exercices</strong>, vous pouvez créer vos exercices d'une façon très simple et les télécharger en image.</p>
            <a class="btn" @click="gotToExercices()">CRÉEZ VOTRE EXERCICE</a>
          </div> 
        </div> 
        <div class="image-section">
          <img src="../../public/images/infos/outil-design-custom.png" alt="essoccercoach-outil-design">
        </div> 
      </div> 
      <div class="outil-design left">
        <div class="image-section">
          <img src="../../public/images/infos/outil-design-custom.png" alt="essoccercoach-outil-design">
        </div> 
        <div class="text-section">
          <div class="text">     
            <h2>SÉANCES</h2>
            <p>Vous avez un entraînement aujourd'hui?<br><br> Planifiez votre <strong>séance d'entraînement</strong> avec notre créateur de séances.</p>
            <a class="btn" @click="goToSeances()">CRÉEZ VOTRE SÉANCE</a>
          </div> 
        </div>
      </div> 
      <div class="outil-design">
        <div class="text-section">
          <div class="text">     
            <h2>ALIGNEMENTS</h2>
            <p>Faites l'alignement de votre équipe d'une façon <strong>simple</strong> et <strong>rapide</strong> <br><br> Choisisez votre système, ajoutez vos joueurs et téléchargez votre alignement.</p>
            <a class="btn" @click="goToAlignements()">CRÉEZ VOTRE ALIGNEMENT</a>
          </div> 
        </div>
        <div class="image-section">
          <img src="../../public/images/infos/outil-design-custom.png" alt="essoccercoach-outil-design">
        </div> 
      </div> 
    </div>
    <div class="section-message">    
      <div class="message">
        <h2>UN OUTIL OFFERT À DES <br><span>ENTRAÎNEURS DE SOCCER</span> PASSIONÉS!</h2>
        <p>
          Il est déjà pas mal d’utiliser le meilleur produit pour l’organisation de son équipe de foot… Mais pouvoir intégrer des centaines d’exercices publics à ses propres entrainements, c’est simplement le délire ! Fais partie de notre communauté qui regroupe des entraineurs actifs et professionnels.
        </p>
        <div class="compteur">
          <div class="exercices-compteur">      
            <span class="number">+ 200</span><br>
            <span>Exercices créés avec notre outil</span>
          </div> 
        </div> 
        <div class="message-btn">    
          <a class="btn" @click="gotToExercices()">CRÉÉZ VOTRE EXERCICE</a>
        </div> 
      </div> 
    </div> 
    <div class="contact">    
      <h2>CONTACTEZ-NOUS</h2>
      <span>Écrivez-nous à l'adresse courriel: <span class="email"><a href="mailto:essoccercoach@gmail.com">essoccercoach@gmail.com</a></span></span>
      <div class="reseaux-sociaux">
      </div> 
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Carousel
  },
  data(){
    return{
      lstImagesInfos:['exercice.png', 'exercice.png', 'exercice.png'],
      lstTextInfos:['Créez vos exercices d\'une façon rapide ...', 'Télécharger votre séance en format pdf ...',
                  'Créez l\'alignement du prochain match ...'],
      sourceImageInfos:'/images/infos/',
    }
  },
  methods:{
    gotToExercices(){
        this.$router.push({path: '/create-exercice'});
    },
    goToSeances(){
      this.$router.push({path: '/create-exercice'});
    },
    goToAlignements(){
      this.$router.push({path: '/create-alignement'});
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../public/css/home';
</style>
