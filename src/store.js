
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    shoppingCart: [],
    favoriteItem:[]
  },
  mutations: {
    AddToBag (state, cart) {
      state.shoppingCart.push(cart)
    },

      RemoveFromCart (state, index) {
        state.shoppingCart.splice(index)
    },
    AddToFavorites (state,favs){
      state.favoriteItem.push(favs)
    },
     RemoveFromFav (state, index){
       state.favoriteItem.splice(index)
     }

   
  },

  actions: {},
  getters: {},
});     