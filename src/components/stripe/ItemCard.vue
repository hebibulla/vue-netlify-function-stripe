<template>
        <div class="card shadow-sm" >
            <div class="card-body">
                <h5 class="card-title">とてもいい本</h5>
                <img src="https://images.unsplash.com/photo-1560278674-4a17b808730a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="book image" class="card-img-top w-100">
                <p class="card-text text-secondary mt-3">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div class="card-footer ">
                <div class="top d-flex justify-content-between align-items-center">
                    <p class="card-text mb-0">
                        価格: <span class="h6">税込1500円</span>
                    </p>
                    <button @click="state.show_stripe = !state.show_stripe" type="button" class="btn bg-white border shadow-sm">
                        {{ state.show_stripe ? '非表示' : '決済表示' }}
                    </button>
                </div>
                <div v-if="state.show_stripe" class="bottom my-3 border-tom">
                    <stripe-element/>
                </div>
            </div>
        </div>
</template>

<script>
import { reactive } from 'vue'
import StripeElement from './StripeElement.vue'
export default {
  components: { StripeElement },
    setup () {
      const state = reactive({
          show_stripe: false
      })

      return{
          state
      }
    }
}
</script>

<style lang="scss" scoped>

</style>