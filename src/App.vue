<script>
import { store } from './store';
import ProjectCard from './components/ProjectCard.vue';

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        /**
         * 
         * @param {string} imgPath 
         * @returns string
         */
        getImgsFromPath(imgPath) {
            return store.urlBase + 'storage/' + imgPath;
        }
    },
    components: {
        ProjectCard
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
    <header id="app_header">
        <h1 class="text-center">My Boolfolio</h1>


    </header>
    <!-- /#app_header -->
    <main id="app_main">
        <div class="container">
            <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 gap-3 justify-content-center">
                <div v-for="project in        store.projects       " class="col">
                    <ProjectCard :img_path="this.getImgsFromPath(project.img_path)" :slug="project.slug"
                        :title="project.title" :description="project.description" :tecnologies="project.tecnologies"
                        :typeName="project.type.name" />
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
