<template>
  <div>
    <h2>{{ state.message }}</h2>
    <PropsAndEmitChild
      :message="state.message"
      @change-message-to-upper="changeMessage"
      @change-message-to-lower="changeMessage"
    />
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from "@vue/composition-api";
import PropsAndEmitChild from "@/components/PropsAndEmitChild.vue";

export default createComponent({
  components: {
    PropsAndEmitChild
  },
  setup() {
    const state = reactive({
      message: "Hello"
    });

    const changeMessage = (message: string) => {
      state.message = message;
    };

    return {
      state,
      changeMessage
    };
  }
});
</script>
