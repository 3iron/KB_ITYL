<template>
  <div>
    <Calc />
    <hr />
    <Composition />
    <hr />
    <Options />
  </div>
</template>

<script>
import Options from './components/Options.vue';
import Composition from './components/Composition.vue';
import Cacl from './components/Calc.vue';
export default {
  name: 'App',
  components: { Options, Composition },
};
</script>
