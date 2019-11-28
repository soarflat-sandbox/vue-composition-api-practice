<template>
  <div>
    <button @click="upperCaseMessage">To upper case</button>
    <button @click="lowerCaseMessage">To lower case</button>
  </div>
</template>

<script lang="ts">
import { createComponent, SetupContext } from "@vue/composition-api";

type Props = {
  message: string;
};

export default createComponent({
  props: {
    message: {
      type: String,
      default: "default Value"
    }
  },
  setup(props: Props, context: SetupContext) {
    const upperCaseMessage = () => {
      context.emit("change-message-to-upper", props.message.toUpperCase());
    };
    const lowerCaseMessage = () => {
      context.emit("change-message-to-lower", props.message.toLowerCase());
    };

    return {
      upperCaseMessage,
      lowerCaseMessage
    };
  }
});
</script>
