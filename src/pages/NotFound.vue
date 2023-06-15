<script>
export default {
    name: 'NotFound'
}
</script>

<template>
    <div>
        <div class="container">
            <h1>Not Found</h1>
            <p>Oops! Try going</p>
            <router-link :to="{ name: 'home' }">Home</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>