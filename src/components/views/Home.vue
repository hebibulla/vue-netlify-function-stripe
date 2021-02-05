<template>
    <div ref="container" class="row gx-5">
        <div class="col-lg-6 col-12">
            <item-card/>
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 col-12">
            <p class="text-dark">以下のテキストカードでお試しください</p>
            <test-card-table/>
        </div>
    </div>
</template>

<script>
import ItemCard from '../stripe/ItemCard.vue';
import TestCardTable from '../stripe/TestCardTable.vue';
export default {
  components: { TestCardTable, ItemCard },
  setup(){
  }
}
</script>

<style lang="scss" scoped>

</style>