<script>
import { store } from './store';

export default {
    data() {
        return {
            store
        }
    },
    mounted() {
        store.fetchProjects(store.urlProjectsApi)
    },
}
</script>

<template>
    <header id="app_header">
        <h1 class="text-center">My Boolfolio</h1>


    </header>
    <!-- /#app_header -->
    <main id="app_main">
        <div class="container">
            <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6">

            </div>
        </div>
    </main>
    <!-- /#app_main -->

    <footer id="app_footer"></footer>
    <!-- /#app_footer -->
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
