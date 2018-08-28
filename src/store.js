import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    machine: {
      name: "vendr",
      machineTotal: 0.00,
      items: [{
        id: 1,
        itemName: "Iced Vanilla Americano with Cream",
        price: 2.25,
        quantity: 5,
        imgUrl: "",
        disabled: false
      },
      {
        id: 2,
        itemName: "Iced Caramelizer with Whipped Cream",
        price: 4.00,
        quantity: 4,
        imgUrl: "",
        disable: false
      },
      {
        id: 3,
        itemName: "Iced Kicker Cold Brew",
        price: 5.75,
        quantity: 2,
        imgUrl: "",
        disabled: false
      }],
      wallet: {
        totalMoney: 20.00,
        currency: [{
          name: "Quarter",
          value: .25
        },
        {
          name: "Dollar",
          value: 1.00
        },
        {
          name: "5-Dollar",
          value: 5.00
        }]
      }
    }
  },
  mutations: {
    // create function to set the total $ to new total 
    setTotal(state, newTotal) {
      state.machine.total = newTotal
    },
    // create function to find selected item, compare quantity and price 
    makePurchase(state, obj) {
      let item = state.machine.find(i => i.id == obj.id) // find 
      item.quantity = obj.quantity // quantity 
      state.machine.machineTotal = obj.total // price 
    },
    // create function to find selected item, add disabled feature
    disableClass(state, obj) {
      let item = state.machine.find(i => i.id == obj.id)
      item.disabled = true
      console.log(item)
    },
    // create function to decrease wallet total to new total 
    decWallet(state, newTotal) {

    },
    // reset whole machine to 0 dollars and set wallet back to original total 
    resetVendr(state, sum) {

    }
  },
  actions: {
    // action will set current item to payload, compare item price to 
    // money in machine, compare quantity, set new total, commit the change,
    // and toggle disable true or false based on quantity of item left in machine.
    purchase({ dispatch, commit, state }, payload) {

    },
    // change total in machine to original amnt + change added 
    addMoney({ dispatch, commit, state }, payload) {

    },
    // let the new total be the sum in wallet - payload 
    decWallet({ dispatch, commit, state }, payload) {

    },
    // action will pick currency & its btn and compare if the btn value 
    // is more than what you currently have in wallet 
    checkMoney({ dispatch, commit, state }, payload) {

    },
    // action will give change by setting wallet total to its current total 
    // + current machine total 
    giveChange({ dispatch, commit, state }, payload) {

    }
  }
})
