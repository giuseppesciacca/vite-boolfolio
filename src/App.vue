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
            <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 gap-3">
                <div v-for="item in        store.projects       " class="col">
                    <div class="card h-100">
                        <img class="card-img-top" :alt="item.slug">
                        <div class="card-body">
                            <h4 class="card-title">{{ item.title }}</h4>
                            <div v-if="item.description">
                                <p class="card-text">{{ item.description }}</p>
                            </div>
                            <div v-if="item.tecnologies" v-for="tecnology in item.tecnologies">
                                <span class="badge bg-primary">{{ tecnology.name }}</span>
                            </div>
                        </div>
                        <div class="card-footer text-muted">
                            <div>
                                <span class="badge bg-secondary">{{ item.type.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>

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
