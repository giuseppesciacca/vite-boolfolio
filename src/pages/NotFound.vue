<script>
export default {
    name: 'NotFound'
}
</script>

<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="div">
            <h1>Not Found</h1>
            <p>Oops, we couldn't find that page. Try going <router-link :to="{ name: 'home' }">Home</router-link></p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container {
    min-height: calc(100vh - 208px - 160px);
}
</style>