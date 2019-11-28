import {
  reactive,
  ref,
  toRefs,
  onMounted,
  onUnmounted
} from "@vue/composition-api";

export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function update(e: MouseEvent) {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return { x, y };
}

export function useMousePosition2() {
  const pos = reactive({
    x: 0,
    y: 0
  });

  function update(e: MouseEvent) {
    pos.x = e.pageX;
    pos.y = e.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return toRefs(pos);
}
