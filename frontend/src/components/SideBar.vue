<template>
    <div class="sidebar-container">
        <div class="header-logo">
            <img class="logo-cashforce" src="../assets/logo.svg" alt="Logo da Cashforce">
        </div>
        <div class="menu">
            <div class="selected-item"></div>
            <div class="menu-item">
            
                <div class="menu-item-icon">
                    <img src="../assets/icon-handshake.svg" alt="Ícone aperto de mãos">
                </div>
                <div class="menu-item-text">
                    <p>Notas fiscais</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return{}
    }
}
</script>

<style>

.sidebar-container {
    height: 100vh;
    width: 288px;
    margin-left: 0px;
    margin-top: 0px;
    border: 1px solid red;
    background-color: #FBFDFE;
}

.header-logo {
    border: 1px solid blue;
    height: 80px;
    width: 288px;
    display: flex;
}

.logo-cashforce {
    width: 160px;
    margin-left: 24px;
}

.menu {
    border: 1px solid purple;
    height: 64px;
    width: 288px;
    display: flex;
}

.selected-item{
    height: 64px;
    width: 4px;
    background-color: #00AD8C;
    border-radius: 4px;

}

.menu-item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: 25px;
}

.menu-item-text {
    font-size: 14px;
    color: #00AD8C

}

</style>