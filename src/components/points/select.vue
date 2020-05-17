<template>
    <section>
        <h2>{{ name }}</h2>

        <div class="counter">
            <p>Puntos:</p>
            <p>{{ $store.getters.totalPlayerPoints(player) }}</p>
        </div>

        <p>Seleccione el tipo de punto para añadir:</p>
        <select v-model="selectedPointType">
            <option
                disabled
                value="false"
            >
                Seleccione un elemento
            </option>
            <option
                v-for="point in gamePointTypes"
                :key="point.key"
                :value="point.id"
                :disabled="$store.getters.pointAlreadyInUse(player, point.id)"
            >
                {{ point.name.singular }}
            </option>
        </select>

        <button
            class="btn btn--small"
            type="button"
            @click="addPointType"
        >
            Añadir
        </button>

        <PointForm
            v-for="playerPoint in playerPointTypes"
            :key="playerPoint.key"
            :point="playerPoint"
            :player="player"
        />
    </section>
</template>

<script>
import PointForm from './form.vue';
import gamePointTypes from '../../constants/game-point-types.js';

export default {
    components: {
        PointForm
    },
    props: {
        name: {
            type: String,
            required: true
        },
        player: {
            type: String,
            required: true
        }
    },
    data: function() {
        return {
            selectedPointType: false,
            gamePointTypes,
        };
    },
    computed: {
        playerPointTypes() {
            return this.$store.getters.playerPoints(this.$props.player);
        }
    },
    methods: {
        addPointType: function() {
            this.selectedPointType && this.$store.commit('addPlayerPoint', {
                player: this.$props.player,
                pointId: this.selectedPointType
            });

            this.selectedPointType = false;
        }
    }
};
</script>

<style scoped lang="scss">
    section {
        text-align: center;

        .counter {
            p {
                &:first-child {
                    margin-right: 20px;
                    display: inline-block;
                }

                &:last-child {
                    margin: 0;
                    font-size: 45px;
                    font-weight: 900;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
        }

        h2 {
            color: #FFF;
            letter-spacing: 5px;
            text-shadow: 0px 0px 9px #403BEF;
        }

        p {
            color: #FFFA;
        }

        select {
            border: 0;
            width: 100%;
            color: #000;
            padding: 10px 0;
            font-weight: bold;
            text-align: center;
            border-radius: 20px;
            background-color: #FFF;
            text-align-last: center;
            text-transform: uppercase;
            font-family: Roboto, Arial;
        }

        button {
            display: block;
            margin: 10px auto;
        }
    }
</style>
