<template>
    <div class="page-container">

        <SideBar  />
        <Reicepts />
       
    </div>
</template>

<script>

import SideBar from '../components/SideBar.vue'
import Reicepts from '../components/Receipts.vue'

export default {
    name: 'Orders',
    components: {
        SideBar,
        Reicepts
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