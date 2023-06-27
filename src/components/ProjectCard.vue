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
        truncateText(text) {
            if (text.length > 100) {
                const trucateText = text.slice('0', '95');
                return `${trucateText}[...]`
            }
            return text
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
                <div v-if="tecnologies">
                    <span v-for="tecnology in tecnologies" class="badge bg-primary me-2">{{ tecnology.name }}</span>
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
</style>