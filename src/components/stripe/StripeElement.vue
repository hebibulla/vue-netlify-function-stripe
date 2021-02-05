<template>
    <div ref="container">
        <div ref="stripe_element" class="border rounded p-2"></div>
        <small class="text-danger" ref="card_error"></small>
        <button class="btn btn-primary mt-2 w-100" @click="charge">購入する</button>
    </div>
</template>

<script>
import { onMounted, reactive, ref} from 'vue';
import { loadStripe } from '@stripe/stripe-js';
import { uuid } from 'vue-uuid';
import axios from 'axios';

const _uuid = uuid.v4();

export default {
    setup () {

        const stripe_element = ref(null);
        const card_error = ref(null);
        const container = ref(null);

        const END_PONT = (import.meta.env.NODE_ENV === 'development' ? 'http://localhost:8888/' : window.location.href) + '.netlify/functions';

        let Axios = axios.create({ baseURL: END_PONT });

        const state = reactive({
            stripe: '',
            stripe_card_element:'',
            status: 'yes'
        })

        onMounted(async () => createStripe())


        const createStripe = async() => {

            state.stripe = await loadStripe(import.meta.env.SNOWPACK_PUBLIC_STRIPE_PUBLIC_KEY,{
                locale: 'ja'
            }); 
            var elements = state.stripe.elements();
            var style = {
                base: {
                    // Add your base input styles here. For example:
                    fontSize: '16px',
                    color: '#32325d',
                },
            };
            state.stripe_card_element = elements.create('card', {style: style,hidePostalCode:true});
            state.stripe_card_element.mount(stripe_element.value);

        }

        const charge = async(e) => {
            
            e.preventDefault();
            
            e.target.disabled = true;
            e.target.textContent = '決済中...';
            e.target.classList.add('btn-primary');
            e.target.classList.remove('btn-danger');
            card_error.value.innerText = '';
            
            try {

                const result = await state.stripe.createToken(state.stripe_card_element);

                if(result.error){
                    card_error.value.innerText = result.error.message;
                   throw new Error(result.error.message)
                }
                
                const response = await Axios.post("/stripe-charge",{
                    token: result.token.id,
                    idempotencyKey: _uuid
                })
                if(response.data.status !== 'succeeded'){
                    throw new Error(response.data.status);
                }

                state.status = response.data;

                container.value.innerHTML = `
                    <div class="alert alert-success">
                        <p class="mb-0">ご購入ありがとうございました！</p>
                    </div>
                `;



            } catch (error) {
                
                console.error(error)
                e.target.disabled = false;
                e.target.textContent = '決済失敗しました！';
                e.target.classList.remove('btn-primary');
                e.target.classList.add('btn-danger');

            }  
        }

        return {
            stripe_element,
            charge,
            state,
            card_error,
            container,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>