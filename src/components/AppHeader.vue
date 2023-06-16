<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header id="app_header" class="bg-light ">
        <div class="container">
            <div class="row">
                <div class="col-10 col-md-6 d-flex align-items-center gap-3 ">
                    <div class="icon">
                        <img class="img-fluid" src="../../public/ico.webp" alt="me">
                    </div>
                    <h1 class="m-0 fw-semibold fs-5">Giuseppe Sciacca</h1>
                </div>
                <!-- /.col-6 left -->

                <div class="col-2 col-md-6 d-flex justify-content-end">

                    <nav class="navbar navbar-expand-md navbar-light justify-content-end h-100">

                        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <!-- /hamburgher btn -->

                        <div class="collapse navbar-collapse" id="collapsibleNavId">
                            <ul class="navbar-nav me-auto mt-2 mt-lg-0 fw-semibold fs-5">
                                <li class="nav-item f">
                                    <router-link class="nav-link" :class="this.$route.name == 'home' ? 'active' : ''"
                                        aria-current="page" :to="{ name: 'home' }">
                                        Home
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" :class="this.$route.name == 'about' ? 'active' : ''"
                                        aria-current="page" :to="{ name: 'about' }">
                                        About
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" :class="this.$route.name == 'contacts' ? 'active' : ''"
                                        aria-current="page" :to="{ name: 'contacts' }">
                                        Contacts
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <!-- /nav -->

                </div>
                <!-- /.col-6 right-->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </header>
</template>

<style lang="scss" scoped>
header {
    min-height: 100px;
    box-shadow: 0px 1px 10px #888888;
    font-family: 'Source Code Pro', monospace;
}

.row {
    min-height: 100px;
}

.icon {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    overflow: hidden;
}
</style>