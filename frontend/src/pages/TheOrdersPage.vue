<template>
    <div class="page-container">

        <MySideBar  />
        <MyReicepts />
       
    </div>
</template>

<script>

import MySideBar from '../components/MySideBar.vue'
import MyReicepts from '../components/MyReceipts.vue'

export default {
    name: 'Orders',
    components: {
        MySideBar,
        MyReicepts
    },
    data() {
        return{}
    }
}

</script>

<style>

.page-container{
    display: flex;
}

</style>