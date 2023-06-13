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
                <div v-for="project in        store.projects       " class="col">
                    <ProjectCard :img_path="this.getImgsFromPath(project.img_path)" :slug="project.slug"
                        :title="project.title" :description="project.description" :tecnologies="project.tecnologies"
                        :typeName="project.type.name" />
                </div>

            </div>
        </div>
    </main>
    <!-- /#app_main -->
</template>

<style lang="scss" scoped></style>