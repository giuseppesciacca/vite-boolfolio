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
    }
}
</script>

<template>
    <div class="card h-100">
        <img class="card-img-top" :src="img_path" :alt="slug" loading="lazy">
        <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <div v-if="description">
                <p class="card-text">{{ description }}</p>
            </div>
            <div v-if="tecnologies" v-for="tecnology in tecnologies">
                <span class="badge bg-primary">{{ tecnology.name }}</span>
            </div>
        </div>
        <div class="card-footer text-muted">
            <div>
                <span class="badge bg-secondary">{{ typeName }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    aspect-ratio: 16 / 10;
    object-fit: cover;
    object-position: top;
}
</style>