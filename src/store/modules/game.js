export default {
    state: {
        startGame: false,
        playerNames: {
            one: null,
            two: null
        }
    },
    mutations: {
        /**
         * Set player name
         * @param player String (one | two)
         * @param name String
         */
        setPlayerName(state, { player, name }) {
            state.playerNames[player] = name;
        },
        startNewGame(state) {
            state.startGame = true;
        }
    },
    getters: {
        /**
         * Returns player name
         * @param player String (one | two) or boolean
         */
        playerName: (state) => (player) => {
            return state.playerNames[player];
        },
        gameIsStarted: (state) => {
            return state.startGame;
        }
    }
};
