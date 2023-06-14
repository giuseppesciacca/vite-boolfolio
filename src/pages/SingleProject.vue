<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SingleProject',
    data() {
        return {
            first_half_url: store.urlBase + store.projects_path,
            project: [],
            store
        }
    },
    mounted() {
        axios
            .get(`${this.first_half_url + this.$route.params.slug}`)
            .then(
                response => {
                    if (response.data.success) {
                        this.project = response.data.result;
                        //console.log(response.data.result);
                    } else {
                        //404
                    }
                })
    },
}
</script>

<template>
    <div class="container p-5">
        <div class="row row-cols-1 row-cols-lg-2">

            <div class="col" v-if="this.project.img_path">
                <img class="img-fluid" :src="this.store.getImgsFromPath(this.project.img_path)" alt="{{this.project.slug}}"
                    loading="lazy">
            </div>

            <div class="col">
                <h1>{{ this.project.title }}</h1>
                <p>{{ this.project.description }}</p>
                <div class="meta" v-if="this.project.type">
                    <span class="badge bg-primary">{{ this.project.type.name }}</span>
                </div>

                <div class="meta" v-if="this.project.tecnologies">
                    <span class="badge bg-primary" v-for="tecnology in this.project.tecnologies">{{ tecnology.name }}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>