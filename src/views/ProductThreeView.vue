<template>
  <main-component :text="params"></main-component>
  <also-by-component :imgs="imgs"></also-by-component>
  <question-component></question-component>
</template>

<script>
import MainComponent from "@/components/MainComponent.vue";
import AlsoByComponent from "@/components/alsoByComponent.vue";
import QuestionComponent from '@/components/questionComponent.vue';
export default {
  components: { MainComponent, AlsoByComponent, QuestionComponent },
  data() {
    return {
      params: {
        items: [
          "Внутренний диаметр - 2.5 см",
          "Внешний диаметр – 2.9 см",
          "Длина - 23 см",
        ],
        h1: "Безрезьбовая буровая<br>коронка с алмазным<br>наконечником",
        text: "Буровая коронка изготовлена из высокопрочной, немагнитной<br>нержавеющей стали. Алмазное напыление на режущей кромке<br>шириной 12 мм с диаметральными вырезами обеспечивает<br>качественное и плавное бурение. Буровая коронка<br>предназначена для мокрого бурения. Диаметр получаемого<br>керна соответствует стандартному диаметру<br>паеломагнитного образца и типовых ориентирующих<br>устройств..",
        btn: "Купить",
        src: require("../assets/slider/pice.png"),
        small: "(Для использования с мотобуром ПМБ-2б.)",
      },

      imgs: {
        0: {
          img: require("../assets/products/item3.png"),
          text: "Ручной мотобур ПМБ-2б для отбора<br>геологических, геофизических,<br>геохимических и прочих проб",
          title: "Профессиональное<br>геологическое оборудование",
        },
        1: {
          img: require("../assets/products/item1.png"),
          text: "10-литровый бак для воды<br>с ручным насосом.",
          title: "Бак переносной с ручным насосом",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
