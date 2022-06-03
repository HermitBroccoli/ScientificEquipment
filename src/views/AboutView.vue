<template>
  <div class="about-block">
    <div class="about-item container mx-auto flex">
      <div class="about-block__img max-w-[526px]">
        <img src="../assets/about/item1.png" alt="item1" />
      </div>
      <div class="about-block__text ml-[148px]">
        <h2 class="about-block__title text-[#0B132A] text-[35px] font-medium">
          О нас
        </h2>
        <div class="about-block__descr text-[#4F5665] text-[17px] font-normal mt-[16px] tracking-[.25px]">
          Scientific Equipment – небольшая научно-производственная<br />
          компания, специализирующаяся на разработке, производстве<br />
          и внедрении высокоточного оборудования и сопутствующих<br />
          изделий. Наши разработки используются в ведущих<br />
          институтах страны.<br />
          Основу команды составляют специалисты и разработчики,<br />
          имеющие опыт научной, инженерной и инновационной<br />
          деятельности.
        </div>
      </div>
    </div>
  </div>

  <div class="about-block mt-[180px]">
    <div class="about-item container mx-auto flex flex-row-reverse justify-between">
      <div class="about-block__img max-w-[526px]">
        <img src="../assets/about/item2.png" alt="item1" />
      </div>
      <div class="about-block__text mr-[148px]">
        <h2 class="about-block__title text-[#0B132A] text-[35px] font-medium">
          Контакты
        </h2>
        <div class="about-block__descr text-[#4F5665] text-[17px] font-normal mt-[16px]">
          email: scienteq.pro@gmail.com
        </div>
      </div>
    </div>
  </div>

  <question-component></question-component>
</template>

<script>
import questionComponent from "@/components/questionComponent.vue";
export default {
  components: { questionComponent },
};
</script>

<style lang="scss" scoped></style>
