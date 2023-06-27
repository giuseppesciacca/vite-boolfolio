<script>
import axios from 'axios';
import { store } from '../store';
import { router } from '../route';

export default {
    name: 'SingleProject',
    data() {
        return {
            first_half_url: store.urlBase + store.projects_path,
            project: [],
            store
        }
    },
    methods: {
        convertTecnology(tecnology) {
            if (tecnology === 'HTML5') {
                return 'html5';
            } else if (tecnology === 'CSS3') {
                return 'css3-alt';
            } else if (tecnology === 'JavaScript') {
                return 'square-js'
            } else if (tecnology === 'Vue.js') {
                return 'vuejs'
            } else if (tecnology === 'Bootstrap') {
                return 'bootstrap'
            } else if (tecnology === 'php') {
                return 'php'
            } else if (tecnology === 'Laravel') {
                return 'laravel'
            }
            return 'other';
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
                        router.push({ name: 'not-found' })
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

                <div v-if="this.project.tecnologies" class="meta">
                    <h6 class="pt-3">Tecnologie utilizzate:</h6>
                    <span v-for="tecnology in  this.project.tecnologies" :class="convertTecnology(tecnology.name)"
                        class="badge me-2">
                        <span v-if="convertTecnology(tecnology.name) == 'other'"> {{ tecnology.name }}
                        </span>

                        <span v-else>
                            <font-awesome-icon :icon="['fab', convertTecnology(tecnology.name)]" size="2xl" />
                        </span>
                    </span>
                </div>

                <div v-if="this.project.github_repo">
                    Link to github repository
                    <a :href="this.project.github_repo" target="blank">
                        <font-awesome-icon :icon="['fab', 'github']" size="lg" /></a>
                </div>

                <div v-if="this.project.project_link">
                    <a :href="this.project.project_link" target="blank">
                        Watch the project here</a>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.html5 {
    color: #e44d26;
}

.css3-alt {
    color: #2449d8;
}

.square-js {
    color: #f7df1e;
}

.bootstrap {
    color: #7108f5;
}

.vuejs {
    color: #3fb984;
}

.php {
    color: #787cb4;
}

.laravel {
    color: #e3382b;
}

.other {
    background-color: #212529;
}
</style>