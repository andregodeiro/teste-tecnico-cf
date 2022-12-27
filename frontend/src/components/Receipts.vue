<template>
    <div class="main-container">

        <div class="header-sistema"></div>

        <div class="page-header">

            <div class="page-header-title">
                <img src="../assets/icon-handshake-blue.svg" alt="Ícone aperto de mãos">
                <p>Notas fiscais</p>
            </div>
                <p class="page-header-description">Visualize as notas fiscais que você tem.</p>
        </div>

            <table class="tabela">

                <thead>

                <tr class="header-tabela">
                        <th class="item-header">NOTA FISCAL</th>
                        <th class="item-header">SACADO</th>
                        <th class="item-header">CEDENTE</th>
                        <th class="item-header">EMISSÃO</th>
                        <th class="item-header">VALOR</th>
                        <th class="item-header">STATUS</th>
                        <th class="item-header">  </th>
                </tr>

                </thead>

                <tbody>
                <div class="conteudo-tabela-container">
                <tr class="conteudo-tabela" v-for='(order, i) in orders' :key='i'>                                        
                                
                                <td>
                                <div class="item-tabela">{{order.nNf}}</div> 
                                </td>

                                <td>           
                                <div class="item-tabela">{{order.buyers.name}}</div>
                                </td> 
                                
                                <td> 
                                <div class="item-tabela">{{order.providers.name}}</div>                
                                </td>
                                
                                <td>   
                                <div class="item-tabela">{{dateConversion(order.emissionDate)}}</div>                                                  
                                </td>
                                
                                <td> 
                                <div class="item-tabela green" >{{brlConversion(order.value)}}</div>
                                </td>

                                <td>                      
                                <div class="item-tabela green" id="status">{{statusBuyer(order.orderStatusBuyer)}}</div>
                                </td>

                                <td class="cedente-btn">
                                <button>Dados do cedente</button>
                                </td>
                </tr>
                </div>
                </tbody>
            </table>
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


    function statusBuyer(property) {
        const status = {
        0:'Pendente de confirmação',
        1:'Pedido confirmado',
        2:'Não reconhece o pedido',
        3:'Mercadoria não recebida',
        4:'Recebida com avaria',
        5:'Devolvida',
        6:'Recebida com devolução parcial', 
        7:'Recebida e confirmada',
        8:'Pagamento Autorizado'
        };
        return status[property]
    }

    function dateConversion(value) {
        const date = new Date(value);
        const convertedDate = date.toLocaleDateString('pt-BR');
        return convertedDate;
    }

    function brlConversion(value) {
        const brl = new Intl.NumberFormat('pt-BR', {
            style: 'currency', 
            currency: 'BRL'
        }).format(value)
        return brl;
        
    }
</script>

<style>

.main-container {
    width: 81vw;
    display: flex;
    flex-direction: column;
    border-radius:15px 0px 0px 15px;
    box-shadow: 0px 10px 30px 0px #E1E5EC80;
}

.header-sistema {
    height: 4.5vw;
    color: #FFFF;
    border-bottom:1px solid #DFE2EB ;
}


.page-header {
    display: flex;
    flex-direction: column;
    padding: 30px 0px 0px 48px;
}

.page-header-title {
    display: flex;
    gap: 9px;
    margin: 0px;
}

.page-header-title img {
    width: 24px;
}

.page-header-title p {
    font-size: 24px;
    font-weight: 700;
    color: #021B51;
    margin: 0px;
}

.page-header-description {
    font-size: 14px;
    font-weight: 400;
    color: #727D94;
    margin: 5px 0px 0px 0px;
}


.tabela {
    padding: 22px 47px 0px 48px;
}


.header-tabela {
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: left;
}

.item-header {
    font-size: 12px;
    font-weight: 700;
    color: #A1A8B8;
}


.conteudo-tabela-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.conteudo-tabela {
    border: solid 1px #DFE2EB;
    border-radius: 6px;
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(7,1fr);
    align-items: center;
}


.item-tabela {
    font-size: 14px;
    font-weight: 500;
}


.green {
    color: #00AD8C;
}

#status {
    font-weight: 700;
    text-transform: uppercase;
}

button {
    color: #727D94;
    font-size: 12px;
    font-weight: 700;
    height: 32px;
    width: 165px;
    padding: 8px 29px;
    border: 1px solid #CAD3FF;
    border-radius: 24px;
    background-color: #ffff;
    cursor: pointer;
}


</style>