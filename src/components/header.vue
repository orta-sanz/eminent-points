<template>
    <section class="header">
        <div class="header--title">
            <h1>EMINENT</h1>
            <h2>DOMAIN</h2>
            <h3>- Asistente de Puntuación -</h3>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '../styles/_variables.scss';

    .header {
        display: flex;
        position: relative;
        margin-bottom: 64px;
        background-size: cover;
        justify-content: center;
        background-position: center center;

        &--title {
            color: #FFF;
            margin-top: 36px;
            text-align: center;

            h1, h2, h3 {
                margin: 0;
            }

            h1 {
                font-size: 70px;
                letter-spacing: -5px;
                text-shadow: 0px 0px 9px #403BEF;

                @media (min-width: $breakpoint-tablet) {
                    font-size: 90px;
                }
            }

            h2 {
                font-size: 30px;
                font-weight: 400;
                text-indent: 30px;
                letter-spacing: 30px;
            }

            h3 {
                margin-top: 15px;
                font-weight: 200;
            }
        }
    }
</style>
