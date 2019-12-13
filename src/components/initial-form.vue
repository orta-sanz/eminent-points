<template>
    <section class="initial-form">
        <p>En primer lugar, introduce el nombre de los jugadores.</p>

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
            type="button"
            name="button"
            class="btn initial-form--button"
            @click="startGame"
        >
          ¡Empezar!
        </button>
    </section>
</template>

<script>
export default {
    methods: {
        startGame: function() {
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
    .initial-form {
        color: #FFF;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        text-align: center;

        > p {
            margin: 30px 0;
            font-weight: 300;
            flex-basis: 100%;
        }

        &--player {
            flex-basis: 50%;

            p {
                font-weight: 300;
                text-indent: -1px;
                font-size: 30px;
                letter-spacing: -1px;
                text-transform: uppercase;
            }
        }

        &--label {
            width: 60%;
            margin: 0 auto;
            display: block;
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
