<template>
  <MainComponent :text="params"></MainComponent>
  <HomeComponent></HomeComponent>
  <AlsoByComponent :imgs="imgs"></AlsoByComponent>
  <QuestionComponent></QuestionComponent>
</template>

<script>
import MainComponent from "@/components/MainComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import AlsoByComponent from "@/components/alsoByComponent.vue";
import QuestionComponent from "@/components/questionComponent.vue";
export default {
  name: "indexView",
  data() {
    return {
      params: {
        items: [
          "Бензиновый двигатель 50 см3",
          "Вес ~5 кг",
          "Габариты 28 × 44 × 34 см.",
          "Система охлаждения водяная.",
        ],
        h1: "Профессиональное<br>геологическое оборудование",
        h2: "Переносной мотобур для отбора<br>ориентированных образцов ПМБ-2б",
        text: "Ручной мотобур ПМБ-2б предназначен для отбора<br>геологических, геофизических, геохимических и прочих проб,<br>в частности для отбора ориентированных палеомагнитных<br>кернов стандартного диаметра.",
        btn: "Купить",
        src: require("../assets/slider/pila.png"),
        main:'Профессиональное<br>геологическое оборудование'
      },
      imgs: {
          0: {
              img: require('../assets/products/item1.png'),
              text: '10-литровый бак для воды<br>с ручным насосом.',
              title: 'Бак переносной с ручным насосом', 
          },
          1: {
              img: require('../assets/products/item2.png'),
              text: ' Буровая коронка из<br>высокопрочной, немагнитной<br>нержавеющей стали',
              title: 'Безрезьбовая буровая коронка<br>с алмазным наконечником',
          }
      }
    };
  },
  components: { MainComponent, HomeComponent, AlsoByComponent, QuestionComponent },
};
</script>

<style lang="scss" scoped></style>
