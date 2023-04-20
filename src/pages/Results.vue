<template>
    <div class="result__wrapper">
        <div class="result__title">Ваш результат рассчитан:</div>
        <p><u>Вы относитесь к 3% респондентов</u>, чей уровень интеллекта более чем на 
            15 пунктов отличается от среднего в большую или меньшую сторону! </p>
        <div class="result__action">Скорее получите свой результат!</div>
        <div class="result__personal">В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона</div>
        <div class="result__timer">Звоните скорее, запись доступна всего <span>{{ countdownTime }}</span> минут</div>

        <button class="result__call" @click="getResult">
            <span class="result__call-icon"></span>
            <span class="result__call-text">Позвонить и прослушать
            результат</span>
        </button>
        <table class="result__table">
            <tr class="result__table-row" v-for="(value, key, index) in results" :key="key">
                <template v-if="index < 8">
                    <td>{{key.charAt(0).toUpperCase() + key.slice(1)}}: </td>
                    <td>{{value}}</td>
                </template>
            </tr>
        </table>
        <p v-if="store.quizKeys.length > 0">Ключ к опросу (ответы): {{ store.quizKeys }}</p>
        <footer>
            TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, 
        </footer>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import { useStore } from '../store';

export default {
    setup() {
        const store = useStore();
        const countdownTime = ref('10:00');
        const results = ref(null)
        const timerId = ref(null)

        onMounted(() => {
            timerId.value = setInterval(updateCountdown, 1000);
            window.addEventListener('scroll', handleScroll);

        });
        onUnmounted(() => {
            clearInterval(timerId.value);
            window.removeEventListener('scroll', handleScroll);
        });

        const handleScroll = () => {
            const contentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (contentHeight - windowHeight - scrollTop <= 0) {
                document.querySelector('footer').classList.add('active');
            } 
        }

        const updateCountdown = () => {
            let [minutes, seconds] = countdownTime.value.split(':');
            minutes = parseInt(minutes);
            seconds = parseInt(seconds);

            seconds -= 1;

            if (seconds < 0) {
                seconds = 59;
                minutes -= 1;
            }

            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            countdownTime.value = `${minutes}:${seconds}`;
        };

        const getResult = async () => {
            await axios.get('https://swapi.dev/api/people/1/')
            .then(resp => {
                results.value = resp.data
            })
        }

        return {
            store,
            timerId,
            countdownTime,
            results,
            getResult
        };
    }
};
</script>



<style lang="scss" scoped>
.result {
    &__wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        background: url('../assets/quiz_bg.jpg');
        background-size: contain;
        min-height: calc(100vh - 46px);
        padding: 30px;
        font-family: 'PT Serif';
        font-style: normal;
        color: #fff;
        text-align: center;
    }

    &__title {
        font-weight: 700;
        font-size: 18px;
        text-transform: uppercase;
    }
    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }

    &__action {
        font-weight: 700;
        font-size: 18px;
        color: #3BDE7C;
        text-transform: uppercase;
    }

    &__personal {
        background: #1C2741;
        border-radius: 6px;
        color: #fff;
        text-transform: uppercase;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 2px;
        padding: 25px 15px;
    }

    &__timer {
        font-weight: 400;
        font-size: 16px;
        color: #3BDE7C;

        span {
            font-size: 20px;
        }
    }

    &__call {
        display: flex;
        column-gap: 15px;
        align-items: center;
        background-color: #EB1B00;
        color: #fff;
        border-radius: 5px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 15px;
        border: none;
        padding: 30px 20px;
        cursor: pointer;

        &-icon {
            background: url('../assets/phone_icon.png');
            width: 31px;
            height: 22px;
            background-size: cover;
        }
        &-text {
            text-align: left;
        }
    }
    &__table {
        &-row {
            td {
                text-align: left;
                padding: 0 5px;
                &:first-child {
                    width: 30%;
                }
                &:last-child {
                    width: 70%;
                }
            }
        }
    }
}

footer {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 7px;
    line-height: 9px;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    height: 20px;
    overflow: hidden;

    &.active {
        height: auto;
    }
}
</style>