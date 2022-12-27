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

       
            <div class="tabela">

                <div class="header-tabela">
                        <div class="item-header">NOTA FISCAL</div>
                        <div class="item-header">SACADO</div>
                        <div class="item-header">CEDENTE</div>
                        <div class="item-header">EMISSÃO</div>
                        <div class="item-header">VALOR</div>
                        <div class="item-header">STATUS</div>
                </div>

                <div class="conteudo-tabela-container">
                <div class="conteudo-tabela" v-for='(order, i) in orders' :key='i'>
                    
                    
                            <div class="item-tabela-container">
                                
                                <div>
                                <div class="item-tabela">{{order.nNf}}</div> 
                                </div>

                                <div class="itens-centrais">           
                                <div class="item-tabela">{{order.buyers.name}}</div>                                                     
                                <div class="item-tabela">{{order.providers.name}}</div>                
                                <div class="item-tabela">{{dateConversion(order.emissionDate)}}</div>                                                  
                                <div class="item-tabela green" >{{brlConversion(order.value)}}</div>
                                <div class="item-tabela green" id="status">{{statusBuyer(order.orderStatusBuyer)}}</div>
                                </div>

                          
                            </div>
                    <div class="cedente-btn">
                    <button>Dados do cedente</button>
                    </div>
                </div>
                </div>
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
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    
}

.item-header {
    text-align: start;
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
    width: 75vw;
    border: solid 1px #DFE2EB;
    border-radius: 6px;
    gap: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
 
}

.item-tabela-container {
    width: 100%;
    gap: 100px;
    display: flex;
    align-items: center;
}

.item-tabela {
    font-size: 14px;
    font-weight: 500;
}


.itens-centrais {
    display: flex;
    align-items: center;
    gap: 50px;
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