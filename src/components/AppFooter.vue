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
                    <router-link class="nav-link text-white" aria-current="page" :to="{ name: 'home' }">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white" aria-current="page" :to="{ name: 'about' }">
                        About
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white" aria-current="page" :to="{ name: 'contacts' }">
                        Contacts
                    </router-link>
                </li>
            </ul>

            <div class="row">
                <div class="col-6">
                    <p>
                        Made by PEPS
                    </p>
                </div>
                <div class="col-6">
                    TWITTER/LINKEDIN/GITHUB
                </div>
            </div>

        </div>
    </footer>
</template>

<style lang="scss" scoped></style>