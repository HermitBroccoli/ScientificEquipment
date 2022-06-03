<template>
    <div class="lang">
        <div class="lang-modal w-[56px] bg-[#147E45] h-[29px] rounded-md flex justify-center content-center">
            <transition-group name="lang">
                <div class="lang-select bg-[#147E45] rounded-md text-white flex flex-col" @click="openS">
                    <div class="pl-[6px] pt-[3px] lang-item rounded-t-md">Ru</div>
                    <div class="pl-[6px] pt-[3px] lang-item">Eng</div>
                    <div class="pl-[6px] pt-[3px] lang-item rounded-b-md">Chi</div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            openS() {
                const select = document.querySelector('.lang-select')
                select.classList.toggle('lang-select__active')
            }
        }
    }
</script>

<style lang="scss">

.lang {
    &__img {
        width: 12px;
    }

    &-select {
        position: relative;
        height: 28.97px;
        max-height: 90px;
        overflow: hidden;
        &::after {
            content: '';
            display: block;
            position: absolute;
            width: 12px;
            height: 8px;
            background: url('../../assets/icons/arrow.svg') center center/cover no-repeat;
            top: 12.88px;
            right: 9px;
        }

        &__active {
            height: 86px;
        }
    }

    &-item {
        width: 56px;
        height: 29px;
        margin: 0;
        padding-bottom: 3px;
        //padding: 6px;
    }
}

.lang-enter-active,
.lang-leave-active {
  transition: all 0.5s ease;
}
.lang-enter-from,
.lang-leave-to {
  height: 80px;
}

@media screen and (max-width: 375px) {
    .lang {

        &-select {
            width: 56px;
            height: 43px;
            max-height: 130px;
            transition: all .5s ease-in-out;
            &__active {
                height: 126px;   
            }

            &::after {
                top: 20px;
                right: 9px;
            }
        }

        &-item {
            display: flex;
            align-items: center;
            width: 56px;
            min-height: 43px;
            padding: 0;
            padding-left: 6px;
            //margin-bottom: 6px;
            &:last-child {
                margin-bottom: 0;
            }
        }

        

    }
}

</style>