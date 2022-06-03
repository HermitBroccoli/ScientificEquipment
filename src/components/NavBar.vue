<template>
  <header class="header py-[25px]">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-[24px] font-bold">
        <a href="/"><span class="text-[#147E45]">Scientific</span>Equipment</a>
      </h1>

      <nav>
        <ul class="header-list flex">
          <li
            class="header-item mr-[30px] font-normal text-[16px] text-[#4F5665]"
          >
            <a href="/">Главная </a>
          </li>
          <li
            class="
              header-item
              mr-[30px]
              font-normal
              text-[16px] text-[#4F5665]
              relative
            "
          >
            Оборудование
            <ul class="header-list_sub absolute w-[327px] py-[15px] px-[16px] shadow rounded left-0 bg-white z-50">
              <li class="header-item font-normal text-[16px] text-[#4F5665] mb-[10px] hover:text-[#1FB765]">
                <a href="/one"
                  >Переносной мотобур для отбора<br />ориентированных образцов
                  ПМБ-2б</a
                >
              </li>
              <!-- <router-link to="/one" class="font-normal text-[16px] text-[#4F5665] mb-[10px] hover:text-[#1FB765]">Переносной мотобур для отбора<br />ориентированных образцов ПМБ-2б</router-link> -->
              <li
                class="
                  header-item
                  font-normal
                  text-[16px] text-[#4F5665]
                  mb-[10px]
                  hover:text-[#1FB765]
                "
              >
                <a href="/two">Бак переносной с ручным насосом</a>
              </li>
              <li
                class="
                  header-item
                  font-normal
                  text-[16px] text-[#4F5665]
                  hover:text-[#1FB765]
                "
              >
                <a href="/three"
                  >Безрезьбовая буровая коронка<br />с алмазным наконечником</a
                >
              </li>
            </ul>
          </li>
          <li
            class="header-item mr-[30px] font-normal text-[16px] text-[#4F5665]"
          >
            <a href="/about">О нас</a>
          </li>
          <li
            class="header-item mr-[30px] font-normal text-[16px] text-[#4F5665]"
          >
            scienteq.pro@gmail.com
          </li>
        </ul>
      </nav>
      <div class="nav">
        <LangComponent></LangComponent>
      </div>
    </div>
  </header>
</template>

<script>
import LangComponent from './UI/LangComponent.vue';
export default { components: { LangComponent } };
</script>

<style lang="scss" scoped>
.header {
  &-list_sub {
    display: none;
  }

  &-item:hover > &-list_sub {
    display: inherit;
  }
}
</style>
