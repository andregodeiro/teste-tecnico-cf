<template>

    <div v-for='(order, i) in orders' :key='i'>
        {{ order }} {{ order['nNf']}}
      </div>

    <div>
       

    </div>

</template>

<script setup>
import {computed, onMounted }from 'vue'
import { useStore } from 'vuex';

    const store = useStore();

    const getOrders = computed(() => {
        return store.state.getOrders
    });

    const orders = computed(() => {
        return store.state.ordersData
    });
    onMounted(() => {
        store.dispatch("fetchOrders")
    });

</script>