<script>
export default {
    name: 'ProjectCard',
    props: {
        img_path: String,
        slug: String,
        title: String,
        description: String,
        tecnologies: Array,
        typeName: String
    },
    methods: {
        /**
         * 
         * @param {string} text 
         */
        truncateText(text) {
            if (text.length > 100) {
                const trucateText = text.slice('0', '95');
                return `${trucateText}[...]`
            }
            return text
        },
        /**
         * 
         * @param {string} tecnology 
         */
        convertTecnology(tecnology) {
            if (tecnology === 'HTML5') {
                return 'html5';
            } else if (tecnology === 'CSS3') {
                return 'css3-alt';
            } else if (tecnology === 'JavaScript') {
                return 'js'
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
}
</script>

<template>
    <router-link :to="{ name: 'single-project', params: { slug } }" class="text-decoration-none">

        <div class="card h-100">
            <img class="card-img-top" :src="img_path" :alt="slug" loading="lazy">
            <div class="card-body">
                <h4 class="card-title">{{ title }}</h4>
                <div v-if="description">
                    <p class="card-text">{{ truncateText(description) }}</p>
                </div>

                <div v-if="tecnologies" class="text-center">
                    <h6 class="pt-3">Tecnologie utilizzate:</h6>
                    <span v-for="tecnology in  tecnologies" :class="convertTecnology(tecnology.name)" class="badge me-2">
                        <span v-if="convertTecnology(tecnology.name) == 'other'"> {{ tecnology.name }}
                        </span>

                        <span v-else>
                            <font-awesome-icon :icon="['fab', convertTecnology(tecnology.name)]" size="2xl" />
                        </span>
                    </span>
                </div>
            </div>

            <div class="card-footer text-muted text-center">
                <div>
                    <span class="badge bg-secondary">{{ typeName }}</span>
                </div>
            </div>
        </div>


    </router-link>
</template>

<style lang="scss" scoped>
.card {
    box-shadow: 0px 1px 5px #888888;
}

img {
    aspect-ratio: 16 / 10;
    object-fit: cover;
    object-position: top;
}

.html5 {
    color: #e44d26;
}

.css3-alt {
    color: #2449d8;
}

.js {
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