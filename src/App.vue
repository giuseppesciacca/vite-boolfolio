<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
}
</script>

<template>
    <AppHeader />
    <!-- /#app_header -->

    <AppMain />
    <!-- /#app_main -->

    <AppFooter />
    <!-- /#app_footer -->
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
