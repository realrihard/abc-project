<template>
    <section id="hero" class="hero">
        <p class="hero__uptitle">Пройти точный и быстрый</p>
        <h1 class="hero__title">Тест<br/> на определение<br/> IQ</h1>
        <div class="hero__link">
            <app-btn btnText="Пройти тест" @click="redirectToQuiz" />
        </div>
        <div class="hero__description">
            <p><span>И получите рекомендации по развитию своего интелекта</span><br /> и улучшению финансового благосостояния и личной жизни</p>
        </div>
        <div class="hero__more" @click="scrollToAnchor">
            <div class="hero__more-btn"><img src="../assets/arrow_icon.png" alt=""></div>
            <div class="hero__more-text">Подробнее</div>
        </div>
    </section>
    <section id="quote" class="quote">
        <div class="quote__block">
            <p>Профессиональный<br /> IQ-тест позволяет не только определить коэффициент вашего интеллекта, 
но и выработать список рекомендаций для повышения этого показателя.</p>
        </div>
    </section>
    <section id="action" class="action">
        <div class="action__text">
            <p>Также по результатам теста
                <strong><span>вы получите</span></strong> подробные <strong><span>советы</span></strong> по определению наиболее перспективной <strong><span>для вашего типа</span> интеллекта <span>сферы деятельности</span></strong>, 
                которая принесет вам скорейший финансовый результат.
                </p>
        </div>
        <div class="action__image">
            <img src="../assets/brain_2.jpg" alt="">
        </div>
        <app-btn btnText="Пройти тест" @click="redirectToQuiz" />
    </section>
    <section id="info" class="info">
        <div class="info__text">
            <p>Прохождение теста займет у вас не более <span>12 минут</span>, а его результаты вы сможете <span>использовать всю жизнь.</span></p>
        </div>
        <div class="info__attention">
            <p>Профессиональная интерпретация и детально <strong>проработанные рекомендации</strong> позволят вам качественно <strong>изменить все аспекты своей жизни:</strong> от финансового до любовного.</p>
        </div>
        <div class="info__link">
            <app-btn-outline btnText="Пройти тест" @click="redirectToQuiz" />
        </div>
        <div class="copyright">&copy; 2019</div>
    </section>
</template>

<script>
import { useRouter } from 'vue-router'
import VueScrollTo from 'vue-scrollto';

    export default {
        setup() {
            const router = useRouter()

            const redirectToQuiz = () => {
                router.replace({ name: 'quiz' });
                window.scrollTo(0, 0);
            }

            const scrollToAnchor = () => {
                VueScrollTo.scrollTo('#action', 500, { easing: 'ease-in' });
            }
            return {
                router,
                redirectToQuiz,
                scrollToAnchor
            }
        }
    }
</script>

<style lang="scss" scoped>
section {
    width: 100%;
    box-sizing: border-box;
}
.hero {
    display: flex;
    flex-direction: column;
    padding: 27px 15px 30px 15px;
    background: url('../assets/hero_bg.jpg');
    background-size: cover;
    color: #fff;
    text-align: center;

    &__title {
        font-family: 'Yeseva One';
        font-weight: 400;
        font-size: 30px;
        line-height: 35px;
        text-transform: uppercase;
        color: #FFC700;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 20px;
    }

    &__uptitle {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.05em;
    }

    &__link {
        margin-top: 130px;
    }
    &__description {
        margin-top: 22px;

        p {
            font-family: 'PT Serif';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 19px;

            span {
                color: #FFC700;
            }
        }
    }
    &__more {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 5px;
        margin-top: 30px;
        cursor: pointer;

        &-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }
    }
}

.quote {
    position: relative;
    background: url('../assets/quote_bg.jpg');
    background-size: cover;
    padding: 80px 36px;

    &::before{
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: url('../assets/q.png');
        width: 100%;
        height: 100%;
    }

    &__block {
        position: relative;
        color: #fff;
        text-align: center;
        z-index: 2;

        &::before {
            display: block;
            content: '';
            position: absolute;
            top: -36px;
            left: -10px;
            background: url('../assets/q_icon.png');
            width: 24px;
            height: 23px;
        }

        &::after {
            display: block;
            content: '';
            position: absolute;
            bottom: -20px;
            right: -10px;
            background: url('../assets/q_icon.png');
            width: 24px;
            height: 23px;
            transform: rotate(180deg);
        }

        p {
            font-family: 'Yeseva One';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 23px;
            letter-spacing: 0.05em;
        }
    }
}

.action {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    align-items: center;
    padding: 40px 10px;

    &__text {
        p {
            font-family: 'PT Serif';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;

            span {
                text-transform: uppercase;
            }
        }
    }
}

.info {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 56px 15px 20px 15px;
    background: url('../assets/info_bg.jpg');
    background-size: cover;
    color: #fff;
    text-align: left;

    &::before {
        position: absolute;
        top: 100px;
        right: 0;
        display: block;
        content: '';
        background: url('../assets/lightning.png');
        width: 123px;
        height: 211px;
        z-index: 1;
    }
    &::after {
        position: absolute;
        bottom: 80px;
        left: 0;
        display: block;
        content: '';
        background: url('../assets/lightning_2.png');
        width: 127px;
        height: 227px;
        z-index: 1;
    }

    &__text {
        width: 80%;
        p {
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
    
            span {
                font-weight: 700;
                color: #FFC700;
            }
        }
    }

    &__attention {
        position: relative;
        padding: 30px 15px;
        background: rgba(243, 243, 242, 0.8);
        border-radius: 20px;
        z-index: 2;

        p {
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 23px;
            color: #181818;
        }
    }

    &__link {
        display: flex;
        justify-content: center;
    }
}

.copyright {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: rgba(256, 256, 256, .5);
    text-align: center;
    margin-top: 20px;
}
</style>