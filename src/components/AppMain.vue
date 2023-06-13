<script>
import { store } from '../store';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'AppMain',
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
         * @param {string} imgPath 
         * @returns string
         */
        getImgsFromPath(imgPath) {
            return store.urlBase + 'storage/' + imgPath;
        },
        nextPage(path) {
            console.log(path);
            store.fetchProjects(path);
        },
        prevPage(path) {
            //console.log(path);
            store.fetchProjects(path);
        },
        firstPage(path) {
            //console.log(path);
            store.fetchProjects(path);
        },
        /**
         * 
         * @param {int} n_page 
         */
        numberPage(n_page) {
            //console.log(path);
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
        <div class="container">
            <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 gap-3 justify-content-center">
                <div v-for="project in        store.projects.data       " class="col">
                    <ProjectCard :img_path="this.getImgsFromPath(project.img_path)" :slug="project.slug"
                        :title="project.title" :description="project.description" :tecnologies="project.tecnologies"
                        :typeName="project.type.name" />
                </div>
                <!-- ./col -->
            </div>
            <!-- ./row -->

            <nav aria-label="Page navigation" v-if="store.projects.next_page_url || store.projects.prev_page_url">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous" @click="prevPage(store.projects.prev_page_url)">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item" :class="store.projects.current_page == 1 ? 'active' : ''" aria-current="page">
                        <a class="page-link" href="#" @click="firstPage(store.projects.first_page_url)">1</a>
                    </li>
                    <li class="page-item" :class="store.projects.current_page == 2 ? 'active' : ''"><a class="page-link"
                            href="#" @click="numberPage(2)">2</a></li>
                    <li class="page-item">
                        <a class="page-link" aria-label="Next" @click="nextPage(store.projects.next_page_url)">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- ./page navigation -->
        </div>
    </main>
    <!-- /#app_main -->
</template>

<style lang="scss" scoped></style>