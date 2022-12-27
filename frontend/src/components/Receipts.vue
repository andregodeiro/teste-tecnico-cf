<template>
    <div class="main-container">

        <div v-for='(order, i) in orders' :key='i'>
            {{ order }}
        </div>

    </div>
</template>

<script setup>
import {computed, onMounted }from 'vue'
import { useStore } from 'vuex';


    const store = useStore();

    const orders = computed(() => {
        return store.state.ordersData
    });
    onMounted(() => {
        store.dispatch("fetchOrders")
    });

</script>

<style>

.main-container{
    display: flex;
}

</style>