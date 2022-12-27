<template>
    <div class="main-container">
        <div class="header-sistema"></div>
        <div class="page-header">
            <div class="page-header-title">
                <img src="../assets/icon-handshake.svg" alt="Ícone aperto de mãos">
                <p>Notas fiscais</p>
            </div>
                <p class="page-header-description">Visualize as notas fiscais que você tem.</p>
        </div>

        <div class="tabela-container">
            <table>
                <div class="header-tabela">
                    <tr>
                        <td>NOTA FISCAL</td>
                        <td>SACADO</td>
                        <td>CEDENTE</td>
                        <td>EMISSÃO</td>
                        <td>VALOR</td>
                        <td>STATUS</td>
                    </tr>
                </div>
                <div class="conteudo-tabela" v-for='(order, i) in orders' :key='i'>
                    <tr>
                        <td>{{order.nNf}}</td>
                        <td>{{order.buyers.name}}</td>
                        <td>{{order.providers.name}}</td>
                        <td>{{order.emissionDate}}</td>
                        <td>{{order.value}}</td>
                        <td>{{order.orderStatusBuyer}}</td>
                    </tr>
                </div>
            </table>
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

.main-container {
    display: flex;
    flex-direction: column;
}

.header-sistema {
    height: 64px;
    border: 1px solid black;
    color: #FFFF;
    border-bottom:1px solid #DFE2EB ;

}


.page-header {
    display: flex;
    flex-direction: column;
}

.page-header-title {
display: flex;
gap: 9px;
}

.page-header-title img {
    width: 24px;
}

.page-header-title p {
    color: #021B51;

}


.page-header-description {
    font-size: 14px;
    color: #727D94;
}

.header-tabela {
    font-size: 12px;
    color: #A1A8B8;
}

.conteudo-tabela {
    border: solid 1px green;
}


</style>