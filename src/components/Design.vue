<template>
    <div class="design-component">
        <div class="block-p" v-if="showPubSection"></div>
        <div class="conteneur">
            <div class="content-design">
                <div class="outils">
                    <div class="outils-joueurs"> 
                        <h5>Joueurs</h5>
                        <div class="list-joueur-add">  
                            <div class="joueur-add">
                                <img id="player1" src="../../public/images/joueurs/player1-red.png" @click="addPlayerByColor('red')">
                            </div> 
                            <div class="joueur-add">
                                <img id="player2" src="../../public/images/joueurs/player1-blue-claro.png" @click="addPlayerByColor('blue-claro')">
                            </div> 
                            <div class="joueur-add">
                                <img id="player3" src="../../public/images/joueurs/player1-yellow.png" @click="addPlayerByColor('yellow')">
                            </div>
                            <div class="joueur-add">
                                <img id="player4" src="../../public/images/joueurs/player1-black.png" @click="addPlayerByColor('black')">
                            </div>
                        </div>
                        <div class="list-joueur-add">  
                            <div class="joueur-add with-text">
                                <img id="player1A" src="../../public/images/joueurs/player1-red.png" @click="addPlayerWithTextByColor('red')">
                                <div class="txt">
                                    <i class="fas fa-font" @click="addPlayerWithTextByColor('red')"></i>
                                </div> 
                            </div> 
                            <div class="joueur-add with-text">
                                <img id="player2A" src="../../public/images/joueurs/player1-blue-claro.png" @click="addPlayerWithTextByColor('blue-claro')">
                                <div class="txt">
                                    <i class="fas fa-font" @click="addPlayerWithTextByColor('blue-claro')"></i>
                                </div> 
                            </div> 
                            <div class="joueur-add with-text">
                                <img id="player3A" src="../../public/images/joueurs/player1-yellow.png" @click="addPlayerWithTextByColor('yellow')">
                                <div class="txt">
                                    <i class="fas fa-font" @click="addPlayerWithTextByColor('yellow')"></i>
                                </div> 
                            </div>
                            <div class="joueur-add with-text">
                                <img id="player4A" src="../../public/images/joueurs/player1-black.png" @click="addPlayerWithTextByColor('black')">
                                <div class="txt">
                                    <i class="fas fa-font"  @click="addPlayerWithTextByColor('black')"></i>
                                </div> 
                            </div>
                        </div>  
                        <div class="list-joueur-add list-joueurs-img">  
                            <div class="joueur-add joueur-add-img" v-for="(playerImg, indexPlayerIndex) in listeJoueurs" :key="indexPlayerIndex">
                                <img :id="'player-img-' + playerImg.name" :src="'images/joueurs/' + playerImg.image" @click="addPlayerImg(playerImg.image, playerImg.name)">
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
                        <div class="back icons-soccer" v-if="!isSavePNG">
                            <i class="fa fa-arrow-left" @click="back()" title="Retourner"></i>
                        </div>
                        <div class="color-icons icons-soccer" v-if="showColorActions">
                            <div class="color-outil color-red action-outil" id="color-red" @click="changerCouleurOutil('red');"></div>
                            <div class="color-outil color-blue-claro action-outil" id="color-blue-claro" @click="changerCouleurOutil('bleu');"></div>
                            <div class="color-outil color-yellow action-outil" id="color-yellow" @click="changerCouleurOutil('yellow');"></div>
                            <div class="color-outil color-black action-outil" id="color-white" @click="changerCouleurOutil('black');"></div>           
                            <div class="color-outil color-transparent action-outil" id="color-white" @click="changerCouleurOutil('transparent');"></div>
                            <div class="select-opacity">
                                10% <input type="range" id="range-opacity" min="10" max="100" class="slider" name="range" value="100" v-model="rangeOpacity" @change="editOpacityForme()"> 100%
                            </div>
                        </div>

                        <div class="actions-icons icons-soccer">
                            <i class="fas fa-plus action-outil" id="btnZoomPlus" @click="zoomPlus()" title="Zoom +" v-if="showActionForms"></i>
                            <i class="fas fa-minus action-outil" id="btnZoomMoins" @click="zoomMoins()" title="Zoom -" v-if="showActionForms"></i>
                            <i class="fas fa-fill-drip action-outil" id="btnColor" @click="setShowColorActions()" title="Remplir avec couleur" v-if="showBtnRemplir"></i>
                            <i class="fa fa-eraser" @click="deleteObject()" id="supprimerObject" title="Effacer" v-if="showActionsObject"></i>
                            <i class="fa fa-trash" data-toggle="modal" data-target="#modalDeleteAll" id="deleteAll" title="Tout supprimer" v-if="showDeleteAll"></i>
                            <i class="fas fa-font" id="addText" @click="addText()" title="Ajouter texte"></i>
                            <i class="fa fa-circle add-number" id="addNumber" @click="addNumber()" title="Ajouter compteur">
                                <span class="fa-stack-1x">1</span>
                            </i>
                            <i class="fa fa-download" id=savePng @click="savePNG()" v-if="isSavePNG" title="Télécharger"></i>
                            <i class="fas fa-save" id=savePng @click="saveImage()" v-else title="Sauvegarder"></i>
                            <!--<i class="fa fa-file-pdf-o" id=savePdf @click="savePdf()"></i>-->
                        </div>
                    </div>
                    <div class="row terrain-space" id="terrainSoccer">
                        <div v-for="(object, indexObj) in lstObjectsDraggable" :key="indexObj" :id="object.id" class="draggable" :class="object.class"  @click="selectObject(object.id, indexObj)">
                            <img :id="object.image.id" :src="object.image.src" v-if="object.type !== 'drag-text' && object.type !== 'drag-number' && (!object.forme || object.forme === '')">
                            <div class="text-input" v-if="object.type === 'drag-text'">
                                <input type="text" :id="'input-text' + indexObj" v-model="object.text" name="name" autocomplete="off" @blur="verifyText(indexObj)">
                            </div>
                            <div :id="object.image.id" :class="object.forme" v-if="object.forme && object.forme !== ''">        
                            </div>
                            <div class="number-object" v-if="object.type === 'drag-number'">
                                <i class="fa fa-circle add-number" :id="'i-number-'+indexObj">
                                    <span class="fa-stack-1x">{{object.number}}</span>
                                </i>
                            </div>
                            <div class="rotate" v-if="indexObj === lastIndexObjectSelected && object.canRotate" @click="rotate()">
                                <i class="fa fa-rotate-right"></i>
                            </div>
                            <div class="text-player" v-if="object.textObject && object.textObject !== ''">
                                {{object.textObject}}
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="outils">
                    <div class="outils-onglets-content">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#outilsDiv" @click="initButtons();initButtonsFormes(false);">Outils</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#lignesDiv" @click="initButtons();">Lignes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#formsDiv" @click="initButtons();initButtonsFormes(true);">Formes</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane active container tab-onglet" id="outilsDiv">
                                <div class="list-group list-group-custom" id="liste-outils">
                                    <div class="outil-li-div" v-for="(outil, indexO) in listeOutils" :key="indexO" @click="ajouterOutil(outil.name, outil.image)">
                                        <div class="drag-outil-list">
                                            <img :src="'images/outils/outils_list/' + outil.image" :alt="outil.name" class="center" :title="outil.name">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane container tab-onglet" id="lignesDiv">
                                <div class="list-group" id="liste-lignes">
                                    <div class="list-group-item ligne-li" v-for="(ligne, indexL) in lstLigneFiltred" :key="indexL">
                                        <div class="ligne-li-div" @click="changerLigneImg(ligne.image, ligne.name)">
                                            <img :src="'images/lignes/' + ligne.image" width="293px" height="178px" :title="ligne.name"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane container tab-onglet" id="formsDiv">
                                <div class="list-group list-group-custom" id="liste-formes">
                                    <div class="ligne-li-div-sm" v-for="(forme, indexF) in listeFormes" :key="indexF" @click="ajouterForm(forme.name, forme.image, forme.forme)">
                                        <div class="drag-forme-list">
                                            <img :src="'images/formes/forme_list/' + forme.image" :alt="forme.name" :title="forme.name" class="center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="styles-lignes"></div>

            <!-- Modals -->
            <div class="modal fade" id="modalAddText" role="dialog">
                <div class="modal-dialog">
                
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Ajouter le nom du joueur</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <input type="text" class="form-control" id="nomJoueur" v-model="textPlayer" autocomplete="off" placeholder="Ex: Messi">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" @click="addPlayerWithText()">OK</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modalDeleteAll" role="dialog">
                <div class="modal-dialog">
                
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Tout supprimer</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <p>Voulez-vous tout supprimer?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" @click="deleteAll()">Oui</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Non</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { mapState, mapGetters, mapMutations } from 'vuex';
import {analytic} from '@/main'

export default {
    name:"Design",
    components: {
    },
    props:['fromCreateSeance'],
    data(){
        return{
            terrainSelected:'terrain11',
            lstObjectsDraggable:[],
            typeFormeSelected:undefined,
            objectSelected:undefined,
            lastIndexObjectSelected:undefined,
            ligneSelected:undefined,
            showActionsTerrain:false,
            showColorActions:false,
            showPubSection:false,
            showActionForms:false,
            showActionsObject:false,
            showBtnRemplir:false,
            textPlayer:undefined,
            colorPlayer:undefined,
            rangeOpacity:100,
            lstFormes : ['square', 'rectangle', 'triangle', 'circle'],
            numberSuite:0,
            isSavePNG: this.fromCreateSeance ? false : true,
        }
    },
    computed:{
        lstLigneFiltred(){
            return this.listeLignes.filter(i => i.terrain === this.terrainSelected);
        },
        showRotate(){
            if(this.lastIndexObjectSelected || this.lastIndexObjectSelected === 0){
                return this.lstObjectsDraggable[this.lastIndexObjectSelected].canRotate;
            }

            return false;     
        },
        widthFormeInit(){
            return this.typeFormeSelected === 'square' ? 200 : 300;
        },
        showDeleteAll(){
            return this.lstObjectsDraggable.length > 0;
        },
        ...mapState(['listeTerrains', 'listeJoueurs', 'listeOutils', 'listeLignes', 'listeFormes', 'modePresentation'])
    },
    watch:{
    },
    methods:{
        addObjectToList(type, idImage, srcImage, canRotate, textObject, formeObject, numberObject){
            let noObject = this.lstObjectsDraggable.length + 1;
            let object = {
                id:type + '-' + noObject,
                type: type,
                select:false,
                dataX:0,
                dataY:0,
                rotate:0,
                canRotate:canRotate,
                class: canRotate ? type + ' drag-rotate': type,
                text:'Text ...',
                textObject:textObject,
                forme:formeObject,
                number:numberObject,
                image:{
                    id:idImage + '-' + noObject,
                    src:srcImage,
                    size:undefined,
                }
            };

            let isObjectExist = this.lstObjectsDraggable.find(o=>o.id === object.id);

            if(isObjectExist){
                console.log('onject exist');
                noObject++;
                object = type + '-' + noObject; 
            }

            this.lstObjectsDraggable.push(object);

            this.deselectionner();
        },
        addPlayerByColor(color, ){
            this.addObjectToList('drag-joueur', color, 'images/joueurs/player1-' + color + '.png', false);
        },
        addPlayerImg(img, name){
            this.addObjectToList('drag-joueur-img', name, 'images/joueurs/' + img, false);
        },
        addPlayerWithTextByColor(color){
            this.colorPlayer = color;
            $("#modalAddText").modal();
        },
        addPlayerWithText(){
            this.addObjectToList('drag-joueur', this.colorPlayer, 'images/joueurs/player1-' + this.colorPlayer + '.png', false, this.textPlayer);
            this.textPlayer = '';
        },
        ajouterOutil(outilName, outilImage) {
            let canRotate = outilName.includes('but');
            this.addObjectToList('drag-outil', outilName, 'images/outils/' + outilImage, canRotate);
        },
        ajouterForm(formeName, formeImage, formeObject) {
            let canRotate = formeName.includes('arrow');
            this.addObjectToList('drag-forme', formeName, 'images/formes/' + formeImage, canRotate, undefined, formeObject);
        },
        changerTerrainImg(img, name){
            $('.terrain-space').css('background-image', 'url(images/terrain/' + img + ')');
            $('.terrain-space').css('background-repeat', 'no-repeat');
            this.terrainSelected = name;
        },
        changerLigneImg(img, name){
            this.ligneSelected = name;
            this.updateTerrain(img);
        },
        updateTerrain(img){
            $('.terrain-space').css('background-image', 'url(images/lignes/' + img + ')');
            $('.terrain-space').css('background-repeat', 'no-repeat');
        },
        initButtonsFormes(showBtns){
            if(showBtns) {
                $('#btnSquare').show();
                $('#btnCircle').show();
                $('#btnMakeCopy').hide();
                $('#select-transparence').hide();
                $('#btnRotate').hide();
            }else{
                $('#btnSquare').hide();
                $('#btnCircle').hide();
                $('#btnMakeCopy').hide();
                $('#select-transparence').hide();
                $('#btnRotate').hide();  
            }

            $('#btnCircle').removeClass('action-selected-form');
            $('#btnBorderForme').removeClass('action-selected-form');
            $('#btnMakeCopy').removeClass('action-selected-form');
            $('#btnSquare').addClass('action-selected-form');
        },
        initButtons() {
            
            this.showActionsObject = true;
            this.showColorActions = false;

            //vérifier s'il y a un objet sélectionné
            if(this.objectSelected && this.objectSelected[0]){
                let idImg = this.objectSelected[0].children[0].id;
                this.showActionForms = this.objectSelected.hasClass('drag-forme') 
                && (!idImg.includes('arrow') && !idImg.includes('line'));
            }else{
                this.showActionsObject = false;
                this.showActionForms = false;
            }
        },
        changerCouleurOutil(color){
            let image = this.objectSelected[0].children[0];
            let colorBackground;
            switch (color) {
                case 'red':
                    colorBackground = '#be030a';
                    break;
                case 'bleu':
                    colorBackground = '#03beb7';
                break;
                case 'yellow':
                    colorBackground = '#ffff00';
                break;
                case 'black':
                    colorBackground = 'black';
                break; 
                default:
                    colorBackground = 'transparent';
                    break;
            }
            image.style.backgroundColor = colorBackground;
        },
        zoomPlus(){
            if(this.objectSelected){
                let image = this.objectSelected[0].children[0];
                let isArrow = image.id.includes('arrow');
                if(isArrow){

                    //obtenir la prochaine taille
                    let sizeObjectSelected = this.lstObjectsDraggable[this.lastIndexObjectSelected]?.size;
                    let taille;
                    switch (sizeObjectSelected) {
                        case 'sm':
                            taille = 'md';
                            break;
                        case 'md':
                            taille = 'lg';
                            break;
                        case 'lg':
                            taille = 'lg';
                            break;
                        default:
                            taille = 'sm';
                            break;
                    }
                    this.lstObjectsDraggable[this.lastIndexObjectSelected].size = taille;

                    //remplacer src de l'image
                    image.src = image.src.replace(sizeObjectSelected ? '-' + sizeObjectSelected + '.png' : '.png', '-' + taille + '.png') ;
                }else{
                    let height = image.style.height.replace('px', '');
                    let width = image.style.width.replace('px', '');

                    height = height !== '' ? parseInt(height) : 200;
                    width = width !== '' ? parseInt(width) : this.widthFormeInit;
                    if(width < 300){
                        image.style.height = (height + 10) + 'px'; 
                        image.style.width = (width + 10) + 'px'; 
                    }
                }
                
            }
        },
        zoomMoins(){
            if(this.objectSelected){
                let image = this.objectSelected[0].children[0];
                let isArrow = image.id.includes('arrow');
                if(isArrow){

                    //obtenir la prochaine taille
                    let sizeObjectSelected = this.lstObjectsDraggable[this.lastIndexObjectSelected]?.size;
                    let taille;
                    switch (sizeObjectSelected) {
                        case 'lg':
                            taille = 'md';
                            break;
                        case 'md':
                            taille = 'sm';
                            break;
                        case 'sm':
                            taille = '';
                            break;
                        default:
                            taille = '';
                            break;
                    }
                    this.lstObjectsDraggable[this.lastIndexObjectSelected].size = taille;

                    //remplacer src de l'image
                    let searchvalue = sizeObjectSelected ? '-' + sizeObjectSelected + '.png' : '.png';
                    let newvalue = taille === '' ? '.png' : '-' + taille + '.png';
                    image.src = image.src.replace(searchvalue, newvalue) ;
                }else{

                    let height = image.style.height.replace('px', '');
                    let width = image.style.width.replace('px', '');

                    height = height !== '' ? parseInt(height) : 200;
                    width = width !== '' ? parseInt(width) : this.widthFormeInit;
                    if(width > 180){
                        image.style.height = (height - 10) + 'px'; 
                        image.style.width = (width - 10) + 'px'; 
                    }
                }
            }
        },
        selectObject(dragId, indexObj){
            this.objectSelected = $('#' + dragId);
            this.lastIndexObjectSelected = indexObj;

            //INITALISER LES BOUTONS D'ACTIONS
            this.initButtons();

            //TOUT DESELECTIONNER
            let lastObjectSelected = $('.object-selected-outil');

            //vérifier si c'est un objet joueur avec image
            //let isPlayerImg = this.lstObjectsDraggable[indexObj].isPlayerImg;
            //let className = isPlayerImg ? 'object-selected-outil-img' : 'object-selected-outil';

            lastObjectSelected?.removeClass('object-selected-outil');

            let lastObject = this.lstObjectsDraggable.find(o => o.select);
            if(lastObject){
                lastObject.select = false;
            }

            this.lstObjectsDraggable[indexObj].select = true;

            //add class object-select-outil si ce n'est pas mode presentation
            if(!this.modePresentation){
                this.objectSelected.addClass('object-selected-outil');
            }

            if(dragId.includes('drag-text')){
                document.getElementById('input-text' + indexObj).focus();
            }

            //vérifier si c'est une forme pour afficher les couleurs
            this.typeFormeSelected = this.lstFormes.find(f => this.objectSelected[0].children[0].id.includes(f));
            this.showBtnRemplir = this.typeFormeSelected ? true : false;
            
            //vérifier si la forme a une opacité
            this.rangeOpacity = this.typeFormeSelected && this.objectSelected[0].children[0].style.opacity !== '' ? (parseFloat(this.objectSelected[0].children[0].style.opacity) * 100) : 100;
        },
        setShowColorActions(){
            this.showColorActions = true;
        },
        editOpacityForme(){
            let image = this.objectSelected[0].children[0];
            image.style.opacity = this.rangeOpacity / 100;
        },
        deselectionner(){
            if(!this.modePresentation){
                let lastObjectSelected = $('.object-selected-outil');
                lastObjectSelected?.removeClass('object-selected-outil');
            }

            this.objectSelected = null;
            this.showActionForms = false;
            this.showActionsObject = false; 
            this.showBtnRemplir = false;
            this.showColorActions = false;
            this.lastIndexObjectSelected = undefined;
        },
        savePNG(){
            analytic.logEvent('save_png_exercice');
            
            this.deselectionner();
            this.setTextSpinner('Téléchargement de l\'image en cours ...');
            this.setShowSpinner(true);

            let globalThis = this;

            setTimeout(() => {
                let domElement = document.getElementById("terrainSoccer");
                html2canvas(domElement, {
                    onrendered: function(canvas) {
                        Canvas2Image.saveAsPNG(canvas); 
                        globalThis.setShowSpinner(false);
                    }
                });
            }, 5 * 1000);
        },
        saveImage(){
            analytic.logEvent('save_image_exercice');

            this.deselectionner();
            let globalThis = this;

            const dowloadImage = new Promise((resolve) => {    
                let domElement = document.getElementById("terrainSoccer");
                html2canvas(domElement, {
                    onrendered: function(canvas) {
                        var img = canvas.toDataURL('image/png');
                        globalThis.setImageBase64(img);
                        resolve("Create");
                    }
                });
            });

            dowloadImage.then(val=>{

                 //goToDesignSeance
                this.$router.push({name: 'DesignSeance', params:{'fromDesign' : true}});
            });
        },
        back(){

            //go To DesignSeance
            this.$router.push({name: 'DesignSeance', params:{'fromDesign' : true}});
        },
        deleteObject() {
            //vérifier si l'objet est de type number
            if(this.lstObjectsDraggable[this.lastIndexObjectSelected].type === 'drag-number'){
                this.numberSuite--;
            }

            this.objectSelected.remove();
            //this.lstObjectsDraggable.splice(this.lastIndexObjectSelected, 1);
            this.objectSelected = undefined;
            this.lastIndexObjectSelected =undefined;
            this.initButtons();
        },
        deleteAll(){
            $('.terrain-space').empty();
            this.objectSelected = null;
            this.initButtons();
            this.initButtonsFormes(true);
            this.lstObjectsDraggable = [];
            this.lastIndexObjectSelected = undefined;
            this.numberSuite = 0;
        },
        rotate(){
            if(this.objectSelected){
                let rotate = this.objectSelected[0].children[0]?.getAttribute('data-rotate');

                let deg = rotate ? parseInt(rotate, 10) : 0;
                deg = deg < 360 ? deg + 10 : 10;

                this.objectSelected[0].children[0].style.webkitTransform = 
                    this.objectSelected[0].children[0].style.transform = 'rotate(' + deg + 'deg)';

                this.objectSelected[0].children[0].setAttribute('data-rotate', deg); 
            }
        },
        addText(){
            this.addObjectToList('drag-text', undefined, undefined, true);
        },
        addNumber(){
            this.numberSuite++;
            this.addObjectToList('drag-number', undefined, undefined, false, undefined, undefined, this.numberSuite);
        },
        verifyText(indexObj){
            let value = this.lstObjectsDraggable[indexObj].text;
            if(!value || value === ''){
                this.deleteObject();
            }
        },
        ...mapMutations(['setShowSpinner', 'setTextSpinner', 'setShowModePresentation', 'setImageBase64'])
    },
    created(){
    },
    mounted(){
        let globalThis = this;
        this.initButtons();
        this.initButtonsFormes(false);
        this.setShowModePresentation(true);

        //detecter tous les clicks qui se font dans terrainSoccer
        $('#terrainSoccer').click(event =>{
            if(event.target.id === 'terrainSoccer'){
                globalThis.deselectionner();  
            }
        });

        //vérifier s'il y a une seance dans le locale storage
        if(localStorage.getItem('isCreateSeance')){
            this.isSavePNG = false;
        }
    },
    beforeDestroy(){   
        this.setShowModePresentation(false);
        localStorage.removeItem('isCreateSeance');
    },
}
</script>
<style lang="scss" scoped>
    @import '../../public/css/design';
    @import '../../public/css/modal';  
</style>