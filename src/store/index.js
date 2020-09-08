import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listeTerrains : [
      {'name': 'terrain11', 'color': '', 'image': 'terrain11.png'},	
      {'name': 'terrain10', 'color': '', 'image': 'terrain10.png'},    
      {'name': 'terrain17', 'color': '', 'image': 'terrain17.png'},
      {'name': 'terrain1', 'color': '', 'image': 'terrain1.png'},
      {'name': 'terrain14', 'color': '', 'image': 'terrain14.png'},
      {'name': 'terrain16', 'color': '', 'image': 'terrain16.png'},
      {'name': 'terrain13', 'color': '', 'image': 'terrain13.png'},
    ],
    listeJoueurs : [
      {'name': 'player1', 'image': 'player1.png'}, 
      {'name': 'player5', 'image': 'player5.png'},
      {'name': 'player6', 'image': 'player6.png'},
      {'name': 'player6', 'image': 'player6.png'}
    ],
    listeOutils : [
      {'name': 'ballon', 'image': 'ballon.png'}, 
      {'name': 'source_ballon', 'image': 'source_ballon.png'},
      {'name': 'but', 'image': 'but.png'},    	
      {'name': 'but3', 'image': 'but3.png'},
      {'name': 'but2', 'image': 'but2.png'},
      {'name': 'cone', 'image': 'cone.png'},
      {'name': 'cone-red', 'image': 'cone-red.png'},
      {'name': 'cone-blue-claro', 'image': 'cone-blue-claro.png'},
      {'name': 'cone-yellow', 'image': 'cone-yellow.png'},
      {'name': 'cone2', 'image': 'cone2.png'},
      {'name': 'cone2-red', 'image': 'cone2-red.png'},
      {'name': 'cone2-blue-claro', 'image': 'cone2-blue-claro.png'},
      {'name': 'cone2-yellow', 'image': 'cone2-yellow.png'},
      {'name': 'stair', 'image': 'stair.png'},
      {'name': 'stair-left', 'image': 'stair-left.png'},
      {'name': 'hoop', 'image': 'hoop.png'},
      {'name': 'hoop-red', 'image': 'hoop-red.png'},
      {'name': 'hoop-blue-claro', 'image': 'hoop-blue-claro.png'},
      {'name': 'hoop-yellow', 'image': 'hoop-yellow.png'},
      {'name': 'flag-black', 'image': 'flag-black.png'},
      {'name': 'flag-red', 'image': 'flag-red.png'},
      {'name': 'hurdles-black', 'image': 'hurdles-black.png'},
      {'name': 'hurdles-red', 'image': 'hurdles-red.png'},
      {'name': 'blocking', 'image': 'blocking.png'},
      {'name': 'blocking-red', 'image': 'blocking-red.png'},
      {'name': 'pick', 'image': 'pick.png'},   
      {'name': 'pic-red', 'image': 'pick-red.png'},
    ],
    listeLignes : [
      {'name': 'terrain7-2lignes', 'image': 'terrain7-2lignes.png', 'options':[{'image':'terrain7-2lignes_2color'}], 'terrain':'terrain7'}, 
      {'name': 'terrain7-3lignes', 'image': 'terrain7-3lignes.png', 'options':[{'image':'terrain7-3lignes_2colors'}], 'terrain':'terrain7'}, 
      {'name': 'terrain7-4lignes', 'image': 'terrain7-4lignes.png', 'options':[{'image':'terrain7-4lignes_2colors'}, {'image':'terrain7-4lignes_4colors'},
        {'image':'terrain7-4lignes_5colors'}], 'terrain':'terrain7'}, 
      {'name': 'terrain7-5lignes', 'image': 'terrain7-5lignes.png', 'options':[], 'terrain':'terrain7'}, 
      {'name': 'terrain7-3lignes-h', 'image': 'terrain7-3lignes-h.png', 'options':[{'image':'c'}, {'image':'terrain7-3lignes-h_3colors'}], 'terrain':'terrain7'}, 
      {'name': 'terrain7-2lignes-h', 'image': 'terrain7-2lignes-h.png', 'options':[], 'terrain':'terrain7'}, 
      {'name': 'terrain7-rectangle1', 'image': 'terrain7-rectangle1.png', 'options':[{'image':'terrain7-rectangle1_colors2'}], 'terrain':'terrain7'},
      {'name': 'terrain7-diago1', 'image': 'terrain7-diago1.png', 'options':[{'image':'terrain7-diago1_2colors'}], 'terrain':'terrain7'}, 
      {'name': 'terrain7-diago2', 'image': 'terrain7-diago2.png', 'options':[{'image':'terrain7-diago2_2colors'}], 'terrain':'terrain7'},
      {'name': 'terrain1-2lignes-h', 'image': 'terrain1-2lignes-h.png', 'options':[], 'terrain':'terrain1'}, 
      {'name': 'terrain1-3lignes-h', 'image': 'terrain1-3lignes-h.png', 'options':[], 'terrain':'terrain1'},  
      {'name': 'terrain1-3lignes-h2', 'image': 'terrain1-3lignes-h2.png', 'options':[], 'terrain':'terrain1'}, 
      {'name': 'terrain1-4lignes-v', 'image': 'terrain1-4lignes-v.png', 'options':[], 'terrain':'terrain1'}, 
      {'name': 'terrain1-plusieurs', 'image': 'terrain1-plusieurs.png', 'options':[], 'terrain':'terrain1'}, 
      {'name': 'terrain1-plusieurs2', 'image': 'terrain1-plusieurs2.png', 'options':[], 'terrain':'terrain1'}, 
      {'name': 'terrain1-1ligne2', 'image': 'terrain1-1ligne2.png', 'options':[], 'terrain':'terrain1'}, 
      {'name': 'terrain1-1ligne', 'image': 'terrain1-1ligne.png', 'options':[], 'terrain':'terrain1'}, 
      {'name': 'terrain1-3lignes-medio', 'image': 'terrain1-3lignes-medio.png', 'options':[], 'terrain':'terrain1'}, 
      {'name': 'terrain1-2lignes-medio', 'image': 'terrain1-2lignes-medio.png', 'options':[], 'terrain':'terrain1'}, 
      {'name': 'terrain11-carre', 'image': 'terrain11-carre.png', 'options':[], 'terrain':'terrain11'},
      {'name': 'terrain11-carre_2lignes-v', 'image': 'terrain11-carre_2lignes-v.png', 'options':[], 'terrain':'terrain11'}, 
      {'name': 'terrain11-carre_2lignes-v_2colors', 'image': 'terrain11-carre_2lignes-v_2colors.png', 'options':[], 'terrain':'terrain11'}, 
      {'name': 'terrain11-carre_4lignes', 'image': 'terrain11-carre_4lignes.png', 'options':[], 'terrain':'terrain11'}, 
      {'name': 'terrain11-carre_3lignes-v', 'image': 'terrain11-carre_3lignes-v.png', 'options':[], 'terrain':'terrain11'}, 
      {'name': 'terrain11-carre_3lignes-v_2colors', 'image': 'terrain11-carre_3lignes-v_2colors.png', 'options':[], 'terrain':'terrain11'},
      {'name': 'terrain10-3lignes-v', 'image': 'terrain10-3lignes-v.png', 'options':[], 'terrain':'terrain10'},
      {'name': 'terrain10-3lignes-v_2colors', 'image': 'terrain10-3lignes-v_2colors.png', 'options':[], 'terrain':'terrain10'},
      {'name': 'terrain10-zonesPressing', 'image': 'terrain10-zonesPressing.png', 'options':[], 'terrain':'terrain10'},
      {'name': 'terrain10-3lignes-h', 'image': 'terrain10-3lignes-h.png', 'options':[], 'terrain':'terrain10'},
      {'name': 'terrain10-3lignes-h_2colors', 'image': 'terrain10-3lignes-h_2colors.png', 'options':[], 'terrain':'terrain10'},
    ],
    listeFormes : [
      {'name': 'square-transparent', 'image': 'square-transparent.png', 'forme': 'square'},
      {'name': 'rectangle-black', 'image': 'rectangle-black.png', 'forme': 'rectangle'},
      {'name': 'arrow6', 'image': 'arrow6.png', 'forme': ''},
      {'name': 'arrow15', 'image': 'arrow15.png', 'forme': ''},
      {'name': 'arrow29', 'image': 'arrow29.png', 'forme': ''},
      {'name': 'arrow9', 'image': 'arrow9.png', 'forme': ''},
      {'name': 'arrow11', 'image': 'arrow11.png', 'forme': ''},
      {'name': 'arrow28', 'image': 'arrow28.png', 'forme': ''},
      {'name': 'arrow17', 'image': 'arrow17.png', 'forme': ''},
      {'name': 'arrow20', 'image': 'arrow20.png', 'forme': ''},
      {'name': 'arrow25', 'image': 'arrow25.png', 'forme': ''},
      {'name': 'arrow24', 'image': 'arrow24.png', 'forme': ''},
      {'name': 'arrow26', 'image': 'arrow26.png', 'forme': ''},
      {'name': 'arrow27', 'image': 'arrow27.png', 'forme': ''},
      {'name': 'line1', 'image': 'line1.png', 'forme': ''},
      {'name': 'line1-left', 'image': 'line1-left.png', 'forme': ''},
      {'name': 'line2', 'image': 'line2.png', 'forme': ''},
      {'name': 'line2-left', 'image': 'line2-left.png', 'forme': ''},
    ],
    modePresentation:false
  },
  getters:{
  },
  mutations: {
    setModePresentationStore(store, value){
      store.modePresentation = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
