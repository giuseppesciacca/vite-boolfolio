<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter
    },
}
</script>

<template>
    <AppHeader />
    <!-- /#app_header -->

    <RouterView />
    <!-- /#app_main -->

    <AppFooter />
    <!-- /#app_footer -->
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
