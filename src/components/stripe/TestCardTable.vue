<template>
    <div ref="test_card_table" class="table-responsive">
        <table class="table">
            <thead>
                <tr class="fw-bold fs-6">
                    <td scope="col"><small class="text-nowrap">カード番号</small></td>
                    <td scope="col"><small class="text-nowrap">カード会社</small></td>
                    <td scope="col"><small class="text-nowrap">カード種類</small></td>
                    <td scope="col"><small class="text-nowrap">cvc(認証番号)</small></td>
                    <td scope="col"><small class="text-nowrap">有効期限</small></td>
                </tr>
            </thead>
            <tbody >
                <tr class="text-muted fs-6" scope="row" v-for="(item,index) in cards" :key="index">
                    <td scope="col"><p class="text-nowrap">
                        <button class="btn bg-white rounded shadow-sm" @click="copyToClipBoard($event,index)" >
                            <svg style="pointer-events: none;" @click.stop xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check mr-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                            </svg>
                            &nbsp;
                            <span style="pointer-events: none;" :id="'card-number' + index" > {{ item.number }}</span>
                        </button>
                    </p></td>
                    <td scope="col"><p class="text-nowrap">
                        {{ item.brand }}
                    </p></td>
                    <td scope="col"><p class="text-nowrap">
                        {{ item.type }}
                    </p></td>
                    <td scope="col"><p class="text-nowrap">
                        {{ item.cvc }}
                    </p></td>
                    <td scope="col"><p class="text-nowrap">
                        {{ item.date }}
                    </p></td>
                </tr>
            
            </tbody>
        </table>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup () {
        
        const cards = [
            {
                number: 4242424242424242,
                brand: 'Visa',
                type: 'クレジットカード',
                cvc: '任意3桁の数字',
                date: '任意有効な期限'
            },
            {
                number: 4000056655665556,
                brand: 'Visa',
                type: 'デビットカード',
                cvc: '任意3桁の数字',
                date: '任意有効な期限'
            },
            {
                number: 5555555555554444,
                brand: 'MasterCard',
                type: 'クレジットカード',
                cvc: '任意3桁の数字',
                date: '任意有効な期限'
            },
            {
                number: 5200828282828210,
                brand: 'MasterCard',
                type: 'デビットカード',
                cvc: '任意3桁の数字',
                date: '任意有効な期限'
            },
            {
                number: 378282246310005,
                brand: 'American Express',
                type: 'クレジットカード',
                cvc: '任意4桁の数字',
                date: '任意有効な期限'
            },
            {
                number: 3566002020360505,
                brand: 'JCB',
                type: 'クレジットカード',
                cvc: '任意4桁の数字',
                date: '任意有効な期限'
            },
        ]

        const test_card_table = ref(null);

        const copyToClipBoard = async (event,index) => {

            const clicked_target = event.target;
            const current_text = document.querySelector('#card-number'+index).textContent;

            //ボタンを無効に
            clicked_target.disabled = true;
            
            ///////////////////////////////////////////////////
            //クリップボード処理
            ///////////////////////////////////////////////////

            let input = document.createElement('input');
            input.value = current_text;
            test_card_table.value.appendChild(input);
            input.select();

            document.execCommand('copy');
            
            test_card_table.value.removeChild(input);

            ///////////////////////////////////////////////////
            //tooltip　表示
            ///////////////////////////////////////////////////
            const tooltip = createToolTip();
            
            clicked_target.appendChild(tooltip);

            const removeTooltip = () => new Promise(resolve => {
                setTimeout(() => {
                    clicked_target.removeChild(tooltip);
                    resolve(true);
                }, 3000); 
            }) 
            await removeTooltip();
            //ボタンを有効に
            clicked_target.disabled = false;

            
        }

        const createToolTip = () => {

            const div = document.createElement('div');
            
            div.id = "tooltip";
            div.role = "tooltip";
            div.innerHTML= `
                <div id="arrow" style="pointer-events: none;" data-popper-arrow><small>コピーしました!</small></div>
            `;

            return div;
        }

        return {
            cards,
            copyToClipBoard,
            test_card_table
        }
    }
}
</script>

<style lang="scss" scoped>

</style>