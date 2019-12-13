<template>
    <div>
        <p>Punto de tipo: <strong>{{ pointName }}</strong></p>
        <input
            type="number"
            placeholder="Número de cartas"
            @keyup="updatePointValue"
        >
    </div>
</template>

<script>
import gamePointTypes from '../constants/game-point-types.js';

export default {
    props: {
        point: {
            type: Object,
            required: true
        },
        player: {
            type: String,
            required: true
        }
    },
    data: function() {
        const pointName = gamePointTypes.find(point => point.id === this.point.id).name;

        return {
            pointName
        };
    },
    methods: {
        updatePointValue: function({ target: { value } }) {
            const { player, point } = this.$props;
            const pointValue = parseInt(value, 10);

            this.$store.commit('updatePlayerPointValue', {
                player: player,
                pointId: point.id,
                points: pointValue ? pointValue : 0
            });
        }
    }
};
</script>

<style scoped lang="scss">
    p {
        color: #FFF;
        font-weight: 300;
    }

    input {
        border: 0;
        padding: 5px;
        text-align: center;
        border-radius: 16px;
    }
</style>
