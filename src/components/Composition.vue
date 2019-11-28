<template>
  <div>
    <p>x: {{ x }} y: {{ y }}</p>
  </div>
</template>

<script lang="ts">
import { watch } from "@vue/composition-api";
import { useMousePosition, useMousePosition2 } from "@/mouse";

export default {
  setup() {
    const { x, y } = useMousePosition();
    const pos = useMousePosition2();

    watch(() => {
      console.log("x", pos.x.value, "y", pos.y.value);
    });

    return { x, y };
  }
};
</script>
