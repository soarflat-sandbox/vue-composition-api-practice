<template>
  <div>
    <p>count: {{ count }}</p>
    <p>double: {{ double }}</p>
    <p>{{ object.foo }}</p>
    <button @click="incrementCount">increment count</button>
    <button @click="onClick">ref atters</button>
  </div>
</template>

<script lang="ts">
import {
  createComponent,
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  SetupContext
} from "@vue/composition-api";

type Props = {
  name: string;
};

export default createComponent({
  props: {
    name: String
  },
  setup(props: Props, { attrs }) {
    const count = ref(0);
    const double = computed(() => count.value * 2);
    const object = reactive({
      foo: "bar"
    });

    const incrementCount = () => {
      count.value++;
    };

    const onClick = () => {
      console.log(attrs);
    };

    watch(() => {
      console.log(`name is: ${props.name}`);
    });

    onMounted(() => {
      console.log("onMounted");
    });

    return {
      count,
      double,
      object,
      incrementCount,
      onClick
    };
  }
});
</script>
