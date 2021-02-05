<template>
    <nav class="navbar navbar-expand-lg  navbar-light bg-white sticky-top">
        <div class="container-lg">
            <a class="navbar-brand" href="/">Stripe決済 デモ</a>
            <button
                class="navbar-toggler border-0"
                type="button"
                @click="state.show_menu = !state.show_menu"
                aria-label="メニュー表示"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" :style="{ display: state.show_menu ? 'flex' : 'none' }" id="navbar-items">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" active-class="text-primary">ホーム</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="about" class="nav-link" active-class="text-primary">
                            ついて
                        </router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { reactive } from 'vue';
export default {
    setup() {
        const state = reactive({
            show_menu: false
        })
        return {
            state
        };
    },
};
</script>

<style lang="scss" scoped>

    .navbar-toggler {
        &:focus,
        &:active {
            outline: none;
            border: unset;
            box-shadow: none;
        }
    }

</style>
