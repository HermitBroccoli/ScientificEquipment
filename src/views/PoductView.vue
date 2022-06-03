<template>
  <MainComponent :text="params"></MainComponent>
  <AlsoByComponent :imgs="imgs"></AlsoByComponent>
  <QuestionComponent></QuestionComponent>
</template>

<script>
import MainComponent from "@/components/MainComponent.vue";
import AlsoByComponent from "@/components/alsoByComponent.vue";
import QuestionComponent from "@/components/questionComponent.vue";
export default {
  data() {
    return {
      params: {
        items: [
          "Бензиновый двигатель 50 см3",
          "Вес ~5 кг",
          "Габариты 28 × 44 × 34 см.",
          "Система охлаждения водяная.",
        ],
        h1: "Переносной мотобур для отбора ориентированных образцов ПМБ-2б",
        text: "Ручной мотобур ПМБ-2б предназначен для отбора<br>геологических, геофизических, геохимических и прочих проб,<br>в частности для отбора ориентированных палеомагнитных<br>кернов стандартного диаметра.<br><br>Для обеспечения максимальной надёжности в конструкции<br>мотобура ПМБ-2б используется прямая передача крутящего<br>момента на буровую коронку, а его автономность обеспечена<br>двухтактным бензиновым двигателем 50 куб с<br> всенаправленной подачей топлива для бурения под любым<br>углом.<br><br>В устройстве мотобура ПМБ-2б предусмотрен простой<br>и надёжный тип крепления буровой коронки с открытым<br>хвостовиком позволяющий менять бур без использования<br>дополнительных инструментов.",
        btn: "Купить",
        src: require("../assets/slider/pila.png"),
        small: "(производство Россия)",
      },

      imgs: {
        0: {
          img: require("../assets/products/item1.png"),
          text: "10-литровый бак для воды<br>с ручным насосом.",
          title: "Бак переносной с ручным насосом",
        },
        1: {
          img: require("../assets/products/item2.png"),
          text: " Буровая коронка из<br>высокопрочной, немагнитной<br>нержавеющей стали",
          title: "Безрезьбовая буровая коронка<br>с алмазным наконечником",
        },
      },
    };
  },
  components: { MainComponent, AlsoByComponent, QuestionComponent },
};
</script>

<style lang="scss" scoped></style>
