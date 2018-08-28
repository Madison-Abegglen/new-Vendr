<!-- set template to display name, items and their info/btn, the current 
money in machine, and add currency btn --> 
<template>
  <div class="vendr">
    <h1>{{machine.name}}</h1>
    <h4>Machine Total: <br>${{machine.machineTotal}}</h4>
    <div class="row">
      <div class="col-4" v-for="item in machine.items" :key="item.id">
        <h2>{{item.name}}</h2>
        <img :src="item.imgUrl" alt=""/>
        <h4>${{item.price}}</h4>
      </div>
    </div>
    <button class="btn" type="button" @click="addCurrency('quarter')">Quarter</button>
    <button class="btn" type="button" @click="addCurrency('dollar')">Dollar</button>
    <button class="btn" type="button" @click="addCurrency('fiveDollar')">5-Dollar</button>
  </div>
</template>

<script>
export default {
  methods: {
    addCurrency(type) {
      this.$store.dispatch("addCurrency", type);
    }
    // correspond with what you wrote in the store
    // purchase(value) {},
    // moveTheMoney() {},
    // getMoneyBack() {}
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