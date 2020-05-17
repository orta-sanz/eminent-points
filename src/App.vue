<template>
    <div>
        <Header />

        <transition name="fade">
            <PlayerForm v-if="!$store.getters.gameIsStarted" />
        </transition>

        <transition name="fade">
            <section
                v-if="$store.getters.gameIsStarted"
                style="transition-delay: 0.5s;"
                class="player-board"
            >
                <PointsSelect
                    :name="$store.getters.playerName('one')"
                    player="one"
                />
                <PointsSelect
                    :name="$store.getters.playerName('two')"
                    player="two"
                />
            </section>
        </transition>
    </div>
</template>

<script>
import Header from './components/header.vue';
import PlayerForm from './components/player/form.vue';
import PointsSelect from './components/points/select.vue';

export default {
    components: {
        PointsSelect,
        PlayerForm,
        Header
    }
};
</script>

<style lang="scss">
    @import './styles/vendors/fontello.css';
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
