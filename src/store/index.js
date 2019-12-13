import Vue from 'vue';
import Vuex from 'vuex';

import game from './modules/game';
import points from './modules/points';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        points,
        game
    }
});
