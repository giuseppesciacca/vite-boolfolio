<script>
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'AppHome',
    data() {
        return {
            store
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        /**
         * 
         * @param {string} path 
         */
        nextOrPrevPage(path) {
            store.fetchProjects(path);
        },
        /**
         * 
         * @param {int} n_page 
         */
        numberPage(n_page) {
            store.fetchProjects(store.urlBase + store.projects_path + '?page=' + n_page);
        }
    },
    mounted() {
        /**
         * @returns array with projects, type, tecnologies
         */
        store.fetchProjects(store.urlBase + store.projects_path)
    },
}
</script>

<template>
    <main id="app_main">
        <div class="container py-5">
            <h3 class="text-center py-3">Suilad, mellon! Dai un'occhiata ai miei ultimi progetti!</h3>

            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center">
                <div v-for="project in store.projects.data" class="col">
                    <ProjectCard :img_path="this.store.getImgsFromPath(project.img_path)" :slug="project.slug"
                        :title="project.title" :description="project.description" :tecnologies="project.tecnologies"
                        :typeName="project.type.name" />
                </div>
                <!-- ./col -->
            </div>
            <!-- ./row -->

            <nav aria-label="Page navigation" v-if="store.projects.next_page_url || store.projects.prev_page_url"
                class="py-3">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link" href="#" aria-label="Previous"
                            :class="store.projects.prev_page_url == null ? 'disabled' : ''"
                            @click="nextOrPrevPage(store.projects.prev_page_url)">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <li class="page-item" :class="store.projects.current_page == 1 ? 'active' : ''" aria-current="page">
                        <button class="page-link" href="#" @click="numberPage(1)">1</button>
                    </li>
                    <li class="page-item" :class="store.projects.current_page == 2 ? 'active' : ''"><button
                            class="page-link" href="#" @click="numberPage(2)">2</button></li>
                    <li class="page-item" :class="store.projects.current_page == store.projects.last_page ? 'active' : ''">
                        <button class="page-link" href="#" @click="numberPage(store.projects.last_page)"> {{
                            store.projects.last_page }} </button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" aria-label="Next" @click="nextOrPrevPage(store.projects.next_page_url)"
                            :class="store.projects.next_page_url == null ? 'disabled' : ''">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <!-- ./page navigation -->
        </div>
    </main>
    <!-- /#app_main -->
</template>

<style lang="scss" scoped></style>