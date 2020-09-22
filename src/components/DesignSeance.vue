<template>
    <div class="design-seance">
        <div class="creation-seance-infos" v-if="!showSeanceGenerate">      
            <h3>Création d'une séance</h3>
            <div class="errors">
                <span v-for="(error, i) in lstErrors" :key="i">* {{error}}</span>
            </div>
            <h5>Informations de la séance</h5>
            <div class="infos-base">
                <div class="input-control">
                    <label for="nom">Thème: </label> 
                    <input type="text" placeholder="Ex: Thème A" name="nom" v-model="seance.theme" autocomplete="off">
                </div>
                <div class="input-control">
                    <label for="lieu">Durée: </label> 
                    <input type="text" placeholder="Ex: 1h 30" name="lieu" v-model="seance.heure">
                </div>
                <div class="input-control">
                    <label for="date">Date: </label> 
                    <input type="text" placeholder="Ex: 2022-12-12" name="date" v-model="seance.date">
                </div>
                <div class="input-control">
                    <label for="coach">Entraîneur: </label> 
                    <input type="text" placeholder="Ex: Guardiola" name="coach" v-model="seance.coach">
                </div>
                <div class="input-control">
                    <label for="equipe">Équipe: </label> 
                    <input type="text" placeholder="Ex: Mancherter City" name="equipe" v-model="seance.equipe">
                </div>
                <div class="input-control">
                    <label for="lieu">Terrain: </label> 
                    <input type="text" placeholder="Ex: Terrain A" name="lieu" v-model="seance.lieu">
                </div>
            </div>
            <h5>Exercices</h5>
            <div class="infos-exercices-list">
                <div class="actions">
                    <a class="btn add-exercice" data-toggle="modal" data-target="#modalAddExercice" title="Ajouter exercice"><i class="fa fa-plus"></i></a>
                </div>
                <div class="lst-exercices" :class="{'vide':lstExercices.length === 0}">
                    <div class="liste-vide" v-if="lstExercices.length === 0">
                        <div>Aucun exercice</div>
                    </div>
                    <div class="exercice-item" v-for="(exe, i) in lstExercices" :key="i">
                        <div class="img" v-if="exe.image">
                            <img :src="exe.image">
                        </div>
                        <div class="infos" :class="{'infos-without-img' : !exe.image}">
                            <h5>{{exe.nom}}</h5>
                            <p v-if="exe.time"><span class="titre"><i class="fas fa-clock"></i> {{exe.time}}</span>
                            <p v-if="exe.objectif"><span class="titre">Objectif: </span> {{exe.objectif}}</p>
                            <p v-if="exe.disposition"><span class="titre">Disposition: </span> {{exe.disposition}}</p>
                            <p v-if="exe.consignes"><span class="titre">Consignes: </span> {{exe.consignes}}</p>
                        </div>
                        <div class="no-exercice">
                            <span>{{i+1}}</span>
                        </div>
                        <div class="actions">
                            <button class="btn btn-delete-exercice" @click="deleteExercice(i)" title="Supprimer"><i class="fa fa-trash"></i></button>
                            <button class="btn btn-update-exercice" @click="openUpdatExerciceModal(exe, i)" title="Modifier"><i class="fas fa-pen"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btns">
                <button @click="generateSeance()" class="btn">Générer PDF <i class="fa fa-file-pdf-o"></i></button>
            </div>
        </div>

        <div class="seance" v-if="showSeanceGenerate">
            <div class="actions">
                <button class="btn" @click="modifierSeance()">Modifier <i class="fas fa-pen"></i></button>
                <button class="btn btn-telecharger" @click="telechargerPDF()">Télecharger <i class="fa fa-download"></i></button>
            </div>
            <div id="seance">
                <div class="logo">
                    <img src="../../public/images/logo.png">
                </div>
                <div class="info-seance">
                    <div class="date"> 
                        <span class="titre">Date: </span><span>{{seance.date}}</span>
                    </div>
                    <div class="coach"> 
                        <span class="titre">Entraîneur: </span><span>{{seance.coach}}</span>
                    </div>
                    <div class="equipe"> 
                        <span class="titre">Équipe: </span><span>{{seance.equipe}}</span>
                    </div>
                    <div class="theme"> 
                        <span class="titre">Thème: </span><span>{{seance.theme}}</span>
                    </div>
                    <div class="heure"> 
                        <span class="titre">Durée: </span><span>{{seance.heure}}</span>
                    </div>
                    <div class="Terrain"> 
                        <span class="titre">Terrain: </span><span>{{seance.lieu}}</span>
                    </div>
                </div>
                <div class="lstExercices">
                    <div class="exercice" :class="{'not-image' : !exe.image}" v-for="(exe, i) in lstExercices" :key="i"> 
                        <div class="img" v-if="exe.image">
                            <img :src="exe.image">
                        </div>
                        <div class="infos">
                            <h5>{{exe.nom}}</h5>
                            <p v-if="exe.time"><span class="titre"><i class="fas fa-clock"></i> {{exe.time}}</span>
                            <p v-if="exe.objectif"><span class="titre">Objectif: </span> {{exe.objectif}}</p>
                            <p v-if="exe.disposition"><span class="titre">Disposition: </span> {{exe.disposition}}</p>
                            <p v-if="exe.consignes"><span class="titre">Consignes: </span> {{exe.consignes}}</p>
                        </div>
                        <div class="no-exercice">
                            <span>{{i+1}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-seance">
            </div>
        </div>
        <div class="modal fade" id="modalAddExercice" role="dialog">
                <div class="modal-dialog modal-lg">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Ajouter exercice</h4>
                            <button type="button" class="close" @click="closeModal()">&times;</button>
                        </div>
                        <div class="modal-body">
                                <div class="errors">
                                    <span v-for="(error, i) in lstErrorsExercice" :key="i">* {{error}}</span>
                                </div>
                                <div class="infos-exercices">
                                    <div class="input-control">
                                        <label for="nome">* Nom: </label> 
                                        <input type="text" placeholder="Nom séance" name="nome" v-model="exercice.nom" autocomplete="off">
                                    </div>
                                    <div class="input-control">
                                        <label for="time">Durée: </label> 
                                        <input type="text" placeholder="Nom séance" name="time" v-model="exercice.time" autocomplete="off">
                                    </div>
                                    <div class="input-control">
                                        <label for="objectif">Objectif: </label> 
                                        <textarea rows="4" cols="50" placeholder="Nom séance" name="objectif" v-model="exercice.objectif" autocomplete="off"></textarea>
                                    </div>
                                    <div class="input-control">
                                        <label for="disposition">Disposition: </label> 
                                        <textarea rows="4" cols="50" placeholder="Nom séance" name="disposition" v-model="exercice.disposition" autocomplete="off"></textarea>
                                    </div>
                                    <div class="input-control">
                                        <label for="consignes">Consignes: </label> 
                                        <textarea rows="4" cols="50" placeholder="Nom séance" name="consignes" v-model="exercice.consignes" autocomplete="off"></textarea>
                                    </div>
                                    <div class="input-control">
                                        <label for="image">Image: </label>
                                        <div class="image-exercice">
                                            <div class="image-upload" :class="{'image-saved' : fileName}">
                                                <div class="card-text file-upload-message">
                                                    <p><i class="fa fa-file-photo-o"></i><br><span>Ajouter une image</span></p>
                                                    <p class="preview-image" v-if="fileName">{{fileName}}</p>
                                                </div>
                                                <input type="file" name="image" id="input-file" :class="'file-upload file-upload'" @change="readFile" accept=".png, .jpg"/>
                                            </div>
                                            <div class="image-upload outil-designer"  :class="{'image-saved' : imageBase64}">
                                                <div class="card-text file-upload-message">
                                                    <p><i class="fa fa-paint-brush"></i><br><span>ESDesigner</span></p>
                                                    <p class="preview-image" v-if="imageBase64">Image sauvegardée</p>
                                                </div>
                                                <button  type="button" @click="goToDesigner(exercice)" title="Utiliser ESDesigner"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" @click="addExercice()" v-if="!isUpdateExercice">Ajouter</button>
                            <button type="button" class="btn btn-default" @click="updatExercice()" v-else>Modifier</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
    props:['fromDesign'],
    data(){
        return{
            seance:{
                theme:undefined, 
                heure:undefined,
                date:undefined,
                coach:undefined,
                equipe:undefined,
                lieu:undefined,
            },
            lstExercices:[],
            exercice:{
                nom:undefined,
                objectif:undefined,
                disposition:undefined,
                consignes:undefined,
                image:undefined,
                time:undefined
            },
            fileName:undefined,
            showSeanceGenerate:false,
            lstErrors:[],
            lstErrorsExercice:[],
            isUpdateExercice:false,
            indexExerciceUpdate:undefined,
        }
    },
    computed:{
        ...mapState(['imageBase64'])
    },
    methods:{
        scrollTop(){
            //scrollTop with jquery
            jQuery('html, body').animate({scrollTop: 0}, 200);
        },
        generateSeance(){
            if(this.isFormValide()){     
                this.scrollTop();
                this.setTextSpinner('Création de la séance en cours ...');
                this.setShowSpinner(true);

                setTimeout(() => {
                    this.showSeanceGenerate = true;
                    this.setShowSpinner(false);
                    localStorage.removeItem('modalAddExercice');
                }, 3 * 1000);


            }else{
                this.scrollTop();
            }
        },
        isFormValide(){
            if(this.lstExercices.length === 0){
                let error = 'Vous devez ajouter au moins un exercice pour générer la séance'
                this.lstErrors.push(error);
                return false;
            }else{
                this.lstErrors = [];
            }
            return true;
        },
        modifierSeance(){
            this.showSeanceGenerate = false;
        },
        closeModal(){
            this.initExercice();
            this.lstErrorsExercice = [];
            this.isUpdateExercice = false;
            this.indexExerciceUpdate = undefined;
            $("#modalAddExercice").modal("hide");
        },
        telechargerPDF(){
            let globalThis = this;

            setTimeout(() => {
                let domElement = document.getElementById("seance");
                html2canvas(domElement, {
                    onrendered: function(canvas) {
                        let img = canvas.toDataURL('image/png');
                        let pdf = new jsPDF();
                        pdf.addImage(img, 'JPEG', 10, 0);
                        pdf.setFontSize(9);
                        pdf.setTextColor(100);
                        pdf.text(10,290, 'Séance d\'entraînement créée par essoccercoach.com'); 
                        pdf.setFontSize(9);
                        pdf.setTextColor(100);
                        pdf.text(150,290, '© Copyrigth ESsoccerCoach 2020'); 

                        pdf.setProperties({
                            title: 'Entraînement',
                            subject: 'This is the subject',		
                            author: 'ESsoccerCoach',
                            creator: 'ESsoccerCoach'
                        });

                        pdf.save('entrainement.pdf');
                        globalThis.setShowSpinner(false);
                    }
                });
            }, 2 * 1000);
        },
        addExercice(){
            if(this.isFormExerciceValide()){
                if(this.imageBase64){
                    this.exercice.image = this.imageBase64;
                }
                this.lstExercices.push(this.exercice);
                this.initExercice();
                this.closeModal();
            }
        },
        deleteExercice(index){
            this.lstExercices.splice(index, 1);
        },
        openUpdatExerciceModal(exe, index){
            this.isUpdateExercice = true;
            this.indexExerciceUpdate = index;
            let exerciceUpdate = {
                nom:exe.nom,
                time:exe.time,
                objectif:exe.objectif,
                disposition:exe.disposition,
                consignes:exe.consignes
            };
            this.exercice = exerciceUpdate;
            this.setImageBase64(exe.image);

            $("#modalAddExercice").modal("show");
        },
        updatExercice(){
            if(this.isFormExerciceValide()){
                if(this.imageBase64){
                    this.exercice.image = this.imageBase64;
                }
                this.lstExercices[this.indexExerciceUpdate] = this.exercice;
                this.initExercice();
                this.closeModal();
                this.isUpdateExercice = false;
                this.indexExerciceUpdate = undefined;
            }
        },
        isFormExerciceValide(){
            if(!this.exercice.nom){
                let error = 'Le nom de l\'exercice est obligatoire';
                this.lstErrorsExercice.push(error);
                return false;
            }else{
                this.lstErrorsExercice =[];
            }

            return true;
        },
        initExercice(){
            this.exercice = {
                nom:undefined,
                objectif:undefined,
                disposition:undefined,
                consignes:undefined,
                image:undefined,
                time:undefined
            };
            this.fileName = undefined;
            this.setImageBase64(undefined);
        },
        readFile: function(event) {
            let files = event.target.files;
            if (files && files[0]) {             
                let FR = new FileReader();
                this.file = files[0];
                this.fileName = files[0].name;
                let vm = this;
                FR.addEventListener("load", function(e) {
                    vm.exercice.image = e.target.result;
                });
                FR.readAsDataURL(files[0]);
            }
        },
        goToDesigner(){

            //add information in localstorage
            let seanceLocale = {
                seance:this.seance,
                exercices:this.lstExercices,
                exercice:this.exercice,
            };

            const seanceParsed = JSON.stringify(seanceLocale);
            localStorage.setItem('seanceLocale', seanceParsed);

            const isCreateSeanceParsed = JSON.stringify(true);
            localStorage.setItem('isCreateSeance', isCreateSeanceParsed);

            if(this.isUpdateExercice){
                const indexExerciceUpdateParsed = JSON.stringify(this.indexExerciceUpdate);
                localStorage.setItem('indexExerciceUpdate', indexExerciceUpdateParsed);
            }
            
            this.closeModal();

            //go To Design
            this.$router.push({name: 'Design', params:{'fromCreateSeance' : true}});
        },
        ...mapMutations(['setShowSpinner', 'setTextSpinner', 'setImageBase64'])
    },
    created(){
    },
    mounted(){
        this.scrollTop();
        
        if(this.fromDesign){
            let seanceStorage = JSON.parse(localStorage.getItem('seanceLocale'));
            this.lstExercices = seanceStorage.exercices;
            this.seance = seanceStorage.seance;
            this.exercice = seanceStorage.exercice;
            $("#modalAddExercice").modal("show");
        }

        //vérifier si on était en mode modification d'exercice avant de quitter la page
        if(localStorage.getItem('indexExerciceUpdate')){
            this.indexExerciceUpdate = JSON.parse(localStorage.getItem('indexExerciceUpdate'));
            this.isUpdateExercice = true;
            localStorage.removeItem('indexExerciceUpdate');
        }
    },
    beforeDestroy(){
    }
}
</script>
<style lang="scss" scoped>
    @import '../../public/css/design-seance'; 
    @import '../../public/css/modal'; 
</style>