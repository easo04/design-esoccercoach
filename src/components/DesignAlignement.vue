<template>
    <div class="design-component design-alignement">
        <div class="conteneur">
            <div class="content-design">
                <div class="outils">
                    <div class="outils-joueurs"> 
                        <h5>Joueurs</h5>
                        <div class="list-joueur-add list-joueurs-img">  
                            <div class="joueur-add joueur-add-img" v-for="(playerImg, indexPlayerIndex) in listeJoueurAlig" :key="indexPlayerIndex">
                                <img :id="'player-img-' + playerImg.name" :src="'images/joueurs/alignement/' + playerImg.image" @click="addPlayerImg(playerImg.image, playerImg.name)">
                            </div> 
                        </div>  
                    </div>
                    <div class="outils-terrains">
                        <h5>Terrains</h5>
                        <div class="list-terrain-add">
                            <div class="list-group-item terrain-li" v-for="(terrain, index) in listeTerrains" :key="index">
                                <div class="terrain-li-div" @click="changerTerrainImg(terrain.image, terrain.name)">
                                    <img :src="'images/terrain/' + terrain.image" :title="terrain.name"/>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
                <div class="terrain">
                    <div class="terrain-act action">
                        <div class="color-icons icons-soccer">
                        </div>

                        <div class="actions-icons icons-soccer">
                            <i class="fa fa-download" id=savePng @click="savePNG()" title="Télécharger"></i>
                        </div>
                        <div class="add-players" v-if="showLstJoueurs">
                            <a class="btn btn-add-player" @click="addPlayer()">Ajouter joueur</a>
                            <div class="lst-joueurs">
                                <div class="item-joueur" v-for="(j,i) in lstJoueurs" :key="i">
                                    <div class="name" @click="selectJoueur()">{{j.name}}</div>
                                    <div class="edit"><i class="fa fa-edit"></i></div> 
                                </div>  
                            </div>
                        </div> 
                    </div>
                    <div class="row terrain-space" id="terrainSoccer">
                        <div class="nom-equipe">
                            <h5>{{nameTeam}}</h5>
                        </div>
                        <div class="terrain-grid" :class="'terrain-'+classSysteme">
                            <div class="div-attaquants div-g">
                                <div v-for="(object, indexObj) in lstAttaquants" :key="indexObj" :id="'player' + indexObj" class="draggable player"  @click="selectObject(object.id, indexObj)">
                                    <div class="item-g" :class="{'player-top' : isBottomPlayer(lstAttaquants, indexObj)}">
                                        <img :src="'images/joueurs/alignement/'+playerTypeSelect">
                                    </div>
                                    <div class="name-player">{{indexObj}}</div>
                                </div>
                            </div> 
                            <div class="div-milieux div-g">

                                <div v-for="(object, indexObj) in lstMilieux" :key="indexObj" :id="'player' + indexObj" class="draggable player"  @click="selectObject(object.id, indexObj)">
                                    <div class="item-g" :class="{'player-bottom' : isBottomPlayer(lstMilieux, indexObj)}">
                                        <img :src="'images/joueurs/alignement/'+playerTypeSelect">
                                    </div>
                                    <div class="name-player">{{indexObj}}</div>
                                </div>
                            </div> 
                            <div class="div-defenseurs div-g">
                                <div v-for="(object, indexObj) in lstDefenseurs" :key="indexObj" :id="'player' + indexObj" class="draggable player"  @click="selectObject(object.id, indexObj)">
                                    <div class="item-g" :class="{'player-bottom' : isBottomPlayer(lstDefenseurs, indexObj)}">
                                        <img :src="'images/joueurs/alignement/'+playerTypeSelect">
                                    </div>
                                    <div class="name-player">{{indexObj}}</div>
                                </div>
                            </div>
                            <div class="div-gardien div-g">
                                <div class="player player-gardien" v-if="this.showGardien">
                                    <div class="item-g">
                                        <img src="images/joueurs/alignement/gardien.png">
                                    </div>
                                    <div class="name-player">{{gardienName}}</div>
                                </div>
                            </div>
                        </div> 
                        <div class="reserve">
                            <div class="player"><div class="item-g" v-if="showRemplacants">Remplaçants: 
                                <span class="remplacants" v-for="(r, index) in lstRemplacants" :key="index">
                                    <span v-if="index !== 0"> - </span> {{r}} 
                                </span>
                            </div></div>
                        </div>
                    </div>
                </div>
                <div class="outils">
                    <div class="outils-equipe-content">
                        <div class="outil-nom-equipe">
                            <h5>Nom d'équipe</h5>
                            <input type="text" v-model="nameTeam" placeholder="Nom d'équipe ...">
                        </div> 
                        <div class="outil-nb-joueurs">
                            <h5>Nombre de joueurs</h5>
                            <select name="nbJoueurs" id="nbJoueurs" class="system-select" v-model="nbJoueursSelect" @change="changeNbJoueurs()">
                                <option :value="nb" v-for="(nb, index) in lstNbJoueurs" :key="index">
                                    {{nb}}
                                </option>
                            </select>
                        </div> 
                        <div class="outil-systemes">
                            <h5>Système</h5>
                            <select name="systemes" id="systemes" class="system-select" v-model="systemeSelect" @change="changeSysteme()">
                                <option :value="systeme" v-for="(systeme, index) in lstSystemes" :key="index">
                                    {{systeme.systeme}}
                                </option>
                            </select>
                        </div>
                        <div class="outil-nom-equipe">
                            <h5>Ajouter remplaçant</h5>
                            <input type="text" v-model="nameRemplacant" placeholder="Nom du remplaçant ...">
                            <a class="btn btn-add-remplacant" @click="addRemplacant()">Ajouter</a>
                            <a class="delete-remplacant" data-toggle="modal" data-target="#modalDeleteRemplacants">Supprimer remplaçants</a>
                        </div> 
                        <div class="options-checkbox">
                            <div class="outil-systemes">
                                <label class="container-checkbox"> <h5>Afficher gardien</h5>
                                    <input type="checkbox" checked="checked" v-model="showGardien" >
                                    <span class="checkmark"></span>
                                </label>
                            </div> 
                            <div class="outil-systemes">
                                <label class="container-checkbox"> <h5>Afficher remplaçants</h5>
                                    <input type="checkbox" checked="checked" v-model="showRemplacants" >
                                    <span class="checkmark"></span>
                                </label>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalDeleteRemplacants" role="dialog">
                <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Supprimer ramplaçants</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div class="remplacant-list" :class="{'vide' : lstRemplacants.length === 0}">
                                <div class="aucun-remplacant" v-if="lstRemplacants.length === 0">Aucun remplaçant</div>
                                <div class="remplacant-item" v-for="(r, i) in lstRemplacants" :key="i">
                                    <span>{{r}}</span>
                                    <a class="btn delete-remplacant" @click="deleteRemplacant(i)"><i class="fa fa-trash"></i></a>
                                </div> 
                            </div> 
                        </div>
                        <div class="modal-footer">
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations } from 'vuex';
    export default {
        data() {
            return{
                lstObjectsDraggable:[],
                lstAttaquants:[],
                lstMilieux:[],
                lstDefenseurs:[],
                lstRemplacants:[],
                showGardien:true,
                showRemplacants:true,
                showLstJoueurs:false,
                lstJoueurs:[],
                lstSystemes:[{'systeme':'4-4-2','att':2,'mc':4, 'def':4},
                    {'systeme':'3-5-2','att':2,'mc':5, 'def':3}, {'systeme':'4-3-3','att':3,'mc':3, 'def':4}, {'systeme':'3-4-3','att':3,'mc':4, 'def':3}, {'systeme':'4-5-1','att':1,'mc':5, 'def':4},
                    {'systeme':'5-3-2','att':2,'mc':3, 'def':5}, {'systeme':'4-2-4','att':4,'mc':2, 'def':4}],
                systemeSelect:{'systeme':'4-4-2','att':2,'mc':4, 'def':4},
                lstNbJoueurs:[11,10,9,8,7,5],
                nbJoueursSelect:11,
                nameTeam:'Nom d\'équipe',
                nameRemplacant:'',
                gardienName:'Charlotte',
                playerTypeSelect:'player1.png'
            }
        },
        computed:{
            classSysteme(){
                return this.systemeSelect.systeme;
            },
            ...mapState(['listeTerrains', 'listeJoueurAlig', 'modePresentation'])
        },
        watch:{
        },
        methods:{
            selectObject(id, index){
                this.showLstJoueurs = true;
            },
            selectJoueur(){
                this.showLstJoueurs = false;
            },
            addRemplacant(){
                if(this.nameRemplacant && this.nameRemplacant !== ''){
                    this.lstRemplacants.push(this.nameRemplacant);
                    this.nameRemplacant = '';
                }
            },
            addPlayer(){
                if(this.lstJoueurs.length < this.nbJoueursSelect){  
                    let joueur = {
                        name:'Pepito',
                        isCapitain:false,
                    };
                    this.lstJoueurs.push(joueur);
                }
            },
            addPlayerImg(img, name){
                this.playerTypeSelect = img;
            },
            deleteRemplacant(i){
                this.lstRemplacants.splice(i, 1);
            },
            isBottomPlayer(list, index){
                let modulo = list.length % 2;
                if(modulo === 1){
                    return index + 1 === Math.round(list.length / 2);
                }
                return false;
            },
            changeSysteme(){
                    this.lstAttaquants=[];
                    this.lstMilieux=[];
                    this.lstDefenseurs=[];
                    for(let i = 0; i < this.systemeSelect.att; i++){
                        let player = {
                            noPlayer: i+1,
                        };
                        this.lstAttaquants.push(player);
                    }
                    for(let i = 0; i < this.systemeSelect.mc; i++){
                        let player = {
                            noPlayer: i+1,
                        };
                        this.lstMilieux.push(player);
                    }
                    for(let i = 0; i < this.systemeSelect.def; i++){
                        let player = {
                            noPlayer: i+1,
                        };
                        this.lstDefenseurs.push(player);
                    }
            },
            changeNbJoueurs(){
                
            },
            savePNG(){
                let globalThis = this;

                setTimeout(() => {
                    let domElement = document.getElementById("terrainSoccer");
                    html2canvas(domElement, {
                        onrendered: function(canvas) {
                            Canvas2Image.saveAsPNG(canvas); 
                        }
                    });
                }, 5 * 1000);
            },
        },
        mounted(){
            this.changeSysteme();
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../public/css/design';
    @import '../../public/css/design-alignement'; 
    @import '../../public/css/modal'; 
</style>                                    