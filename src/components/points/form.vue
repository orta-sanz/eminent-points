<template>
    <div>
        <fieldset>
            <legend>Puntos por <strong>{{ pointName.singular }}</strong></legend>
            <input
                v-model="quantity"
                type="number"
                placeholder="Número de cartas"
                @keyup="updatePointValue"
            >
            <input
                v-model="points"
                type="number"
                :placeholder="placeholder.quantity"
                @keyup="updatePointValue"
            >

            <i
                class="icon-trash-empty"
                @click="removePoint"
            />
        </fieldset>
    </div>
</template>

<script>
import gamePointTypes from '../../constants/game-point-types.js';

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
            pointName,
            quantity: null,
            points: null,
            placeholder: {
                quantity: `Cantidad de ${pointName.plural}`
            }
        };
    },
    methods: {
        removePoint: function() {
            const { player, point } = this.$props;

            this.$store.commit('removePlayerPoint', {
                player: player,
                pointId: point.id
            });
        },
        updatePointValue: function() {
            const { points, quantity } = this;
            const { player, point } = this.$props;

            const value = quantity * points;

            this.$store.commit('updatePlayerPointValue', {
                player: player,
                pointId: point.id,
                points: value > 0 ? value : 0
            });
        }
    }
};
</script>

<style scoped lang="scss">
    fieldset {
        margin: 15px 0;
        display: block;

        legend, i {
            color: #FFF;
            font-weight: 300;
        }

        input {
            border: 0;
            padding: 5px;
            text-align: center;
            border-radius: 16px;
        }

        i {
            cursor: pointer;
            font-size: 18px;
        }
    }
</style>
