<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header id="app_header" class="bg-light ">
        <div class="container">
            <div class="row">
                <div class="col-6 d-flex align-items-center gap-3 ">
                    <div class="icon">
                        <img class="img-fluid" src="../../public/ico.webp" alt="me">
                    </div>
                    Giuseppe Sciacca
                </div>
                <!-- .col-6 -->

                <div class="col-6">
                    <nav class="navbar navbar-expand navbar-light end justify-content-end h-100">
                        <ul class="nav navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">
                                    Home
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" aria-current="page" :to="{ name: 'about' }">
                                    About
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" aria-current="page" :to="{ name: 'contacts' }">
                                    Contacts
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                    <!-- /nav -->
                </div>
                <!-- /.col-6 -->
            </div>
            <!-- /.row -->
        </div>
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

h1 {
    height: 100%;
}
</style>