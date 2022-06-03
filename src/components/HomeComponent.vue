<template>
    <div class="home">
        <h2 class="font-medium text-[35px] text-[#0B132A]">Чем мы занимаемся?</h2>
        <div class="home-block container mx-auto relative">            
            <div class="home__descr font-normal text-[16px] text-[#4F5665] mt-[15px]">
                Компания <span class="font-bold">Scientific Equipment</span> занимается разработкой,<br>
                проектированием и созданием механизмов различного<br>
                назначения. Нашими основными направлениями деятельности<br>
                являются работы в разработке высокотемпературного и<br>
                вакуумного оборудования, а также механизированные системы с<br>
                высокими требованиями к точности изготовления.
            </div>
            <img class="absolute w-[442px] h-[316px] left-[50%] top-0" :src="img" alt="logo">
        </div>
        <ui-button :style="0" :alsoStyle="style" >Узнать подробнее</ui-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                img: require('../assets/Illustration.svg'),
                style: 'margin-top: 40px;'
            }
        }        
    }
</script>

<style lang="scss" scoped>

</style>