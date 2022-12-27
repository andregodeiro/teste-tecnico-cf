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
                <div class="conteudo-tabela-container">
                <div class="conteudo-tabela" v-for='(order, i) in orders' :key='i'>
                    <div class="linha-tabela">
                        <tr>
                            <div class="item-tabela">
                            <div>
                                <td>{{order.nNf}}</td>
                            </div>
                            <div>
                                <td>{{order.buyers.name}}</td>
                            </div>
                            <div>
                                <td>{{order.providers.name}}</td>
                            </div>
                            <div>
                                <td>{{order.emissionDate}}</td>
                            </div>
                            <div>
                                <td class="linha-verde">{{order.value}}</td>
                            </div>
                            <div>
                                <td class="linha-verde">{{order.orderStatusBuyer}}</td>
                            </div>
                            </div>
                        </tr>
                    </div>
                    <button class="cedente-btn">Dados do cedente</button>
                </div>
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
    border-radius:15px 0px 0px 15px;
    box-shadow: 0px 10px 30px 0px #E1E5EC80;
}

.header-sistema {
    height: 64px;
    color: #FFFF;
    border-bottom:1px solid #DFE2EB ;

}


.page-header {
    display: flex;
    flex-direction: column;
    padding: 47px 0px 0px 48px;
}

.page-header-title {
    display: flex;
    gap: 9px;
}

.page-header-title img {
    width: 24px;
}

.page-header-title p {
    font-size: 24px;
    font-weight: 700;
    color: #021B51;

}


.page-header-description {
    font-size: 14px;
    color: #727D94;
}

.tabela-container {
}


.header-tabela {
    font-size: 12px;
    color: #A1A8B8;
}

.header-tabela tr {
    display: flex;
    justify-content: space-around;
    width: 1177px;
}

.conteudo-tabela-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.conteudo-tabela {
    border: solid 1px #DFE2EB;
    border-radius: 6px;
    display: flex;
    gap: 10px;
    padding: 15px;
    width: 1177px;
    justify-content: space-between;
   
}

.item-tabela {
    display: flex;
    gap: 20px;
}

.linha-tabela tr {
    display: flex;
}

.linha-verde {
    color: #00AD8C;

}

button {
    color: #727D94;
    font-size: 12px;
    height: 32px;
    width: 165px;
    padding: 8px 29px;
    border: 1px solid #CAD3FF;
    border-radius: 24px;
    background-color: #ffff;
}


</style>