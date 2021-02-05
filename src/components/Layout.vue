<template>
    <main>
        <navbar/>
        <div class="container-lg mt-5">
            <router-view/>
        </div>
    </main>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    components:{
        Navbar
    }
}
</script>

<style lang="scss" scoped>

</style>