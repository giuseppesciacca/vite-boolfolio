<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer id="app_footer" class="py-3 text-white">
        <div class="container">
            <div class="row">
                <div class="col-8 col-lg-9">
                    <h4>Links</h4>

                    <ul>
                        <li>
                            <router-link class="nav-link text-white d-inline" aria-current="page" :to="{ name: 'home' }">
                                Home
                            </router-link>
                        </li>
                        <li v-if="this.$route.name == 'home'" class="nav-item">
                            <a href="#about" class="nav-link">About</a>
                        </li>
                        <li>
                            <router-link class="nav-link text-white d-inline" aria-current="page"
                                :to="{ name: 'contacts' }">
                                Contact me
                            </router-link>
                        </li>
                    </ul>
                    <!-- links -->

                </div>

                <div class="col-4 col-lg-3">
                    <h4>Social</h4>

                    <a href="https://github.com/giuseppesciacca" class="me-2 github">
                        <font-awesome-icon :icon="['fab', 'github']" size="xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/giuseppe-s-b43079167" class="me-2 linkedin">
                        <font-awesome-icon :icon="['fab', 'linkedin']" size="xl" />
                    </a>
                </div>
            </div>

            <hr>

            <p class="m-0">
                © Copyright 2023. Made by Giuseppe Sciacca
            </p>
            <!-- credits -->
        </div>

    </footer>
</template>

<style lang="scss" scoped>
footer {
    font-family: 'Source Code Pro', monospace;
    min-height: 200px;
    background-color: black;
}

.github {
    color: white;
}

.linkedin {
    color: #0961b8;
}
</style>