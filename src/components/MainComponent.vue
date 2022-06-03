<template>
    <div class="homer mt-[75px] mb-[210px]">
        <div class="container mx-auto">
            <div class="slider flex justify-between">
                <h2 class="font-medium slider-title__mobile text-[35px]" v-html="text.h1"></h2>
                <div class="slider__img relative w-[600px] h-[497px] p-[20px] flex justify-center items-center">
                    <img class="slider-item" :src="text.src" alt="item" v-for="n in 1" :key="n">
                    <div class="slider__btn absolute flex space-x-4 bottom-0">
                        <div class="slider-btn__round  w-[15px] h-[15px] bg-[#EEEFF2] rounded-full" v-for="n in 4" :key="n"></div>   
                    </div>
                    <!-- <div
                        class="slider__prev absolute w-[60px] h-[60px] shadow-xl block rounded-full z-10 left-0 bg-center hover:bg-[#1FB765] active:bg-[#147E45]" @click="prevNext(-1)">
                    </div>
                    <div
                        class="slider__next absolute w-[60px] h-[60px] shadow-xl block rounded-full z-10 right-0 bg-center hover:bg-[#1FB765] active:bg-[#147E45]" @click="prevNext(1)">
                    </div> -->
                </div>
                <div class="slider__descr w-[50%] flex justify-center flex-col space-y-4">
                    <h2 class="font-medium text-[35px]" v-html="text.h1"></h2>
                    <small v-if="text.small != undefined" v-html="text.small" class="font-normal text-[14px] text-[#0B132A]"></small>
                    <h3 v-show="text.h2 != undefined" class="font-medium text-[22px]" v-html="text.h2"></h3>
                    <div class="slider__text text-[#4F5665] font-normal text-[17px]" v-html="text.text"></div>
                    <ParamsComponent :parm="text.items"></ParamsComponent>
                    <ui-button :style="0">{{ text.btn }}</ui-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ParamsComponent from './ParamsComponent.vue';
export default {    
    props: {
        text: {
            type: Object,
            required: true,
        }
    },
    components: { ParamsComponent },
    data() {
        return {
            itemSlider: 1,
        }
    },
    methods: {
        item(n) {
            console.log(this.itemSlider);
            const btns = document.querySelectorAll('.slider-btn__round')
            if (n > 4) {
                this.itemSlider = 1
            } else if (n < 1) {
                this.itemSlider = 4
            }

            btns.forEach(item=>{
                item.classList.remove('slider-btn__active')
            })
            btns[this.itemSlider-1].classList.add('slider-btn__active')

        },

        prevNext(n) {
            this.item(this.itemSlider+=n)
        }
    },
    mounted() {
        const btns = document.querySelectorAll('.slider-btn__round')
        btns[0].classList.add('slider-btn__active')
        setInterval(()=>{
            this.prevNext(1)   
        }, 2500)
    }
}
</script>

<style lang="scss">

@import '../scss/media.scss';

.slider {
    &__prev {
        cursor: pointer;
        background: url('../assets/icons/prev.svg') center center/cover no-repeat;
    }

    &__next {
        cursor: pointer;
        background: url('../assets/icons/next.svg') center center/cover no-repeat;
    }

    &-btn {
        transition: all .5s ease-in-out;
        &__round {
            transition: all .5s ease-in-out;
        }

        &__active {
            width: 24px;
            background: #147E45;
        }
    }
}

.hide {
    display: none;
}
</style>