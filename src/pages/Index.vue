<template>
    <section id="hero" class="hero">
        <p class="hero__uptitle">Пройти точный и быстрый</p>
        <h1 class="hero__title">Тест<br/> на определение<br/> IQ</h1>
        <div class="hero__image"></div>
        <app-btn btnText="Пройти тест" />
        <p class="hero__descript"><span>И получите рекомендации по развитию своего интелекта</span> и улучшению финансового благосостояния и личной жизни</p>
    </section>
    <section id="quote">
        <div class="quote">
            <p>Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, 
но и выработать список рекомендаций для повышения этого показателя.</p>
        </div>
    </section>
    <section class="descript">
        <div class="descript__text">
            <p>Также по результатам теста
                вы получите подробные советы по определению наиболее перспективной для вашего типа интеллекта сферы деятельности, 
                которая принесет вам скорейший финансовый результат.
                </p>
        </div>
        <div class="descript__image"></div>
        <btn-default btnText="Пройти тест" />
    </section>
    <section class="info">
        <div class="info__text">
            <p>Прохождение теста займет у вас не более 12 минут, а его результаты вы сможете использовать всю жизнь.</p>
        </div>
        <div class="info__attention">
            <p>Профессиональная интерпретация и детально <strong>проработанные рекомендации</strong> позволят вам качественно <strong>изменить все аспекты своей жизни:</strong> от финансового до любовного.</p>
        </div>
    </section>
    <footer></footer>
</template>

<script>
    export default {
        setup() {
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
    padding: 27px 15px 11px 15px;
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
}
</style>