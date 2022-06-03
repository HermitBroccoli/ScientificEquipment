<template>
  <main-component :text="params"></main-component>
  <AlsoByComponent :imgs="imgs"></AlsoByComponent>
  <QuestionComponent></QuestionComponent>
</template>

<script>
import MainComponent from "@/components/MainComponent.vue";
import AlsoByComponent from "@/components/alsoByComponent.vue";
import QuestionComponent from "@/components/questionComponent.vue";
export default {
  components: { MainComponent, AlsoByComponent, QuestionComponent },
  data() {
    return {
      params: {
        items: [
          'Бак 10л',
        ],
        h1: "Бак переносной с ручным<br>насосом",
        text: "10-литровый бак для воды с ручным насосом. Комплект<br>включает 3-метровый шланг с быстроразъемными<br>соединениями. На баке имеются проушины для крепления<br>наплечного ремня.",
        btn: "Купить",
        src: require("../assets/slider/box.png"),
        small: "(Для использования с мотобуром ПМБ-2б.)",
      },

      imgs: {
        0: {
          img: require("../assets/products/item3.png"),
          text: "Ручной мотобур ПМБ-2б для отбора<br>геологических, геофизических,<br>геохимических и прочих проб",
          title:
            "Переносной мотобур для<br>отбора ориентированных<br>образцов ПМБ-2б",
        },
        1: {
          img: require("../assets/products/item2.png"),
          text: " Буровая коронка из<br>высокопрочной, немагнитной<br>нержавеющей стали",
          title: "Безрезьбовая буровая коронка<br>с алмазным наконечником",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
