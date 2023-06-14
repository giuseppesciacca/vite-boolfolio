<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header id="app_header" class="py-5 bg-dark text-danger">
        <div class="container">
            <h1 class="text-center">My Boolfolio</h1>

            <nav class="navbar navbar-expand navbar-light bg-dark">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active text-white" aria-current="page" :to="{ name: 'home' }">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white" aria-current="page" :to="{ name: 'about' }">
                            About
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white" aria-current="page" :to="{ name: 'contacts' }">
                            Contacts
                        </router-link>
                    </li>
                </ul>
            </nav>
            <!-- /nav -->
        </div>
    </header>
</template>

<style lang="scss" scoped></style>