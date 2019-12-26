<template>
    <section class="initial-form">
        <p>En primer lugar, introduce el nombre de los jugadores.</p>

        <form
            class="initial-form--wrapper"
            @submit="startGame"
        >
            <article
                v-for="playerNumber in 2"
                :key="playerNumber"
                class="initial-form--player"
            >
                <label class="initial-form--label">
                    <p>Jugador {{ playerNumber }}</p>

                    <div class="input-label initial-form--input">
                        <input
                            type="text"
                            :name="`${playerNumber === 1 ? 'one' : 'two'}`"
                            :class="`${$store.getters.playerName(playerNumber === 1 ? 'one' : 'two') ? 'filled' : ''}`"
                            @keyup="updatePlayerName"
                        >
                        <span>Introduzca un nombre</span>
                    </div>
                </label>
            </article>

            <button
                type="submit"
                name="button"
                class="btn initial-form--button"
            >
              ¡Empezar!
            </button>
        </form>
    </section>
</template>

<script>
export default {
    methods: {
        startGame: function(e) {
            e.preventDefault();

            if(this.$store.getters.playerName('one') && this.$store.getters.playerName('two')) {
                this.$store.commit('startNewGame');
            }
        },
        updatePlayerName: function({ target: { value, name } }) {
            this.$store.commit('setPlayerName', {
                player: name,
                name: value || null
            });
        }
    }
};
</script>

<style lang="scss" scoped>
    @import '../styles/_variables.scss';

    .initial-form {
        color: #FFF;
        margin: 0 16px;

        > p {
            font-weight: 300;
            flex-basis: 100%;

            @media (min-width: $breakpoint-tablet) {
                text-align: center;
            }
        }

        &--wrapper {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        &--player {
            flex-basis: 100%;

            p {
                font-weight: 300;
                text-indent: -1px;
                font-size: 30px;
                letter-spacing: -1px;
                text-transform: uppercase;
            }

            @media (min-width: $breakpoint-tablet) {
                flex-basis: 50%;
            }
        }

        &--label {
            margin: 0 auto;
            display: block;

            @media (min-width: $breakpoint-tablet) {
                width: 60%;
            }
        }

        &--input {
            margin: 0 auto;
            margin-top: 35px;
        }

        &--button {
            margin: 40px auto 0 auto;
        }
    }
</style>
