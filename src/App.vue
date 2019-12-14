<template>
    <div>
        <SectionHeader />

        <transition name="fade">
            <InitialForm v-if="!$store.getters.gameIsStarted" />
        </transition>

        <transition name="fade">
            <section
                v-if="$store.getters.gameIsStarted"
                style="transition-delay: 0.5s;"
                class="player-board"
            >
                <PlayerBoard
                    :name="$store.getters.playerName('one')"
                    player="one"
                />
                <PlayerBoard
                    :name="$store.getters.playerName('two')"
                    player="two"
                />
            </section>
        </transition>
    </div>
</template>

<script>
import InitialForm from './components/initial-form.vue';
import PlayerBoard from './components/player-board.vue';
import SectionHeader from './components/section-header.vue';

export default {
    components: {
        PlayerBoard,
        InitialForm,
        SectionHeader
    }
};
</script>

<style lang="scss">
    @import './styles/_buttons.scss';
    @import './styles/inputs.scss';

    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: auto;
        font-family: Roboto, Arial
    }

    body {
        min-height: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background: linear-gradient(#EC186B, #361446);
    }

    h1 {
        font-size: 36px
    }

    h2 {
        font-size: 26px;
    }

    .fade-enter-active,
    .fade-leave-active,
    .fade-in-enter-active,
    .fade-in-leave-active {
        transition: opacity .5s;
    }

    .fade-in-enter,
    .fade-in-leave-to {
        opacity: 1;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .player-board {
        display: flex;
        justify-content: space-around;
    }
</style>
