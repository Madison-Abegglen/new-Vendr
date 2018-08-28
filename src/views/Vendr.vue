<!-- set template to display name, items and their info/btn, the current 
money in machine, and add currency btn --> 
<template>
  <div class="vendr">
    <h1>{{machine.name}}</h1>
  </div>
</template>


<script>
export default {
  methods: {
    // correspond with what you wrote in the store
    purchase(value) {},
    moveTheMoney() {},
    getMoneyBack() {}
  },
  computed: {
    // correspond with what you wrote in store, remember to return**
    machine() {
      return this.$store.state.machine;
    },
    wallet() {},
    currentMoney() {}
  }
};
</script>

<!-- make everything purty --> 
<style>
</style>