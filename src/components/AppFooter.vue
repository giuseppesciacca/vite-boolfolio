<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer id="app_footer" class="bg-dark py-3 text-white">
        <div class="container">

            <ul>
                <li>
                    <router-link class="nav-link text-white d-inline" aria-current="page" :to="{ name: 'home' }">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white d-inline" aria-current="page" :to="{ name: 'about' }">
                        About
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white d-inline" aria-current="page" :to="{ name: 'contacts' }">
                        Contacts
                    </router-link>
                </li>
            </ul>

            <div class="row">
                <div class="col-6">
                    <p>
                        Made by PEPS
                        <a href="https://github.com/giuseppesciacca" class="me-2">
                            <font-awesome-icon :icon="['fab', 'github']" size="2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/giuseppe-s-b43079167" class="me-2">
                            <font-awesome-icon :icon="['fab', 'linkedin']" size="2xl" />
                        </a>
                    </p>
                </div>
            </div>

        </div>
    </footer>
</template>

<style lang="scss" scoped></style>