export default {
    state: {
        playerPointNames: {
            one: [],
            two: []
        }
    },
    mutations: {
        /**
         * Add a new point type for a player
         * @param player String (one | two)
         * @param pointId String
         */
        addPlayerPoint(state, { player, pointId }) {
            state.playerPointNames[player].push({
                id: pointId,
                value: 0
            });
        },
        /**
         * Remove a player point
         */
        removePlayerPoint(state, { player, pointId }) {
            const updatedPlayerPoints = state.playerPointNames[player].filter((playerPoint) => (
                playerPoint.id !== pointId
            ));

            state.playerPointNames[player] = updatedPlayerPoints;
        },
        /**
         * Update the value of a player's point
         * @param player String (one | two)
         * @param pointId String
         * @param points Number
         */
        updatePlayerPointValue(state, { player, pointId, points }) {
            state.playerPointNames[player].map((playerPoint) => {
                if(playerPoint.id === pointId) {
                    playerPoint.value = points;
                }
            });
        }
    },
    getters: {
        /**
         * Returns all player point types
         * @param player String (one | two)
         */
        playerPoints: (state) => (player) => {
            return state.playerPointNames[player];
        },
        /**
         * Returns all player points (number)
         * @param player String (one | two)
         */
        totalPlayerPoints: (state) => (player) => {
            return state.playerPointNames[player].reduce((accu, point) => {
                return accu + point.value;
            }, 0);
        },
        /**
         * Check if the point it's already inside player points
         * @param player String (one | two)
         * @param pointId String
         */
        pointAlreadyInUse: (state) => (player, pointId) => {
            return state.playerPointNames[player].find(playerPoint => playerPoint.id === pointId);
        }
    }
};
