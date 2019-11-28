<template>
  <div id="app">
    <h1>Vue Composition API</h1>
    <h2>Setup</h2>
    <Setup name="soarflat" color="red" type="fire" />
    <h2>Props and Emit</h2>
    <PropsAndEmit />
    <h2>Composition</h2>
    <Composition />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Setup from "./components/Setup.vue";
import PropsAndEmit from "./components/PropsAndEmit.vue";
import Composition from "./components/Composition.vue";

export default Vue.extend({
  name: "app",
  components: {
    Setup,
    PropsAndEmit,
    Composition
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
