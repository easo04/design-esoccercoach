let objectSelected;
let lastColorSelected;
let terrainSelected = 'terrain11';
let lstOptionsActive = [];
let ligneSelected;
let formeSelected;

$(function() {
  //initialiser la liste des boutons
  initListeTerrains();
  initListeJoueurs();
  initListeOutils();
  initListeLignes();
  initListForms();
  initButtons(false);
  initButtonsFormes(false);

  //initialiser fonction pour le select de transparence
  $('#select-transparence').change(function (){
      $( "#select-transparence option:selected" ).each(function() {
        changeOpacity($( this ).val());
      });
  });

  enleverObjectSelects();

  //detecter tous les clicks qui se font dans terrainSoccer
  $('#terrainSoccer').click(function(event){
    deselectionner(event);  
  });
});

//Enlever tous les objects selects si click dans le terrain
function enleverObjectSelects(){
    $(document.body).click(function (e) {
        var objectWithClassSelected = $('.object-selected');
        if(objectWithClassSelected !== null){
            if (!$(e.target).is(objectWithClassSelected) && !$.contains(objectWithClassSelected, e.target) && !$(e.target).hasClass('action-outil')){
                objectWithClassSelected.removeClass('object-selected');
            }
        }
    });
}

//Changer l'opacité d'une forme
function changeOpacity(pourcentage){
    if(objectSelected.hasClass('resize-drag')){
        var opacity = pourcentage / 100;
        objectSelected[0].style.opacity = opacity;
        console.log(pourcentage);
    }
}

function changerTerrain(color){
    $('.terrain-space').css('background-image', '');
    $('.terrain-space').css('background-repeat', '');
    $('.terrain-space').css('background-color', color);
}

function initListeJoueurs() {
    var contenu = '';
    listeObjects.liste_joueurs.forEach(function (item) {
        contenu += '<li class="list-group-item joueur-li">'
        + '<div class="joueurs-li-div" onclick="ajouterJoueur(\'' + item.name + '\', \'' + item.image  + '\');">';
        if(item.image === ''){
          contenu += '<div class="drag-player-list"></div>';
        }else{
          contenu += '<div class="drag-player-list-img"><img src="images/joueurs/player-list/' + item.image + '"></div>';
        }
        contenu += '</div></li>';
    });
    $('#ul-liste-joueurs').html(contenu);
}

function ajouterJoueur(joueurName, joueurImage) {
    var noJoueurs = $('.terrain-space')[0].children.length + 1;
    var contenu = '';
    var color = lastColorSelected != null ? lastColorSelected : 'color-black';
    if(joueurImage === ''){
      contenu += '<div id="drag-joueur-' + noJoueurs +  '" class="draggable drag color-' + color + '" onclick="selectObject(\'drag-joueur-' + noJoueurs + '\')">' +
                  //'<p>' + noJoueurs + 'J</p>' +
                  '</div>';
    }else{
      var classMaxTaille = joueurName === 'player6' || joueurName === 'player1' ? '' : 'max-taille';
      var src = "images/joueurs/" + joueurImage;
      var classPlayerOne = 'playerOne';
      contenu += '<div id="drag-joueur-' + noJoueurs +  '" class="draggable drag-joueur ' + classMaxTaille + '" onclick="selectObject(\'drag-joueur-' + noJoueurs + '\')">' +
          '<img id="' + joueurName + '" src="' + src + '">' +
          '</div>';
    }

    $('#btnColor').addClass('action-selected');
    $('#terrainSoccer').append(contenu);
}

function getDataUrl(img) {
    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')

    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0)

    // If the image is not png, the format
    // must be specified here
    return canvas.toDataURL()
}

function creationCanvasPlayer(id){
    var context = document.querySelector("#terrainSoccer").getContext('2d');
    context.beginPath();
    context.fillStyle = "red";
    context.strokeStyle="black";
    context.arc(50, 50, 5, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
    context.closePath();
    var context = document.querySelector("#terrainSoccer").getContext('2d');
    context.beginPath();
    context.fillStyle = "red";
    context.strokeStyle="black";
    context.arc(50, 50, 5, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
    context.closePath();
}

function initListStyleLignes(name){
  let contenu = '';
  contenu += '<div class="style-option-ligne" onclick="changerLigneOption(\'' + ligneSelected + '\')"><img src="images/lignes/terrain-vide.png"/></div>';
  listeObjects.liste_lignes.forEach(function (ligne) {
    if(ligne.name === name){
      ligne.options.forEach(function(option) {
        contenu += '<div class="style-option-ligne" onclick="changerLigneOption(\'' + option.image + '\')"><img src="images/lignes/' + option.image + '.png"/></div>';
      });
    }
  });
  $('.styles-lignes').html(contenu);
}

function changerLigneOption(img){
  updateTerrain(img+'.png');
}

function initListStyleFormes(name){
  let contenu = '';
  contenu += '<div class="style-option-forme" onclick="changerForm(\'' + formeSelected + '\')"><img src="images/lignes/terrain-vide.png"/></div>';
  listeObjects.liste_formes.forEach(function (forme) {
    if(forme.name === name && forme.options !== undefined){
      forme.options.forEach(function(option) {
        if(option.forme !== ''){
          contenu += '<div class="style-option-forme ' + option.forme + '" onclick="changerForm(\'' + option.image + '\')"></div>';
        }else{
          contenu += '<div class="style-option-forme" onclick="changerForm(\'' + option.image + '\')"><img src="images/formes/' + option.image + '.png"/></div>';
        }     
      });
    }
  });
  $('.styles-lignes').html(contenu);
}

function changerForm(image){
  if(objectSelected !== null && objectSelected.hasClass('square-form')){
    objectSelected[0].childNodes[0].src = 'images/formes/' + image + '.png';
  }
}

function createLineCanvas(id, color, isHorizontale, isDiagonale){
    var canvas = document.getElementById(id);
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.lineWidth = 2;
          ctx.strokeStyle = color !== null ? color : "#ffffff";
          ctx.beginPath();
          if(isDiagonale){
            ctx.moveTo(20,100);
            ctx.lineTo(200,10);
          }else{
            if(isHorizontale){
              ctx.moveTo(20, 50);
              ctx.lineTo(230, 50);
            }else{
              ctx.moveTo(150, 50);
              ctx.lineTo(150, 200);
            }           
          }
          ctx.stroke();
        }
    }
}

function deleteObject() {
    objectSelected.remove();
    initButtons(false);
}

function deleteAll(){
    $('.terrain-space').empty();
    objectSelected = null;
    initButtons(false);
    initButtonsFormes(true);
}

function selectObject(dragId){
    objectSelected = $('#' + dragId);

    //INITALISER LES BOUTONS D'ACTIONS
    initButtons(true);

    //TOUT DESELECTIONNER
    var lastObjectSelected = $('.object-selected');
    if(lastObjectSelected.length !== 0){
      lastObjectSelected.removeClass('object-selected');
    }else{
      lastObjectSelected = $('.object-selected-img');
      if(lastObjectSelected.length !== 0){
        lastObjectSelected.removeClass('object-selected-img');
      }
      lastObjectSelected = $('.object-selected-outil');
      if(lastObjectSelected.length !== 0){
        lastObjectSelected.removeClass('object-selected-outil');
      }
    }

    if(objectSelected.hasClass('drag-joueur')){
      objectSelected.addClass('object-selected-img');
    }else if(!objectSelected.hasClass('drag-outil') && !objectSelected.hasClass('resize-drag')){
      objectSelected.addClass('object-selected');
    //}else if(objectSelected.hasClass('drag-outil') || objectSelected.hasClass('drag-forme')){
    }else{
      objectSelected.addClass('object-selected-outil');
    }

    //initialiser boutons des actions formers
    if(objectSelected.hasClass('resize-drag')){
      $('#btnMakeCopy').show();
      $('#select-transparence').show();
    }else{
      $('#btnMakeCopy').hide();
      $('#select-transparence').hide();
    }
}

function initButtonsFormes(showBtns){
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
        $('#btnZoomPlus').hide();
        $('#btnZoomMoins').hide();     
    }

    $('#btnCircle').removeClass('action-selected-form');
    $('#btnBorderForme').removeClass('action-selected-form');
    $('#btnMakeCopy').removeClass('action-selected-form');
    $('#btnSquare').addClass('action-selected-form');

}

function initButtons(showColors) {
  $('#supprimerObject').show();
  $('#deleteAll').show();

  if(showColors){
    //$('.color-icons').show();
    $('#btnAddText').show();
    //$('#btnColor').show();
    $('#btnRotate').hide();
    $('#btnZoomPlus').hide();
    $('#btnZoomMoins').hide(); 
  }

  //vérifier s'il y a un objet sélectionné
  if(objectSelected && objectSelected[0]){

    //récupérer l'objet sélectionné et vérifier s'il est de type drag-outil
    var idObjectSelected = objectSelected[0].id;
    if(objectSelected.hasClass('drag-outil')){

      //pour les cones et hulahula afficher certains couleurs seulement
      if(idObjectSelected.includes('cone') || idObjectSelected.includes('hoop')){
        $('.color-icons').show();
      }else{
        $('.color-icons').hide();
      }

      //pour les buts, echelles et fleches ne pas afficher btn rotation
      if(idObjectSelected.includes('but') || idObjectSelected.includes('stair') || idObjectSelected.includes('arrow')){
        $('#btnRotate').show();
      }else{
        $('#btnRotate').hide();
      }

      //pour les flehces afficher le zoom
      if(idObjectSelected.includes('arrow') || idObjectSelected.includes('square')){
        $('#btnZoomPlus').show();
        $('#btnZoomMoins').show();  
      }else{
        $('#btnZoomPlus').hide();
        $('#btnZoomMoins').hide();
      }

      $('#btnAddText').hide();
      $('#btnColor').hide(); 
    }
  }

  if(!showColors && objectSelected == null){
    $('.color-icons').hide();
    $('#btnAddText').hide();
    $('#btnColor').hide();
    $('#supprimerObject').hide();
    $('#deleteAll').hide();
  }
}

function deselectionner(event){
  if(event.target.id === 'terrainSoccer'){
    var lastObjectSelected = $('.object-selected');
    if(lastObjectSelected.length !== 0){
      lastObjectSelected.removeClass('object-selected');
    }else{
      lastObjectSelected = $('.object-selected-img');
      if(lastObjectSelected.length !== 0){
        lastObjectSelected.removeClass('object-selected-img');
      }
      lastObjectSelected = $('.object-selected-outil');
      if(lastObjectSelected.length !== 0){
        lastObjectSelected.removeClass('object-selected-outil');
      }
    }
    objectSelected = null;
  }  
}

function changerCouleurOutil(color){
  var last
  if(lastColorSelected != null){
    $('#color-' + lastColorSelected).removeClass('color-outil-selected');
  }

  $('#color-' + color).addClass('color-outil-selected');
  
  if(objectSelected !== null){
    if(objectSelected[0].id.startsWith('drag-joueur')){
      //vérifier si c'est un joueur avec une image
      if(objectSelected.hasClass('drag-joueur')){
        var imgId = objectSelected[0].children[0].id;
        objectSelected[0].innerHTML = '<img id="' + imgId + '" src="images/joueurs/' + imgId + '-' + color + '.png">';
      }else{
        objectSelected[0].className = '';
        objectSelected.addClass('draggable drag ' + 'color-' + color);
        objectSelected.removeClass('object-selected');
      }
    }else if(objectSelected[0].id.startsWith('drag-lgn')){
      objectSelected[0].className = '';
      objectSelected.addClass('color-' + color + ' resize-drag');
    }else if(objectSelected[0].id.startsWith('drag-outil')){
      var imgId = objectSelected[0].children[0].id;
      objectSelected[0].innerHTML = '<img id="' + imgId + '" src="images/outils/' + imgId + '-' + color + '.png">';
    } 
  }

  lastColorSelected = color;
  
}

function changerPlayerName(){
  var nomPlayer = $("#nomJoueur").val();
  if(objectSelected !== null && objectSelected[0].id.startsWith('drag-joueur')){
    if(objectSelected.hasClass('drag-joueur')){
      objectSelected[0].innerHTML += '<p>' + nomPlayer + '</p>';
    }else{
      objectSelected[0].innerHTML = '<p>' + nomPlayer + '</p>';
    }
    $("#nomJoueur").val('');
  }
}

function selectedAction(idAction){
  var actionSelected = $('.action-selected');
  if(actionSelected.length !== 0){
    if(actionSelected[0].id === idAction){
      $('#'+idAction).removeClass('action-selected');
      //NE PAS AFFICHER A SECTION DES COULEURS
      $('.color-icons').hide();
    }else{
      actionSelected.removeClass('action-selected');
      $('#'+idAction).addClass('action-selected');
    }
  }else{
    $('.color-icons').show();
    $('#'+idAction).addClass('action-selected');
  }
}

function selectedActionForm(idAction){
    var actionSelected = $('.action-selected-form');
    if(actionSelected.length !== 0){
        if(actionSelected[0].id === idAction){
            $('#'+idAction).removeClass('action-selected-form');
        }else{
            actionSelected.removeClass('action-selected-form');
            $('#'+idAction).addClass('action-selected-form');
        }
    }else{
        $('#'+idAction).addClass('action-selected-form');
    }
}

function rotate(){
  if(objectSelected != null){
    var idObjectSelected = objectSelected[0].id;
    if((idObjectSelected.startsWith('drag-outil') || idObjectSelected.startsWith('drag-ligne') ) 
      && (idObjectSelected.includes('but') || idObjectSelected.includes('stair') || idObjectSelected.includes('arrow'))){
      var imgId = objectSelected[0].children[0].id;
      var imgSrc = objectSelected[0].children[0].src;
      var rotate = 'right';
      if(imgSrc.includes('right')){
        rotate = 'bottom';        
      }else if(imgSrc.includes('bottom')){
        rotate = 'left';
      }else if(imgSrc.includes('left')){
        rotate = 'top';
      }else if(imgSrc.includes('top')){
        rotate = 'right';
      }

      if(idObjectSelected.includes('arrow')){
        objectSelected[0].innerHTML = '<img id="' + imgId + '" src="images/formes/' + imgId + '-' + rotate + '.png">';
      }else{
        objectSelected[0].innerHTML = '<img id="' + imgId + '" src="images/outils/' + imgId + '-' + rotate + '.png">';
      }
      
      
    }
  }

}



function makeCopy(){
    if(objectSelected !== undefined){
        var copyObjectSelected = objectSelected;
        var noLigne = $('.terrain-space')[0].children.length + 1;
        var contenu = '<div id="drag-lgn-' + noLigne +  '" class="' + copyObjectSelected[0].className + '" onclick="selectObject(\'drag-lgn-' + noLigne + '\')"></div>';
        $('.terrain-space').append(contenu);
        $('#drag-lgn-' + noLigne)[0].style.opacity = copyObjectSelected[0].style.opacity;
        $('#drag-lgn-' + noLigne)[0].style.width = copyObjectSelected[0].style.width;
        $('#drag-lgn-' + noLigne)[0].style.height = copyObjectSelected[0].style.height;
    }
}

function savePNG(){
  var domElement = document.getElementById("terrainSoccer");
  html2canvas(domElement, {
    onrendered: function(canvas) {
        Canvas2Image.saveAsPNG(canvas); 
    }
  });
}

function savePdf(){

    html2canvas($("#terrainSoccer"), {
        onrendered: function(canvas) {
            var img = canvas.toDataURL('image/png');
            var doc = new jsPDF();
            doc.addImage(img, 'JPEG', 20, 20);
            doc.save('exercice.pdf');
        }
    });
}


/* REFONTE */

function addPlayerByColor(color){
    let noJoueur = $('.terrain-space')[0].children.length + 1;
    let src = "images/joueurs/player1-" + color + '.png';
    let contenu = '<div id="drag-joueur-' + noJoueur +  '" class="draggable drag-joueur" onclick="selectObject(\'drag-joueur-' + noJoueur + '\')">' +
                    '<img id="' + color + '-' + noJoueur +'" src="' + src + '">' +
                  '</div>';
    $('#terrainSoccer').append(contenu);
}

function initListeTerrains(){
  let contenu = '';

  listeObjects.liste_terrains.forEach(item => {
    contenu += '<div class="list-group-item terrain-li">' +
                  '<div class="terrain-li-div" onclick="changerTerrainImg(\'' + item.image + '\', \'' + item.name  + '\');">'+
                    '<img src="images/terrain/' + item.image + '" title="' + item.name + '"/>' +
                  '</div>' +
                '</div>';
  });

  $(".list-terrain-add").html(contenu);
}

function changerTerrainImg(img, name){
  $('.terrain-space').css('background-image', 'url(images/terrain/' + img + ')');
  $('.terrain-space').css('background-repeat', 'no-repeat');
  terrainSelected = name;
  initListeLignes();
}

function initListeOutils() {
  let contenu = '';
  listeObjects.liste_outils.forEach(item => {
      contenu += '<div class="outil-li-div" onclick="ajouterOutil(\'' + item.name + '\', \'' + item.image  + '\');">' +
                    '<div class="drag-outil-list">'+
                      '<img src="images/outils/outils_list/' + item.image + '" alt="' + item.name + '" class="center" title="' + item.name + '">'+
                    '</div>'+
                  '</div>';
  });
  $('#liste-outils').html(contenu);
}

function ajouterOutil(outilName, outilImage) {
  let noOutil = $('.terrain-space')[0].children.length + 1;
  let contenu = '<div id="drag-outil-' + outilName + '-' + noOutil +  '" class="draggable drag-outil" onclick="selectObject(\'drag-outil-' + outilName + '-' + noOutil + '\')">' +
                  '<img id="' + outilName + '" src="images/outils/' + outilImage + '">' +
                '</div>';
                let test = `<div>`;
  $('#terrainSoccer').append(contenu);
}

function initListeLignes() {
  let contenu = '';
  /*contenu += '<div class="list-group-item ligne-li">'+
                '<div class="ligne-li-div" onclick="changerTerrainImg(\'' + terrainSelected + '.png\', \'' + terrainSelected  + '\')">'+
                  '<img src="images/lignes/terrain-vide.png" width="293px" height="178px"/>'+
                '</div>'+
              '</div>';*/
  listeObjects.liste_lignes.forEach(function (item) {  
      if(terrainSelected  === item.terrain){
        contenu += '<div class="list-group-item ligne-li">'+
                      '<div class="ligne-li-div" onclick="changerLigneImg(\'' + item.image + '\', \'' + item.name  + '\');">'+
                        '<img src="images/lignes/' + item.image + '" width="293px" height="178px" title="' + item.name + '"/>'+
                      '</div>'+
                    '</div>';
      }              
  });
  $('#liste-lignes').html(contenu);
}

function changerLigneImg(img, name){
  ligneSelected = name;
  updateTerrain(img);
  initListStyleLignes(name);
}

function updateTerrain(img){
  $('.terrain-space').css('background-image', 'url(images/lignes/' + img + ')');
  $('.terrain-space').css('background-repeat', 'no-repeat');
}

function initListForms(){
  let contenu = '';
  listeObjects.liste_formes.forEach(function (item) {
      contenu += '<div class="ligne-li-div-sm" onclick="ajouterForm(\'' + item.name + '\', \'' + item.image  + '\');">'+
                    '<div class="drag-forme-list">'+
                      '<img src="images/formes/forme_list/' + item.image + '" alt="' + item.name + '" title="' + item.name + '" class="center">'+
                    '</div>'+
                  '</div>';
  });
  $('#liste-formes').html(contenu);
}

function ajouterForm(formeName, formeImage) {

    //il faut d'abord vérifier quelle forme nous allons ajouter
    let actionSelected = $('.action-selected-form');
    let form = actionSelected.length !== 0 && actionSelected[0].id === "btnCircle" ? 'circle-form' : 'square-form';
    let noLigne = $('.terrain-space')[0].children.length + 1;
    let contenu = '';
    let color = lastColorSelected != null ? lastColorSelected : 'blue-claro';

    formeSelected = formeName;
    
    if(formeImage !== ''){
      contenu = '<div id="drag-ligne-' + formeName + '-' + noLigne +  '" class="draggable drag-forme" onclick="selectObject(\'drag-ligne-' + formeName + '-' + noLigne + '\')">' +
                  '<img id="' + formeName + '" src="images/formes/' + formeImage + '">' +
                '</div>';
    }

    $('#terrainSoccer').append(contenu);
    initListStyleFormes(formeName);
}

function zoomPlus(){
  if(objectSelected){
    /*if(objectSelected[0].id.includes('square')){
      objectSelected[0].childNodes[0].src='images/formes/square-black-md.png'
    }*/
    let image = objectSelected[0].children[0];
    if(image.height < 300){
      image.height += 10; 
      image.width += 10; 
    }
  }
}

function zoomMoins(){
  if(objectSelected){
    let image = objectSelected[0].children[0];
    if(image.height > 180){
      image.height -= 10; 
      image.width -= 10; 
    }
  }
}