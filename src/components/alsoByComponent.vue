<template>
    <div class="products mt-[100px]">
        <div class="container mx-auto">
            <h2 class="font-medium text-[35px] text-[#0B132A]">С этим товаром покупают :</h2>
            <div class="products-items flex mt-[127px]">
                <div class="products-item flex w-[550px]" v-for="img in imgs" :key="img">
                    <div class="products-item__img">
                        <img :src="img.img" alt="product">
                    </div>
                    <div class="products-item__text flex flex-col justify-between">
                        <h2 class="font-medium text-[19px] text-[#0B132A]" v-html="img.title"></h2>
                        <div class="products-item__descr font-normal text-[17px] text-[#4F5665] mt-[12px]" v-html="img.text"></div>
                        <ui-button :style="1">Купить</ui-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            imgs: {
                type: Array,
                required: true,
            }
        }        
    }
</script>

<style lang="scss" scoped>

</style>